import { ApiProperty } from "@nestjs/swagger";
import {
  ArrayMinSize,
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsString,
  registerDecorator,
  ValidateNested,
  ValidationArguments,
  ValidationOptions
} from "class-validator";
import { Countries } from "@energyweb/utils-general";
import { CreateOrderItemTimeframeDto } from "./create-order-item-timeframe.dto";
import { Type } from "class-transformer";

export class CreateOrderItemDto {
  @ApiProperty({ example: "PL" })
  @IsEnum(Countries.map(i => i.code))
  country: string;

  @ApiProperty({ example: "1234" })
  @IsString()
  @IsNotEmpty()
  minerId: string;

  @ApiProperty({ type: [CreateOrderItemTimeframeDto] })
  @IsArray()
  @ArrayMinSize(1)
  @Type(() => CreateOrderItemTimeframeDto)
  @ValidateNested()
  @TimeframesInSequence({ message: "timeFrames items start values need to be sorted chronologically" })
  timeFrames: CreateOrderItemTimeframeDto[];
}

function TimeframesInSequence(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "TimeframesInSequence",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          if (value.length < 2) {
            return true;
          }

          for (let i = 0; i < value.length - 1; i++) {
            if (value[i].start >= value[i + 1].start) {
              return false;
            }
          }

          return true;
        }
      }
    });
  };
}
