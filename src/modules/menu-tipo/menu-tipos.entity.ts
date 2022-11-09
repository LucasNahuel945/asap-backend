import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';
    
@Entity('menutipos')
export class MenuTipo {
  @PrimaryGeneratedColumn({ name:"idmenutipo" })
  id: number;

  @Column()
  descripcion: string;
}