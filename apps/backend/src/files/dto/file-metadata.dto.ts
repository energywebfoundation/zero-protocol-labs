import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from "class-transformer";
import { File } from '@prisma/client'

@Exclude()
export class FileMetadataDto implements File {
  @ApiProperty({ example: '5ff1cb39-da8b-4f0a-a17d-a5d00ea85a60' })
  @Expose()
  id: string;

  @ApiProperty({ example: 'certificate.pdf' })
  @Expose()
  fileName: string;

  @ApiProperty({ example: 'application/pdf' })
  @Expose()
  mimeType: string;

  @ApiProperty( { example: "2021-08-26T18:20:30.633Z" })
  @Expose()
  createdAt: Date;

  content: Buffer;

  constructor(partial: Partial<FileMetadataDto>) {
    Object.assign(this, partial);
  }
}