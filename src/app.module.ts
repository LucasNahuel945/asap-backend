import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbconfig } from './dbconfig';
import {
  MenuModule,
  MenuTipoModule,
  PerfilModule,
  UsuarioModule,
  Menu,
  MenuTipo,
  Perfil,
  Usuario,
} from './modules';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...dbconfig,
      entities: [
        Perfil,
        Usuario,
        Menu,
        MenuTipo,
      ],
      synchronize: true,
    }),
    PerfilModule,
    UsuarioModule,
    MenuModule,
    MenuTipoModule,
  ],
})
export class AppModule {}
