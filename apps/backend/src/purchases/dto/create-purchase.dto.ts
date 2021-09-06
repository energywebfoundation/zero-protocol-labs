import { ApiProperty, PartialType, PickType } from "@nestjs/swagger";
import { Prisma } from "@prisma/client";

class FilecoinNodeSimple {
  @ApiProperty({example: 'f0112027'})
  id: string;
}

export class CreatePurchaseDto {
  @ApiProperty({ example: "04a7155d-ced1-4981-8660-48670a0735dd" })
  id: string;

  @ApiProperty({ example: "973d48bb-15da-4eaf-8040-b6cb66e22023" })
  certificateId: string;

  @ApiProperty({ example: "29e25d61-103a-4710-b03d-ee12df765066" })
  buyerId: string;

  @ApiProperty({ example: "68926364-a0ba-4160-b3ea-1ee70c2690dd" })
  sellerId: string;

  @ApiProperty({ example: 3 })
  recsSold: number;

  @ApiProperty({
    example: [
      { "year": 2020, "amount": 2 },
      { "year": 2021, "amount": 1 }
    ]
  })
  recsTransactions: Prisma.JsonValue;

  @ApiProperty({type: [FilecoinNodeSimple]})
  filecoinNodes: FilecoinNodeSimple[]
}
