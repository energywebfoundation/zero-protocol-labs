import { ApiProperty } from "@nestjs/swagger";

export class CreateBuyerDto {
  @ApiProperty({ example: 'f0112027' })
  filecoinMinerId: string;

  @ApiProperty({ example: '-' })
  name: string;
}
