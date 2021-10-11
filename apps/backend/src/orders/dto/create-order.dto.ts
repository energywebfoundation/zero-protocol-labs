import { ApiProperty } from "@nestjs/swagger";
import { PaymentPreferencesEnumType } from '@prisma/client';
import { IsEnum, ValidateNested } from 'class-validator';
import { CreateOrderItemDto } from "./create-order-item.dto";
import { Type } from "class-transformer";

export class CreateOrderDto {
  @ApiProperty({
    isArray: true,
    enum: PaymentPreferencesEnumType,
    enumName: 'PaymentPreferencesEnumType',
    example: [PaymentPreferencesEnumType.WIRE_TRANSFER, PaymentPreferencesEnumType.CRYPTO]
  })
  @IsEnum(PaymentPreferencesEnumType, { each: true })
  paymentPreferences: PaymentPreferencesEnumType[];

  @ApiProperty({ type: [CreateOrderItemDto] })
  @Type(() => CreateOrderItemDto)
  @ValidateNested()
  items: CreateOrderItemDto[];
}
