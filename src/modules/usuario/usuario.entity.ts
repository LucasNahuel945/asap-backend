import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Perfil } from 'src/modules/perfil/perfil.entity';

@Entity('usuarios')
export class Usuario {
  @ApiProperty({ example: 99 })
  @PrimaryGeneratedColumn({ name: "idusuario" })
  id: number;
  
  @ApiProperty({ example: 'Pepe' })
  @Column({ name: "nombre" })
  nombre: string;

  @ApiProperty({ example: 'Pepe@gmail.com' })
  @Column({ name: "correoElectronico" })
  email: string;

  @ApiProperty({ example: '12345678' })
  @Column({ name: "contrasena" })
  password: string;
  
  @ApiProperty({ example: '01/01/2020' })
  @Column({ name: "fechaCambioContrasena", nullable: true })
  fechaCambioContrasena: Date;

  @ApiProperty({ example: 0 })
  @Column({ name: "intentosErroneos" })
  intentosErroneos: number;

  @ApiProperty({ example: false })
  @Column({ name: "bloqueado" })
  bloqueado: boolean;


  @ApiProperty({ example: 1 })
  @ManyToOne(() => Perfil, (perfil: Perfil) => perfil.id)
  perfil: Perfil;
}
