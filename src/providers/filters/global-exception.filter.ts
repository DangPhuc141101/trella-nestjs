import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { LoggerService } from '@shared/services';

@Catch()
export class GlobalExceptionsFilter implements ExceptionFilter {
  constructor(
    private readonly httpAdapterHost: HttpAdapterHost,
    private readonly loggerService: LoggerService,
  ) {}

  catch(exception: any, host: ArgumentsHost): void {
    const { httpAdapter } = this.httpAdapterHost;
    const { originalUrl, method, headers, body, query } = host
      .switchToHttp()
      .getRequest();

    const httpStatus =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    // Common message
    const message = exception?.response?.customMessage;

    // Stack trace
    const stack = {
      ...exception,
      stack: exception?.stack?.split('\n    at '),
    };

    const responseBody = {
      statusCode: httpStatus,
      message: message,
      timestamp: new Date().toISOString(),
      debugOnly: !!process.env.APP_ENV.match(/develop|staging/)
        ? stack
        : undefined,
    };

    this.loggerService.error(message, {
      request: {
        originalUrl,
        method,
        body,
        query,
        headers: {
          ...headers,
          authorization: undefined,
        },
        timestamp: new Date().toISOString(),
      },
      error: { ...responseBody, debugOnly: stack },
    });

    httpAdapter.reply(
      host.switchToHttp().getResponse(),
      responseBody,
      httpStatus,
    );
  }
}
