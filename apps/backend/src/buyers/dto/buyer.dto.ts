import { ApiProperty } from "@nestjs/swagger";
import { Buyer } from "@prisma/client";

export class BuyerDto implements Buyer{
  @ApiProperty({ example: 'f0112027' })
  filecoinMinerId: string;

  @ApiProperty({ example: '-' })
  name: string;

  constructor(partial: Partial<BuyerDto>) {
    Object.assign(this, partial);
  }
}
