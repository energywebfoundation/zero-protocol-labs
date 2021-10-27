import { Module } from '@nestjs/common';
import { CertificatesService } from './certificates.service';
import { CertificatesController } from './certificates.controller';
import { IssuerService } from '../issuer/issuer.service';

@Module({
  controllers: [CertificatesController],
  providers: [CertificatesService, IssuerService]
})
export class CertificatesModule {}
