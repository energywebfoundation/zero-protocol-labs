import { ApiProperty } from "@nestjs/swagger";
import { PaymentPreferencesEnumType } from '@prisma/client';
import { ArrayMinSize, IsArray, IsEmail, IsEnum, IsNotEmpty, ValidateNested } from 'class-validator';
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

  @ApiProperty({ example: 'user@domain.com' })
  @IsEmail()
  @IsNotEmpty()
  emailAddress: string;

  @ApiProperty({ type: [CreateOrderItemDto] })
  @IsArray()
  @ArrayMinSize(1)
  @Type(() => CreateOrderItemDto)
  @ValidateNested()
  items: CreateOrderItemDto[];
}
