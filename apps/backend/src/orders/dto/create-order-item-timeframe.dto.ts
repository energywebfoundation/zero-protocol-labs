import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsISO8601, IsNumber, Min } from "class-validator";

export class CreateOrderItemTimeframeDto {
  @ApiProperty({ example: '2020-10-11T00:00:00.000Z' })
  @IsISO8601({ strict: true })
  start: Date;

  @ApiProperty({ example: '2020-12-31T23:59:59.999Z' })
  @IsISO8601({ strict: true })
  end: Date;

  @ApiProperty({ example: 100000 })
  @IsNumber({ allowInfinity: false, allowNaN: false })
  @IsInt()
  @Min(1)
  energy: number;
}
