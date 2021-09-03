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
}
