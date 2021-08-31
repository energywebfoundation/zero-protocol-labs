import { Injectable } from '@nestjs/common';
import { CreateCertificateDto } from './dto/create-certificate.dto';
import { UpdateCertificateDto } from './dto/update-certificate.dto';
import { PrismaService } from "../prisma/prisma.service";
import { CertificateDto } from "./dto/certificate.dto";

@Injectable()
export class CertificatesService {
  constructor(private prisma: PrismaService) {}

  async create(createCertificateDto: CreateCertificateDto) {
    return new CertificateDto(await this.prisma.certificate.create({ data: createCertificateDto }));
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
