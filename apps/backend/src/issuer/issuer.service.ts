import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios, { AxiosError, AxiosInstance } from 'axios';
import { pick } from 'lodash';

interface IssueCertificateDTO {
  deviceId: string;
  energy: string;
  fromTime: Date;
  toTime: Date;
}

interface TransferCertificateDTO {
  id: number;
  fromAddress: string;
  toAddress: string;
  amount: string;
}

@Injectable()
export class IssuerService {
  private readonly logger = new Logger(IssuerService.name, { timestamp: true });
  private readonly axiosInstance: AxiosInstance;

  constructor(
    private readonly configService: ConfigService
  ) {
    this.axiosInstance = axios.create({
      baseURL: `${configService.get('ISSUER_API_BASE_URL')}/api`,
      headers: { 'X-Api-Key': configService.get('API_KEY') }
    });
  }

  async getAccount(): Promise<{ blockchainAddress: string }> {
    try {
      const response = await this.axiosInstance.get('/account');
      return pick(response.data, ['blockchainAddress']);
    } catch (err) {
      this.logger.error(`error getting blockchain account: ${err}`);
      throw err;
    }
  }

  async issueCertificate(issueCertificateDTO: IssueCertificateDTO) {
    const issuerApiIssueCertDTO = {
      ...issueCertificateDTO,
      to: this.configService.get('ISSUER_CHAIN_ADDRESS'),
      fromTime: Math.floor(issueCertificateDTO.fromTime.getTime() / 1000),
      toTime: Math.floor(issueCertificateDTO.toTime.getTime() / 1000)
    };

    try {
      return (await this.axiosInstance.post('/certificate', issuerApiIssueCertDTO)).data;
    } catch (err) {
      this.logger.error(`error issuing certificate: ${err}`);
      this.logger.error(`payload: ${JSON.stringify(issuerApiIssueCertDTO)}`);
      throw err;
    }
  }

  async getCertificateByTransactionHash(txHash) {
    const blockchainAddress = this.configService.get('ISSUER_CHAIN_ADDRESS');
    try {
      this.logger.debug(`getting chain data for the certificate (blockchainAddress=${blockchainAddress}, txHash=${txHash})`);
      return (await this.axiosInstance.get(
        `/certificate/by-issuance-transaction/${txHash}`,
        { params: { blockchainAddress } }
      )).data[0];
    } catch (err) {
      if (err.isAxiosError) {
        const axiosError = err as AxiosError;

        if (axiosError.response) {
          if (axiosError.response.status === 404) {
            this.logger.debug(`no certificate data for blockchainAddress=${blockchainAddress} and txHash=${txHash}`);
            return null;
          }
        }
      }

      this.logger.error(`error getting certificate by transaction hash: ${err}`);

      throw err;
    }
  }

  async transferCertificate(transferCertificateDTO: TransferCertificateDTO) {
    const { id, fromAddress } = transferCertificateDTO;

    try {
      const res = await this.axiosInstance.put(
        `/certificate/${id}/transfer`,
        {
          to: transferCertificateDTO.toAddress,
          amount: transferCertificateDTO.amount
        },
        { params: { fromAddress } }
      );

      return res.data;
    } catch (err) {
      if (err.isAxiosError) {
        const axiosError = err as AxiosError;

        if (axiosError.response) {
          if (axiosError.response.status === 404) {
            this.logger.error(`cert. transfer error: no on-chain certificate data for certificate id=${id} and fromAddress=${fromAddress}`);
            throw new NotFoundException(`no on-chain certificate data for certificate id=${id}`);
          }
        }
      }

      this.logger.error(`error transferring certificate: ${err}`);
      this.logger.error(`payload: ${JSON.stringify(transferCertificateDTO)}`);
      throw err;
    }
  }
}
