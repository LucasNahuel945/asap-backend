import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const dbconfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root', // usuario de la base de datos
    password: 'root', // password
    database: 'asap', // nombre de base de datos
}