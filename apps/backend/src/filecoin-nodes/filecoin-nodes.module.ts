import { Module } from '@nestjs/common';
import { FilecoinNodesService } from './filecoin-nodes.service';
import { FilecoinNodesController } from './filecoin-nodes.controller';

@Module({
  controllers: [FilecoinNodesController],
  providers: [FilecoinNodesService]
})
export class FilecoinNodesModule {}
