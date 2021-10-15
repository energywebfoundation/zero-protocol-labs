import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from "@nestjs/config";
import * as Joi from "joi";
import { CertificateModule, entities as CertificateEntities } from '../certificate';
import { BlockchainPropertiesModule, entities as BlockchainPropertiesEntities } from '../blockchain';
import { TypeOrmModule } from '@nestjs/typeorm';

const OriginAppTypeOrmModule = () => {
  const entities = [...CertificateEntities, ...BlockchainPropertiesEntities];

  return TypeOrmModule.forRoot({
    type: 'postgres',
    url: process.env.DATABASE_URL,
    ssl: false,
    entities,
    logging: ['info']
  })
};

@Module({
  imports: [
    OriginAppTypeOrmModule(),
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
      validationOptions: {
        allowUnknown: true,
        abortEarly: false
      },
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'test')
          .default('development'),
        API_KEY: Joi.string().required(),
        PORT: Joi.number().default(3333),
        LOG_LEVELS: Joi.string().default('log,error,warn,debug,verbose'),
        WEB3: Joi.string().default('http://localhost:8545'),
        MNEMONIC: Joi.string().default('chalk park staff buzz chair purchase wise oak receive avoid avoid home')
      })
    }),
    CertificateModule,
    BlockchainPropertiesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
