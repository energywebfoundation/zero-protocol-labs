import { ApiProperty } from "@nestjs/swagger";

export class CreateFilecoinNodeDto {
  @ApiProperty({ example: "f0112027" })
  id: string;

  @ApiProperty({ example: "29e25d61-103a-4710-b03d-ee12df765066" })
  buyerId: string
}
