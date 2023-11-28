import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  env: process.env.APP_ENV,
  port: process.env.APP_PORT,
  name: process.env.APP_NAME,
  debugMode: process.env.DEBUG_MODE,
}));
