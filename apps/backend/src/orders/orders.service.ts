import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from "../prisma/prisma.service";
import { OrderDto } from "./dto/order.dto";

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async create(createOrderDto: CreateOrderDto) {
    const newRecord = await this.prisma.order.create({ data: createOrderDto });
    return new OrderDto(newRecord);
  }

  async findAll() {
    return (await this.prisma.order.findMany({ orderBy: { createdAt: 'asc' } })).map(r => new OrderDto(r));
  }

  async findOne(id: string) {
    return new OrderDto(await this.prisma.order.findUnique({ where: { id } }));
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
