import { CertificateDto } from './certificate.dto';
import { ApiProperty, ApiPropertyOptional, OmitType } from '@nestjs/swagger';
import {
  IsInt,
  IsISO8601,
  IsNumberString,
  IsOptional,
  IsString,
  IsUUID,
  registerDecorator,
  ValidationArguments,
  ValidationOptions
} from 'class-validator';

export class CreateCertificateDto extends OmitType(CertificateDto, ['txHash']) {
  @ApiPropertyOptional({ example: '973d48bb-15da-4eaf-8040-b6cb66e22023' })
  @IsUUID()
  @IsOptional()
  id: string;

  @ApiPropertyOptional({ example: 'Solar 1 - Non Bua Lampon' })
  @IsOptional()
  @IsString()
  generatorName: string;

  @ApiPropertyOptional({ example: 'NA' })
  @IsOptional()
  @IsString()
  generatorId: string;

  @ApiProperty({ example: '00000000-0000-0000-0000-000000000000' })
  @IsUUID()
  initialSellerId: string;

  @ApiProperty({ example: 'China' })
  @IsString()
  country: string;

  @ApiProperty({ example: 'Wind' })
  @IsString()
  energySource: string;

  @ApiProperty({ example: new Date('2020-11-01T00:00:00.000Z') })
  @IsISO8601({ strict: true })
  @IsDateParseable()
  generationStart: string;

  @ApiPropertyOptional({ example: 180 })
  @IsInt()
  @IsOptional()
  generationStartTimezoneOffset: number;

  @ApiProperty({ example: new Date('2021-06-01T23:59:59.999Z') })
  @IsISO8601({ strict: true })
  @IsDateParseable()
  generationEnd: string;

  @ApiPropertyOptional({ example: 180 })
  @IsInt()
  @IsOptional()
  generationEndTimezoneOffset: number;

  @ApiProperty({ type: 'string', example: '10000' })
  @IsNumberString()
  energy: string
}


/**
 * validates if a string is parseable by the Date object constructor
 */
function IsDateParseable(validationOptions?: ValidationOptions) {
  return function(object: unknown, propertyName: string) {
    registerDecorator({
      name: 'IsDateParseable',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: string): boolean {
          return (new Date(value).toString() !== 'Invalid Date');
        },
        defaultMessage(args?: ValidationArguments): string {
          return `${args.property} should be parseable by the Date object constructor`;
        }
      }
    });
  };
}
