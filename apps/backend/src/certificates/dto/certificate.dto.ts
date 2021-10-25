import { ApiProperty } from '@nestjs/swagger';
import { Certificate } from '@prisma/client';

export class CertificateDto implements Certificate {
  @ApiProperty({ example: '973d48bb-15da-4eaf-8040-b6cb66e22023' })
  id: string;

  @ApiProperty({ example: 'Solar 1 - Non Bua Lampon' })
  generatorName: string;

  @ApiProperty({ example: 'NA' })
  generatorId: string;

  @ApiProperty({ example: 'China' })
  country: string;

  @ApiProperty({ example: 'Wind' })
  energySource: string;

  @ApiProperty({ example: new Date('2020-11-01T00:00:00.000Z') })
  generationStart: Date;

  @ApiProperty({ example: new Date('2021-06-01T23:59:59.999Z') })
  generationEnd: Date;

  @ApiProperty({ example: '0x65ca0692df73b3ff23126fd69e15d2f7de7a317def6016ebfdeedde1e24a7a8f' })
  txHash: string;

  constructor(partial: Partial<CertificateDto>) {
    Object.assign(this, partial);
  }
}
