import { ApiProperty } from "@nestjs/swagger";
import { IsEnum } from "class-validator";
import { Countries } from "@energyweb/utils-general";

export class CreateOrderItemDto {
  @ApiProperty({ example: "PL" })
  @IsEnum(Countries.map(i => i.code))
  country: string;

  @ApiProperty({ example: "1234" })
  minerId: string;
}
