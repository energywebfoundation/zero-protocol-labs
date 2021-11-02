import { Module } from '@nestjs/common';
import { PurchasesService } from './purchases.service';
import { PurchasesController } from './purchases.controller';
import { CertificatesModule } from '../certificates/certificates.module';
import { BuyersModule } from '../buyers/buyers.module';
import { IssuerModule } from '../issuer/issuer.module';

@Module({
  imports: [BuyersModule, CertificatesModule, IssuerModule],
  controllers: [PurchasesController],
  providers: [PurchasesService]
})
export class PurchasesModule {}
