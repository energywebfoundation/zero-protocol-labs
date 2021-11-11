import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from '../prisma/prisma.service';
import { OrderDto } from './dto/order.dto';
import { OrderItemDto } from './dto/order-item.dto';
import { OrderItemTimeframeDto } from './dto/order-item-timeframe.dto';
import { EmailService } from '../email/email.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class OrdersService {
  constructor(
    private prisma: PrismaService,
    private emailService: EmailService,
    private configService: ConfigService
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    const { items, ...newOrderData } = createOrderDto;

    const newRecord = await this.prisma.order.create({
      data: {
        ...newOrderData,
        items: {
          create: items ? items.map((i) => ({
            ...i,
            timeFrames: { create: i.timeFrames }
          })) : []
        }
      },
      include: {
        items: {
          include: {
            timeFrames: { orderBy: { start: "asc" } }
          }
        }
      }
    });

    const url = `${this.configService.get('UI_BASE_URL')}/product-offer/${newRecord.id}#token=${newRecord.confirmationToken}`;

    await this.emailService.send({
      to: createOrderDto.emailAddress,
      subject: 'Confirm order',
      text: `Please open following link in your web browser to confirm you have registered a new order at EW Zero with ${createOrderDto.emailAddress} address: ${url}`,
      html: `Please click the following <a href='${url}'>link</a> to confirm you have registered a new order at EW Zero with ${createOrderDto.emailAddress} address. Or copy the following to your web browser address bar: ${url}`
    });

    return new OrderDto({
      ...newRecord,
      items: newRecord.items.map(item => new OrderItemDto({
        ...item,
        timeFrames: item.timeFrames.map(timeFrame => new OrderItemTimeframeDto(timeFrame))
      }))
    });
  }

  async findAll() {
    return (await this.prisma.order.findMany({ orderBy: { createdAt: 'asc' } })).map(r => new OrderDto(r));
  }

  async findOne(id: string) {
    const record = await this.prisma.order.findUnique({
      where: { id },
      include: {
        items: {
          include: {
            timeFrames: { orderBy: { start: "asc" } }
          }
        }
      }
    });

    return new OrderDto({
      ...record,
      items: record.items.map(item => new OrderItemDto({
        ...item,
        timeFrames: item.timeFrames.map(timeFrame => new OrderItemTimeframeDto(timeFrame))
      }))
    });
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
