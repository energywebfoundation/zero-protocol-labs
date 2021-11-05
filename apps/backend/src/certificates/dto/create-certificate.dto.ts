import { CertificateDto } from './certificate.dto';
import { ApiProperty, OmitType } from '@nestjs/swagger';
import { IsISO8601, registerDecorator, ValidationArguments, ValidationOptions } from 'class-validator';

export class CreateCertificateDto extends OmitType(CertificateDto, ['txHash']) {
  @ApiProperty({ example: new Date('2020-11-01T00:00:00.000Z') })
  @IsISO8601({ strict: true })
  @IsDateParseable()
  generationStart: string;

  @ApiProperty({ example: new Date('2021-06-01T23:59:59.999Z') })
  @IsISO8601({ strict: true })
  @IsDateParseable()
  generationEnd: string;

  @ApiProperty({ type: 'string', example: '10000' })
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
