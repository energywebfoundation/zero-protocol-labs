import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios, { AxiosInstance } from 'axios';
import { pick } from 'lodash';

interface IssueCertificateDTO {
  deviceId: string;
  energy: string;
  fromTime: Date;
  toTime: Date;
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
}
