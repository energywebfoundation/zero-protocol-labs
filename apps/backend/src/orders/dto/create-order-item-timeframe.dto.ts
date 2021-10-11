import { ApiProperty } from "@nestjs/swagger";

export class CreateOrderItemTimeframeDto {
  @ApiProperty({ example: '2020-10-11T00:00:00.000Z' })
  start: Date;

  @ApiProperty({ example: '2020-12-31T23:59:59.999Z' })
  end: Date;

  @ApiProperty({ example: 100000 })
  energy: number;
}
