import { Injectable, Logger } from '@nestjs/common';
import { CreateCertificateDto } from './dto/create-certificate.dto';
import { UpdateCertificateDto } from './dto/update-certificate.dto';
import { PrismaService } from '../prisma/prisma.service';
import { CertificateDto } from './dto/certificate.dto';
import { IssuerService } from '../issuer/issuer.service';
import { Certificate } from '@prisma/client';

@Injectable()
export class CertificatesService {
  private readonly logger = new Logger(CertificatesService.name, { timestamp: true });

  constructor(
    private prisma: PrismaService,
    private issuerService: IssuerService
  ) {}

  async create(createCertificateDto: CreateCertificateDto) {
    let newCertificate: Certificate;

    const { energy, ...newCertificateData } = createCertificateDto;

    await this.prisma.$transaction(async (prisma) => {
      try {
        newCertificate = await prisma.certificate.create({ data: newCertificateData });
        this.logger.debug(`created a new certificate: ${JSON.stringify(newCertificate, (k, v) => typeof v === 'bigint' ? v.toString() : v)}`);
      } catch (err) {
        this.logger.error(`error creating a new certificate: ${err}`);
        throw err;
      }

      const seller = await this.prisma.seller.findUnique({ where: { id: createCertificateDto.initialSellerId } });

      let txHash: string;

      try {
        ({ txHash } = await this.issuerService.issueCertificate({
          toSeller: seller.blockchainAddress,
          deviceId: createCertificateDto.generatorId,
          energy,
          fromTime: createCertificateDto.generationStart,
          toTime: createCertificateDto.generationEnd
        }));

        this.logger.debug(`issued a new certificate on chain: txHash=${txHash}`);
      } catch (err) {
        this.logger.error(`error issuing a new certificate on chain: ${err}`);
        throw err;
      }

      try {
        await prisma.certificate.update({
          data: { txHash },
          where: { id: newCertificate.id }
        });

        this.logger.debug(`set transaction hash for the certificate: ${newCertificate.id}`);
      } catch (err) {
        this.logger.error(`error setting transaction hash for the certificate: ${newCertificate.id}: ${err}`);
        throw err;
      }
    }, {maxWait: 1000, timeout: 10000}).catch((err) => {
      this.logger.error('rolling back transaction');
      throw err;
    });

    return new CertificateDto(await this.prisma.certificate.findUnique({ where: { id: newCertificate.id } }));
  }

  async findAll() {
    return (await this.prisma.certificate.findMany()).map((r) => new CertificateDto(r));
  }

  async findOne(id: string) {
    return new CertificateDto(await this.prisma.certificate.findUnique({ where: { id } }));
  }

  async update(id: string, updateCertificateDto: UpdateCertificateDto) {
    return new CertificateDto(await this.prisma.certificate.update({ where: { id }, data: updateCertificateDto }));
  }

  remove(id: string) {
    return `This action removes a #${id} certificate`;
  }
}
