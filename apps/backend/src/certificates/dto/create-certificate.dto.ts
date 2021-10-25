import { CertificateDto } from './certificate.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class CreateCertificateDto extends CertificateDto {
  @ApiProperty({ example: new Date('2020-11-01T00:00:00.000Z') })
  @Transform(({ value }) => new Date(value))
  generationStart: Date;

  @ApiProperty({ example: new Date('2021-06-01T23:59:59.999Z') })
  @Transform(({ value }) => new Date(value))
  generationEnd: Date;
}
