import { ApiProperty } from "@nestjs/swagger";
import { Buyer } from "@prisma/client";
import { FilecoinNodeDto } from "../../filecoin-nodes/dto/filecoin-node.dto";

export class BuyerDto implements Buyer{
  @ApiProperty({ example: '29e25d61-103a-4710-b03d-ee12df765066' })
  id: string;

  @ApiProperty({ example: '-' })
  name: string;

  @ApiProperty({ type: [FilecoinNodeDto] })
  filecoinNodes: FilecoinNodeDto[]

  constructor(partial: Partial<BuyerDto>) {
    Object.assign(this, partial);
  }
}
