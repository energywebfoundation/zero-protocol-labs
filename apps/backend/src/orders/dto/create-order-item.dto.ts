import { ApiProperty } from "@nestjs/swagger";
import { ArrayMinSize, IsArray, IsEnum, IsNotEmpty, IsString, ValidateNested } from "class-validator";
import { Countries } from "@energyweb/utils-general";
import { CreateOrderItemTimeframeDto } from "./create-order-item-timeframe.dto";
import { Type } from "class-transformer";

export class CreateOrderItemDto {
  @ApiProperty({ example: "PL" })
  @IsEnum(Countries.map(i => i.code))
  country: string;

  @ApiProperty({ example: "1234" })
  @IsString()
  @IsNotEmpty()
  minerId: string;

  @ApiProperty({ type: [CreateOrderItemTimeframeDto] })
  @IsArray()
  @ArrayMinSize(1)
  @Type(() => CreateOrderItemTimeframeDto)
  @ValidateNested()
  timeFrames: CreateOrderItemTimeframeDto[];
}
