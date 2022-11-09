import { CommonEntity } from 'src/common/common.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
} from 'typeorm';
import { MenuTipo } from '../menu-tipo/menu-tipos.entity';
import { Perfil } from '../perfil/perfil.entity';

  
@Entity('menus')
export class Menu extends CommonEntity {
  @PrimaryGeneratedColumn({ name:"idmenu" })
  id: number;

  @Column()
  vinculo: string;

  @Column()
  orden: number;

  @Column()
  descripcion: string;

  @Column()
  activo: number;

  @Column()
  ubicacionIcono: string;

  @ManyToOne(() => Menu, (menu: Menu) => menu.id)
  menuNivelSuperior: Menu;

  @ManyToOne(() => MenuTipo, (tipo: MenuTipo) => tipo.id)
  menuTipo: MenuTipo;

  @ManyToMany(() => Perfil, (perfil: Perfil) => perfil.menus)
  perfiles: Perfil[];
}
