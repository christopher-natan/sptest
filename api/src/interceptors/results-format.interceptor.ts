import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CustomResponseDto } from '../dto/custom.dto';

@Injectable()
export class ResultsFormatInterceptor<T>
  implements NestInterceptor<T, CustomResponseDto>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<CustomResponseDto> {
    return next.handle().pipe(
      map((data) => ({
        success: true,
        data,
        message: 'Operation successful',
      })),
    );
  }
}
