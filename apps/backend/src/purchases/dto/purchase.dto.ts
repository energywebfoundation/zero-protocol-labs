import { ApiProperty, PartialType, PickType } from "@nestjs/swagger";
import { FileMetadataDto } from "../../files/dto/file-metadata.dto";
import { BuyerDto } from "../../buyers/dto/buyer.dto";
import { SellerDto } from "../../sellers/dto/seller.dto";
import { CertificateDto } from "../../certificates/dto/certificate.dto";

class File extends PartialType(PickType(FileMetadataDto, ["id", "fileName", "mimeType"] as const)) {
  @ApiProperty({ example: "https://zero.energyweb.org/api/files/5ff1cb39-da8b-4f0a-a17d-a5d00ea85a60" })
  url: string
}

class AnnualTransactions {
  @ApiProperty({ example: 2020 })
  year: number;

  @ApiProperty({ example: 2 })
  amount: number;
}

export class PurchaseDto { // TODO: should implement Purchase interface
  @ApiProperty({ example: '4bfce36e-3fcd-4a41-b752-94a5298b8eb6' })
  id: string;

  @ApiProperty({ type: SellerDto })
  seller: SellerDto;

  @ApiProperty({ type: BuyerDto })
  buyer: BuyerDto;

  @ApiProperty({ type: CertificateDto })
  certificate: CertificateDto;

  @ApiProperty({ example: 2 })
  recsSold: number;

  @ApiProperty({ type: [AnnualTransactions] })
  recsTransactions: AnnualTransactions[];

  @ApiProperty({ type: [File] })
  files: File[]

  constructor(partial: Partial<PurchaseDto>) {
    Object.assign(this, partial);
  }
}
