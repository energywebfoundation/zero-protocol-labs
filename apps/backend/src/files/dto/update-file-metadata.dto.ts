import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Exclude, Expose } from "class-transformer";
import { File } from '@prisma/client'

@Exclude()
export class UpdateFileMetadataDto {
  @ApiProperty({ example: 'certificate.pdf' })
  @Expose()
  fileName: string;

  @ApiProperty({ example: 'application/pdf' })
  @Expose()
  mimeType: string;

  @ApiPropertyOptional( { example: "3fc9c8da-4b6f-4976-be25-facfd13c5787" })
  @Expose()
  purchaseId: string;

  constructor(partial: Partial<UpdateFileMetadataDto>) {
    Object.assign(this, partial);
  }
}
