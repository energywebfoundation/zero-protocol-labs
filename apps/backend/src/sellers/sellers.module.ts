import { Module } from '@nestjs/common';
import { SellersService } from './sellers.service';
import { SellersController } from './sellers.controller';
import { IssuerService } from '../issuer/issuer.service';

@Module({
  controllers: [SellersController],
  providers: [SellersService, IssuerService]
})
export class SellersModule {}
