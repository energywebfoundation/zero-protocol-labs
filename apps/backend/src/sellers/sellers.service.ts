import { Injectable } from '@nestjs/common';
import { CreateSellerDto } from './dto/create-seller.dto';
import { UpdateSellerDto } from './dto/update-seller.dto';
import { SellerDto } from "./dto/seller.dto";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class SellersService {
  constructor(private prisma: PrismaService) {}

  async create(createSellerDto: CreateSellerDto) {
    return new SellerDto(await this.prisma.seller.create({ data: createSellerDto }));
  }

  async findAll() {
    return (await this.prisma.seller.findMany()).map(r => new SellerDto(r));
  }

  async findOne(id: string) {
    const row = await this.prisma.seller.findUnique({where: {irecId: id}});

    if (!row) {
      return null;
    }

    return new SellerDto(row);
  }

  async update(id: string, updateSellerDto: UpdateSellerDto) {
    return new SellerDto(await this.prisma.seller.update({
      where: {irecId: id},
      data: updateSellerDto
    }));
  }

  async remove(id: string) {
    return new SellerDto(await this.prisma.seller.delete({where: {irecId: id}}));
  }
}
