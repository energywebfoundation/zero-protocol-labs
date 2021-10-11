import { ApiProperty } from "@nestjs/swagger";

export class OrderItemDto {
  constructor(partial: Partial<OrderItemDto>) {
    Object.assign(this, partial);
  }

  @ApiProperty({ example: "PL" })
  country: string;

  @ApiProperty({ example: "1234" })
  minerId: string;
}
