import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FindOneOptions } from 'typeorm/find-options/FindOneOptions';
import { CommonService } from 'src/common/common.service';
import { Menu } from './menu.entity';

@Injectable()
export class MenuService extends CommonService<Menu> {
    constructor(
        @InjectRepository(Menu)
        private readonly perfilRepository: Repository<Menu>,
      ) {
        super();
      }
    
      getRepository(): Repository<Menu> {
        return this.perfilRepository;
      }
    
      async findAll(): Promise<Menu[]> {
        const entities = await this.getRepository().find({ relations: ['menuNivelSuperior', 'menuTipo'] });
        return entities;
      }

      async findOne(id: number): Promise<Menu> {
        const options: FindOneOptions<Menu> = { where: { id }, relations: ['menuNivelSuperior', 'menuTipo'] };
        const entity = await this.getRepository().findOne(options);
        if (!entity) throw new NotFoundException('');
        return entity;
      }

      async findSubmenus(idmenu: number) {
        const menus = await this.findAll();
        const submenus = menus
          .filter(x => x.menuNivelSuperior !== null && x.menuNivelSuperior.id == idmenu)
          .map(x => { delete x.menuNivelSuperior; return x }) 
          
        if (!submenus) throw new NotFoundException('');
        return submenus;
      }
}

