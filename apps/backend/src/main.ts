/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, LogLevel } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { intersection } from 'lodash';
import { SwaggerModule } from "@nestjs/swagger";
import { getSwaggerDocumentationConfig } from "./swagger/SwaggerDocumentConfig";

const logger = new Logger('bootstrap', { timestamp: true });

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: getLogLevelsFromEnv()
  });

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  const document = SwaggerModule.createDocument(app, getSwaggerDocumentationConfig());
  SwaggerModule.setup('swagger', app, document, {
    customSiteTitle: 'Swagger documentation for Energy Web Zero API',
    swaggerOptions: {
      persistAuthorization: true,
    },
  });

  app.enableCors({
    origin: process.env.CORS_ORIGIN,
    maxAge: parseInt(process.env.CORS_MAX_AGE)
  });

  const port = process.env.PORT || 3333;
  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}

bootstrap();

function getLogLevelsFromEnv(): LogLevel[] {
  const allowedLogLevels: LogLevel[] = ['log', 'error', 'warn', 'debug', 'verbose'];
  const envLogLevels = (process.env.LOG_LEVELS).split(',') as LogLevel[];

  return intersection(allowedLogLevels, envLogLevels) as LogLevel[]
}
