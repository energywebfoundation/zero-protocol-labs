import { ApiProperty } from "@nestjs/swagger";
import { Buyer } from "@prisma/client";

export class BuyerDto implements Buyer{
  @ApiProperty({ example: '29e25d61-103a-4710-b03d-ee12df765066' })
  id: string;

  @ApiProperty({ example: '-' })
  name: string;

  constructor(partial: Partial<BuyerDto>) {
    Object.assign(this, partial);
  }
}
