import { CommonService } from 'src/common/common.service';
import { Usuario } from './usuario.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions } from 'typeorm/find-options/FindOneOptions';

@Injectable()
export class UsuarioService extends CommonService<Usuario> {
    constructor(
        @InjectRepository(Usuario)
        private readonly usuarioRepository: Repository<Usuario>,
      ) {
        super();
      }
    
      getRepository(): Repository<Usuario> {
        return this.usuarioRepository;
      }

      async findAll(): Promise<Usuario[]> {
        const entities = await this.getRepository().find({ relations: ['perfil'] });
        return entities;
      }
      
      async findOne(id: number): Promise<Usuario> {
        const options: FindOneOptions<Usuario> = { relations: ['perfil'],where: { id } };
        const entity = await this.getRepository().findOne(options);
        if (!entity) throw new NotFoundException('');
        return entity;
      }
    
      async auth(email: string, password: string): Promise<Usuario | undefined> {
        //const optionsByEmail: FindOneOptions<Usuario> = { where: { email, password } };
        //const optionsByUsername: FindOneOptions<Usuario> = { where: { nombre: email, password } };

        // busca por email
        //let auth = await this.getRepository().findOne(optionsByEmail);
        //if (auth) return auth;
        
        // busca por nombre
        //auth = await this.getRepository().findOne(optionsByUsername);
        //if (!auth) throw new NotFoundException('');
        
        const all = await this.findAll()
        const user = all.find(x => (x.email === email || x.nombre) && x.password === password)
        if(!user) throw new NotFoundException(''); 
        return user;
      }
}

