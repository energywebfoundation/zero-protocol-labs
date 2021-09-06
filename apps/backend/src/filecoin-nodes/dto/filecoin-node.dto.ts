import { ApiProperty } from "@nestjs/swagger";
import { FilecoinNode } from "@prisma/client"

export class FilecoinNodeDto implements FilecoinNode{
  @ApiProperty({ example: "f0112027" })
  id: string;

  @ApiProperty({ example: "29e25d61-103a-4710-b03d-ee12df765066" })
  buyerId: string

  constructor(partial: Partial<FilecoinNodeDto>) {
    Object.assign(this, partial);
  }
}
