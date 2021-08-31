import { Injectable } from '@nestjs/common';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { PrismaService } from "../prisma/prisma.service";
import { PurchaseDto } from "./dto/purchase.dto";

@Injectable()
export class PurchasesService {
  constructor(private prisma: PrismaService) {}

  async create(createPurchaseDto: CreatePurchaseDto) {
    return await this.prisma.purchase.create({ data: createPurchaseDto });
  }

  async findAll() {
    return await this.prisma.purchase.findMany({ select: { id: true } });
  }

  async findOne(id: string) {
    const data = await this.prisma.purchase.findUnique({
      where: {
        id
      },
      include: {
        seller: true,
        buyer: { include: { filecoinNodes: true } },
        certificate: true,
        files: { select: { id: true, fileName: true, mimeType: true } }
      }
    })

    if (!data) {
      return null;
    }

    return {
      ...data,
      files: data.files.map(f => ({ ...f, url: `${process.env.FILES_BASE_URL}/${f.id}` }))
    };
  }

  async update(id: string, updatePurchaseDto: UpdatePurchaseDto) {
    return await this.prisma.purchase.update({ where: { id }, data: updatePurchaseDto });
  }

  remove(id: string) {
    return `This action removes a #${id} purchase`;
  }
}
