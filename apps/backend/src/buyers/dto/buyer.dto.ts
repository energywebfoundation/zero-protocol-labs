import { ApiProperty } from "@nestjs/swagger";

export class BuyerDto {
  @ApiProperty({ example: 'f0112027' })
  filecoinMinerId: string;

  @ApiProperty({ example: '-' })
  name: string;
}
