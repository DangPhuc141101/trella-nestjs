import { Module } from '@nestjs/common';
import { LoggerService } from './services';
import { AppConfigModule } from '@configs/app/config.module';
import { AppConfigService } from '@configs/app/config.service';

@Module({
  imports: [AppConfigModule],
  providers: [AppConfigService, LoggerService],
  exports: [LoggerService],
})
export class SharedModule {}
