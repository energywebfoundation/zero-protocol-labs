import { ApiProperty } from "@nestjs/swagger";
import {
  IsInt,
  IsISO8601,
  IsNumber,
  Min,
  registerDecorator,
  ValidationArguments,
  ValidationOptions
} from "class-validator";

export class CreateOrderItemTimeframeDto {
  @ApiProperty({ example: '2020-10-11T00:00:00.000Z' })
  @IsISO8601({ strict: true })
  @IsStartOfDay({ message: "start should be the first millisecond of a day" })
  start: Date;

  @ApiProperty({ example: '2020-12-31T23:59:59.999Z' })
  @IsISO8601({ strict: true })
  @IsEndOfDay({ message: "end should be the last millisecond of a day" })
  @IsGreaterThan("start", { message: "end cannot be smaller or equal to start" })
  end: Date;

  @ApiProperty({ example: 100000 })
  @IsNumber({ allowInfinity: false, allowNaN: false })
  @IsInt()
  @Min(1)
  energy: number;
}

function IsStartOfDay(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "IsStartOfDay",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, validationArguments?: ValidationArguments): boolean {
          return value.match(/T00:00:00\.000Z$/);
        }
      }
    });
  };
}

function IsEndOfDay(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "IsEndOfDay",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, validationArguments?: ValidationArguments): boolean {
          return value.match(/T23:59:59\.999Z$/);
        }
      }
    });
  };
}

function IsGreaterThan(property: string, validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "IsGreaterThan",
      target: object.constructor,
      propertyName: propertyName,
      constraints: [property],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const [relatedPropertyName] = args.constraints;
          const relatedValue = args.object[relatedPropertyName];
          return value > relatedValue;
        }
      }
    });
  };
}
