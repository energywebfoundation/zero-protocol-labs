import { Module } from '@nestjs/common';
import { BuyersService } from './buyers.service';
import { BuyersController } from './buyers.controller';
import { IssuerService } from '../issuer/issuer.service';

@Module({
  controllers: [BuyersController],
  providers: [BuyersService, IssuerService]
})
export class BuyersModule {}
