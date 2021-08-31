import { Injectable } from '@nestjs/common';
import { CreateBuyerDto } from './dto/create-buyer.dto';
import { UpdateBuyerDto } from './dto/update-buyer.dto';
import { BuyerDto } from "./dto/buyer.dto";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class BuyersService {
  constructor(private prisma: PrismaService) {}

  async create(createBuyerDto: CreateBuyerDto) {
    return new BuyerDto(await this.prisma.buyer.create({ data: createBuyerDto }));
  }

  async findAll() {
    return (await this.prisma.buyer.findMany()).map((r) => new BuyerDto(r));
  }

  async findOne(id: string) {
    return new BuyerDto(await this.prisma.buyer.findUnique({ where: { id } }));
  }

  async update(id: string, updateBuyerDto: UpdateBuyerDto) {
    return new BuyerDto(await this.prisma.buyer.update({ where: { id }, data: updateBuyerDto }));
  }

  async remove(id: string) {
    return new BuyerDto(await this.prisma.buyer.delete({ where: { id } }));
  }
}
