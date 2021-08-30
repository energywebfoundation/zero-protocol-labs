import { ApiProperty } from "@nestjs/swagger";

export class SellerDto {
  @ApiProperty({ example: '118007' })
  irecId: string;

  @ApiProperty({ example: 'Monsoon Carbon' })
  name: string;

  @ApiProperty({ example: 'Mt Arrakis 42, Dune plains, \nAix en Provence, 12345, France' })
  address: string;

  @ApiProperty({ example: 'Paul Atreides' })
  contactPerson: string;
}
