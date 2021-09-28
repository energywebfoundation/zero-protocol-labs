import { Injectable } from '@nestjs/common';
import { CreateFilecoinNodeDto } from './dto/create-filecoin-node.dto';
import { UpdateFilecoinNodeDto } from './dto/update-filecoin-node.dto';
import { PrismaService } from "../prisma/prisma.service";
import { FilecoinNodeDto } from "./dto/filecoin-node.dto";

@Injectable()
export class FilecoinNodesService {
  constructor(private prisma: PrismaService) {}

  async create(createFilecoinNodeDto: CreateFilecoinNodeDto) {
    return new FilecoinNodeDto(await this.prisma.filecoinNode.create({ data: createFilecoinNodeDto }));
  }

  async findAll() {
    return (await this.prisma.filecoinNode.findMany()).map((r) => new FilecoinNodeDto(r));
  }

  async findOne(id: string) {
    const record = await this.prisma.filecoinNode.findUnique({ where: { id } });

    if (!record) {
      return null;
    }

    return new FilecoinNodeDto(record);
  }

  async update(id: string, updateFilecoinNodeDto: UpdateFilecoinNodeDto) {
    return new FilecoinNodeDto(await this.prisma.filecoinNode.update({ where: { id }, data: updateFilecoinNodeDto }));
  }

  async remove(id: string) {
    return new FilecoinNodeDto(await this.prisma.filecoinNode.delete({ where: { id } }));
  }

  async getTransactions(id: string) {
    let data = await this.prisma.filecoinNode.findUnique({
      where: { id },
      include: { purchases: { include: { purchase: true } } }
    });

    if (!data) {
      return null;
    }

    return {
      minerId: data.id,
      buyerId: data.buyerId,
      recsTotal: data.purchases.reduce((total, transaction) => (total + transaction.purchase.recsSold), 0),
      transactions: data.purchases.map((p) => {
        return {
          id: p.purchase.id,
          pageUrl: `${process.env.UI_BASE_URL}/partners/filecoin/purchases/${p.purchase.id}`,
          dataUrl: `${process.env.API_BASE_URL}/api/partners/filecoin/purchases/${p.purchase.id}`,
          sellerId: p.purchase.sellerId,
          recsSold: p.purchase.recsSold,
          annually: p.purchase.recsTransactions
        };
      })
    };
  }
}

export const transactionsSchema = {
  type: "object",
  properties: {
    minerId: { type: "string", example: "f0112027" },
    buyerId: { type: "string", example: "29e25d61-103a-4710-b03d-ee12df765066" },
    recsTotal: { type: "number", example: 3 },
    transactions: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: { type: "string", example: "04a7155d-ced1-4981-8660-48670a0735dd" },
          pageUrl: {
            type: "string",
            example: "http://zero.energyweb.org/partners/filecoin/purchases/04a7155d-ced1-4981-8660-48670a0735dd"
          },
          dataUrl: {
            type: "string",
            example: "http://zero.energyweb.org/api/partners/filecoin/purchases/04a7155d-ced1-4981-8660-48670a0735dd"
          },
          sellerId: { type: "string", example: "68926364-a0ba-4160-b3ea-1ee70c2690dd" },
          recsSold: { type: "number", example: 3 },
          annually: {
            type: "array",
            items: {
              type: "object",
              properties: {
                year: { type: "number", example: 2020 },
                amount: { type: "number", example: 3 }
              }
            }
          }
        }
      }
    }
  }
};
