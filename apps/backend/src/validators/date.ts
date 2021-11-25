import { registerDecorator, ValidationArguments, ValidationOptions } from 'class-validator';

/**
 * validates if a string is parseable by the Date object constructor
 */
export function IsDateParseable(validationOptions?: ValidationOptions) {
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
