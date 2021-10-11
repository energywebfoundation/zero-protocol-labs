import { ApiProperty } from "@nestjs/swagger";
import { PaymentPreferencesEnumType } from '@prisma/client';
import { IsEnum } from 'class-validator';

export class CreateOrderDto {
  @ApiProperty({
    isArray: true,
    enum: PaymentPreferencesEnumType,
    enumName: 'PaymentPreferencesEnumType',
    example: [PaymentPreferencesEnumType.WIRE_TRANSFER, PaymentPreferencesEnumType.CRYPTO]
  })
  @IsEnum(PaymentPreferencesEnumType, { each: true })
  paymentPreferences: PaymentPreferencesEnumType[];
}
