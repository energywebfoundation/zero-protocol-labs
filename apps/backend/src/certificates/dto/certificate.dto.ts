import { ApiProperty } from "@nestjs/swagger";
import { Certificate } from "@prisma/client"

export class CertificateDto implements Certificate{
  @ApiProperty({ example: "973d48bb-15da-4eaf-8040-b6cb66e22023" })
  id: string;

  @ApiProperty({ example: "Solar 1 - Non Bua Lampon" })
  generatorName: string;

  @ApiProperty({ example: "NA" })
  generatorId: string;

  @ApiProperty({ example: "59.595" })
  namePlateCapacity: string;

  @ApiProperty({ example: "MW" })
  namePlateCapacityUnit: string;

  @ApiProperty({ example: "Solar" })
  fuelType: string;

  @ApiProperty({ example: new Date("2020-11-01T00:00:00.000Z") })
  generationStart: Date;

  @ApiProperty({ example: new Date("2021-06-01T23:59:59.999Z") })
  generationEnd: Date;
}