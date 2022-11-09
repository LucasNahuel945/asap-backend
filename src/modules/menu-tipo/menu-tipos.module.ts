import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuTiposController } from './menu-tipos.controller';
import { MenuTiposService } from './menu-tipos.service';
import { MenuTipo } from './menu-tipos.entity';

@Module({
    imports: [TypeOrmModule.forFeature([MenuTipo])],
    controllers: [MenuTiposController],
    providers: [MenuTiposService],
    exports: [MenuTiposService]
})

export class MenuTipoModule {}
