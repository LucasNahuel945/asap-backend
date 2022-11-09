import { CommonEntity } from 'src/common/common.entity';
import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Menu } from '../menu/menu.entity';

@Entity('perfiles')
export class Perfil extends CommonEntity {
  @ApiProperty({ example: 99 })
  @PrimaryGeneratedColumn({ name:"idperfil" })
  id: number;

  @ApiProperty({ example: 'Administrador' })
  @Column()
  descripcion: string;

  @ApiProperty({ example: '/assets/iconos/' })
  @Column({ default: '' })
  ubicacionIcono: string;

  @JoinTable({ name: 'perfilmenu' })
  @ManyToMany(() => Menu, (menu: Menu) => menu.perfiles)
  menus: Menu[];
}
