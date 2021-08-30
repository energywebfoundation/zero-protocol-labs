import { ApiProperty } from "@nestjs/swagger";

export class CertificateDto {
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

  @ApiProperty({ example: 3 })
  recsSold: number;

  @ApiProperty({ example: new Date("2020-11-01T00:00:00.000Z") })
  generationStart: Date;

  @ApiProperty({ example: new Date("2021-06-01T23:59:59.999Z") })
  generationEnd: Date;
}
