import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { PrismaModule } from "../prisma/prisma.module";
import { AuthModule } from "../auth/auth.module";
import { FilesModule } from "../files/files.module";
import { PurchasesModule } from "../purchases/purchases.module";
import { BuyersModule } from "../buyers/buyers.module";
import { SellersModule } from "../sellers/sellers.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
      validationOptions: {
        allowUnknown: true,
        abortEarly: false
      },
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'test', 'provision')
          .default('development'),

        PORT: Joi.number().default(3333),
        LOG_LEVELS: Joi.string().default('log,error,warn,debug,verbose'),
        CORS_ORIGIN: Joi.string().default('*'),
        CORS_MAX_AGE: Joi.number().default(900),
        UPLOADED_FILE_SIZE_LIMIT: Joi.number().default(200000)
      })
    }),
    PrismaModule,
    AuthModule,
    FilesModule,
    PurchasesModule,
    BuyersModule,
    SellersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
