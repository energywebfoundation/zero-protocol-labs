import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, ValidateNested } from "class-validator";
import { Countries } from "@energyweb/utils-general";
import { CreateOrderItemTimeframeDto } from "./create-order-item-timeframe.dto";
import { Type } from "class-transformer";

export class CreateOrderItemDto {
  @ApiProperty({ example: "PL" })
  @IsEnum(Countries.map(i => i.code))
  country: string;

  @ApiProperty({ example: "1234" })
  minerId: string;

  @ApiProperty({ type: [CreateOrderItemTimeframeDto] })
  @Type(() => CreateOrderItemTimeframeDto)
  @ValidateNested()
  timeFrames: CreateOrderItemTimeframeDto[];
}
