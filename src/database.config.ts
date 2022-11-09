import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

import {
  Menu,
  MenuTipo,
  Perfil,
  Usuario,
} from './modules';

function typeormModuleOptions(): TypeOrmModuleOptions {
  return {
    type: 'mysql',
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10),
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [
      Perfil,
      Usuario,
      Menu,
      MenuTipo,
    ],

    synchronize: false,
    logging: true,
    logger: 'file',
  }

}

export default registerAs('database', () => ({
  config: typeormModuleOptions(),
}));