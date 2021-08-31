import { Injectable } from '@nestjs/common';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { PrismaService } from "../prisma/prisma.service";
import { PurchaseDto } from "./dto/purchase.dto";

@Injectable()
export class PurchasesService {
  constructor(private prisma: PrismaService) {}

  create(createPurchaseDto: CreatePurchaseDto) {
    return 'This action adds a new purchase';
  }

  findAll() {
    return `This action returns all purchases`;
  }

  async findOne(id: string) {
    const data = await this.prisma.purchase.findUnique({
      where: {
        id
      },
      include: {
        seller: true,
        buyer: { include: { FilecoinNode: true } },
        certificate: true,
        files: { select: { id: true, fileName: true, mimeType: true } }
      }
    })

    if (!data) {
      return null;
    }

    return {
      ...data,
      files: data.files.map(f => ({...f, url: `${process.env.FILES_BASE_URL}/${f.id}`}))
    };
  }

  update(id: number, updatePurchaseDto: UpdatePurchaseDto) {
    return `This action updates a #${id} purchase`;
  }

  remove(id: number) {
    return `This action removes a #${id} purchase`;
  }
}
