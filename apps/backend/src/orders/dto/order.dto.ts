import { ApiProperty } from "@nestjs/swagger";
import { Order, PaymentPreferencesEnumType } from '@prisma/client';

export class OrderDto implements Order {
  constructor(partial: Partial<OrderDto>) {
    Object.assign(this, partial);
  }

  @ApiProperty({ example: 'ca85db1a-fa8d-49fc-a2b9-b6de147bfd74' })
  id: string;

  @ApiProperty({ isArray: true, enum: PaymentPreferencesEnumType, enumName: 'PaymentPreferencesEnumType' })
  paymentPreferences: PaymentPreferencesEnumType[];

  @ApiProperty({ example: '2021-10-11T07:48:46.799Z' })
  createdAt: Date;
}
