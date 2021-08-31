import { ApiProperty } from "@nestjs/swagger";

export class CreateSellerDto {
  @ApiProperty({ example: '00000000-0000-0000-0000-000000000000' })
  id: string;

  @ApiProperty({ example: 'Monsoon Carbon' })
  name: string;

  @ApiProperty({ example: 'Mt Arrakis 42, Dune plains' })
  addressLine1: string;

  @ApiProperty({ example: 'Aix en Provence, 12345, France' })
  addressLine2: string;

  @ApiProperty({ example: 'Paul Atreides' })
  contactPerson: string;
}
