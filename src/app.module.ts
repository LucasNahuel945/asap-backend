import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';

import {
  MenuModule,
  MenuTipoModule,
  PerfilModule,
  UsuarioModule,
} from './modules';

import databaseConfig from './database.config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => config.get<TypeOrmModuleOptions>('database.config'),
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig],
      envFilePath: process.env.NODE_ENV
        ? `.${process.env.NODE_ENV}.env`
        : '.development.env',
    }),
    MenuModule,
    MenuTipoModule,
    PerfilModule,
    UsuarioModule,
  ],
})

export class AppModule {}