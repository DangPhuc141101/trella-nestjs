import { Module } from '@nestjs/common';
import * as Joi from '@hapi/joi';
import configuration from './configuration';
import { Auth0ConfigService } from './config.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: Joi.object({
        AUTH0_DOMAIN: Joi.string(),
        AUTH0_AUDIENCE: Joi.string(),
      }),
    }),
  ],
  providers: [ConfigService, Auth0ConfigService],
  exports: [ConfigService, Auth0ConfigService],
})
export class Auth0ConfigModule {}
