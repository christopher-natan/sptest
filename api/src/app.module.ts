import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConnectionService } from './shared/services/database-connection.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ResultsFormatInterceptor } from './interceptors/results-format.interceptor';
import { ServeStaticModule } from '@nestjs/serve-static';
import { SeederService } from './services/seeder.service';

import { PlannersModule } from './planners/planners.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConnectionService,
    }),
    ServeStaticModule.forRoot({}),

    PlannersModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ResultsFormatInterceptor,
    },
    AppService,
    Logger,
    SeederService,
  ],
})
export class AppModule {}
