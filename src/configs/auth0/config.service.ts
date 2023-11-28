import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class Auth0ConfigService {
  constructor(private configService: ConfigService) {}

  get domain(): string {
    return this.configService.get<string>('auth0.domain');
  }

  get audience(): string {
    return this.configService.get<string>('auth0.audience');
  }
}
