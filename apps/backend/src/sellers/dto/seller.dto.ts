import { ApiProperty } from "@nestjs/swagger";
import { Seller } from "@prisma/client";

export class SellerDto implements Seller{
  @ApiProperty({ example: '118007' })
  irecId: string;

  @ApiProperty({ example: 'Monsoon Carbon' })
  name: string;

  @ApiProperty({ example: 'Mt Arrakis 42, Dune plains, \nAix en Provence, 12345, France' })
  address: string;

  @ApiProperty({ example: 'Paul Atreides' })
  contactPerson: string;

  constructor(partial: Partial<SellerDto>) {
    Object.assign(this, partial);
  }
}
