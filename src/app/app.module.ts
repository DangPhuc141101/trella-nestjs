import { Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { AppConfigModule } from '@configs/app/config.module';
import { AppService } from './app.service';
import { SharedModule } from '@shared/shared.module';
import { ConfigService } from '@nestjs/config';
import { LoggerService } from '@shared/services';
import { AppController } from './app.controller';
import { LoggingInterceptor } from '@providers/interceptors';
import { GlobalExceptionsFilter } from '@providers/filters/global-exception.filter';

@Module({
  imports: [AppConfigModule, SharedModule],
  controllers: [AppController],
  providers: [
    AppService,
    ConfigService,
    LoggerService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
    { provide: APP_FILTER, useClass: GlobalExceptionsFilter },
  ],
})
export class AppModule {}
