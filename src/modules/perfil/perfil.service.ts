import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CommonService } from 'src/common/common.service';
import { Perfil } from './perfil.entity';

import { FindOneOptions } from 'typeorm/find-options/FindOneOptions';

@Injectable()
export class PerfilService extends CommonService<Perfil> {
    constructor(
        @InjectRepository(Perfil)
        private readonly perfilRepository: Repository<Perfil>,
      ) {
        super();
      }
    
      getRepository(): Repository<Perfil> {
        return this.perfilRepository;
      }
    
      async findAll(): Promise<Perfil[]> {
        const entities = await this.getRepository().find({ relations: ['menus'] });
        return entities;
      }

      async findOne(id: number): Promise<Perfil> {
        const options: FindOneOptions<Perfil> = { where: { id }, relations: ['menus', 'menus.menuNivelSuperior']};
        const entity = await this.getRepository().findOne(options);
        entity.menus = entity.menus.filter(x => x.menuNivelSuperior === null)

        if (!entity) throw new NotFoundException('');
        return entity;
      }
}
