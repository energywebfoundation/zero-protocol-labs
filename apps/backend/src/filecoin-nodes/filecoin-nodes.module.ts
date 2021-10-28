import { Module } from '@nestjs/common';
import { FilecoinNodesService } from './filecoin-nodes.service';
import { FilecoinNodesController } from './filecoin-nodes.controller';
import { IssuerService } from '../issuer/issuer.service';

@Module({
  controllers: [FilecoinNodesController],
  providers: [FilecoinNodesService, IssuerService]
})
export class FilecoinNodesModule {}
