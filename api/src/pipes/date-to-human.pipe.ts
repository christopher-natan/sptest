import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { format } from 'date-fns';

@Injectable()
export class DateToHumanPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (value instanceof Date) {
      return format(value, 'MMMM do, yyyy H:mm:ss');
    }
    return value;
  }
}
