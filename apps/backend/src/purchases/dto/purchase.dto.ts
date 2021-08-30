import { ApiProperty, PartialType, PickType } from "@nestjs/swagger";
import { FileMetadataDto } from "../../files/dto/file-metadata.dto";

class Seller {
  @ApiProperty({ example: '118007' })
  irecId: string;

  @ApiProperty({ example: 'Monsoon Carbon' })
  name: string;

  @ApiProperty({ example: 'Mt Arrakis 42, Dune plains, \nAix en Provence, 12345, France' })
  address: string;

  @ApiProperty({ example: 'Paul Atreides' })
  contactPerson: string;
}

class Buyer {
  @ApiProperty({ example: 'f0112027' })
  filecoinMinerId: string;

  @ApiProperty({ example: '-' })
  name: string;
}

class File extends PartialType(PickType(FileMetadataDto, ["id", "fileName", "mimeType"] as const)) {
  @ApiProperty({ example: "https://zero.energyweb.org/api/files/5ff1cb39-da8b-4f0a-a17d-a5d00ea85a60" })
  url: string
}

class Certificate {
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

class AnnualTransactions {
  @ApiProperty({ example: 2020 })
  year: number;

  @ApiProperty({ example: 2 })
  amount: number;
}

export class PurchaseDto {
  @ApiProperty({ example: '4bfce36e-3fcd-4a41-b752-94a5298b8eb6' })
  id: string;

  @ApiProperty({ type: Seller })
  seller: Seller;

  @ApiProperty({ type: Buyer })
  buyer: Buyer;

  @ApiProperty()
  certificate: Certificate;

  @ApiProperty({ type: [AnnualTransactions] })
  recsTransactions: AnnualTransactions[];

  @ApiProperty({ type: [File] })
  files: File[]

  constructor(partial: Partial<PurchaseDto>) {
    Object.assign(this, partial);
  }
}
