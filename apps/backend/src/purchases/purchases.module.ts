import { Module } from '@nestjs/common';
import { PurchasesService } from './purchases.service';
import { PurchasesController } from './purchases.controller';
import { IssuerService } from '../issuer/issuer.service';
import { CertificatesService } from '../certificates/certificates.service';
import { BuyersService } from '../buyers/buyers.service';

@Module({
  controllers: [PurchasesController],
  providers: [PurchasesService, IssuerService, CertificatesService, BuyersService]
})
export class PurchasesModule {}
