import { Injectable, Logger } from '@nestjs/common';
import { CreateFilecoinNodeDto } from './dto/create-filecoin-node.dto';
import { UpdateFilecoinNodeDto } from './dto/update-filecoin-node.dto';
import { PrismaService } from '../prisma/prisma.service';
import { FilecoinNodeDto } from './dto/filecoin-node.dto';
import { FilecoinNode } from '@prisma/client';
import { IssuerService } from '../issuer/issuer.service';
import { pick } from 'lodash';

@Injectable()
export class FilecoinNodesService {
  private readonly logger = new Logger(FilecoinNodesService.name, { timestamp: true });

  constructor(
    private prisma: PrismaService,
    private issuerService: IssuerService
  ) {}

  async create(createFilecoinNodeDto: CreateFilecoinNodeDto) {
    let newFilecoinNode: FilecoinNode;
    await this.prisma.$transaction(async (prisma) => {
      try {
        newFilecoinNode = await prisma.filecoinNode.create({ data: createFilecoinNodeDto });
      } catch (err) {
        this.logger.error(`error creating a new filecoin node: ${err}`);
        throw err;
      }

      let blockchainAddress: string;

      try {
        blockchainAddress = (await this.issuerService.getAccount()).blockchainAddress;
        this.logger.debug(`gathered blockchainAddress: ${blockchainAddress} for filecoin node (${newFilecoinNode.id})`);
      } catch (err) {
        this.logger.error(`error gathering blockchain account: ${err}`);
        throw err;
      }

      try {
        await prisma.filecoinNode.update({
          data: { blockchainAddress },
          where: { id: newFilecoinNode.id }
        });
      } catch (err) {
        this.logger.error(`error setting blockchain address for buyer ${newFilecoinNode.id}: ${err}`);
        throw err;
      }

    }, { timeout: 60000 }).catch((err) => {
      this.logger.error('rolling back transaction');
      throw err;
    });

    return new FilecoinNodeDto(await this.prisma.filecoinNode.findUnique({ where: { id: newFilecoinNode.id } }));
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
    const data = await this.prisma.filecoinNode.findUnique({
      where: { id },
      include: {
        purchases: {
          include: {
            purchase: {
              include: {
                certificate: true
              }
            }
          }
        }
      }
    });

    if (!data) {
      return null;
    }

    return {
      minerId: data.id,
      buyerId: data.buyerId,
      pageUrl: `${process.env.UI_BASE_URL}/partners/filecoin/nodes/${data.id}/transactions`,
      dataUrl: `${process.env.API_BASE_URL}/api/partners/filecoin/nodes/${data.id}/transactions`,
      recsTotal: data.purchases.reduce((total, transaction) => (total + transaction.purchase.recsSold), 0),
      transactions: data.purchases.map((p) => {
        return {
          id: p.purchase.id,
          pageUrl: `${process.env.UI_BASE_URL}/partners/filecoin/purchases/${p.purchase.id}`,
          dataUrl: `${process.env.API_BASE_URL}/api/partners/filecoin/purchases/${p.purchase.id}`,
          sellerId: p.purchase.sellerId,
          recsSold: p.purchase.recsSold,
          annually: p.purchase.recsTransactions,
          generation: {
            ...pick(p.purchase.certificate, [
              // 'id',
              'country',
              'energySource',
              'generatorId',
              'generatorName',
              'generationStart',
              'generationStartTimezoneOffset',
              'generationEnd',
              'generationEndTimezoneOffset',
              // 'txHash',
              // 'initialSellerId',
            ])
          }
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
    pageUrl: { type: "string", example: "https://zero.energyweb.org/partners/filecoin/nodes/f0112027/transactions" },
    dataUrl: { type: "string", example: "https://zero.energyweb.org/api/partners/filecoin/nodes/f0112027/transactions" },
    recsTotal: { type: "number", example: 3 },
    transactions: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: { type: "string", example: "04a7155d-ced1-4981-8660-48670a0735dd" },
          pageUrl: {
            type: "string",
            example: "https://zero.energyweb.org/partners/filecoin/purchases/04a7155d-ced1-4981-8660-48670a0735dd"
          },
          dataUrl: {
            type: "string",
            example: "https://zero.energyweb.org/api/partners/filecoin/purchases/04a7155d-ced1-4981-8660-48670a0735dd"
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
          },
          generation: {
            type: "object",
            properties: {
              "country": {type: "string"},
              "energySource": {type: "string"},
              "generatorId": {type: "string"},
              "generatorName": {type: "string"},
              "generationStart": {type: "string", example: "2020-10-31T16:00:00.000Z"},
              "generationStartTimezoneOffset": {type: "number"},
              "generationEnd": {type: "string", example: "2021-06-01T15:59:59.999ZZ"},
              "generationEndTimezoneOffset": {type: "number"},
            }
          }
        }
      }
    }
  }
};
