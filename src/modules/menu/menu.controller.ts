import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { CommonController } from 'src/common/common.controller';
import { Menu } from './menu.entity';
import { MenuService } from './menu.service';

@Controller('menus')
export class MenuController extends CommonController<Menu>{
    
    constructor(private readonly menuService: MenuService) {
      super();
    }
  
    getService(): MenuService {
      return this.menuService;
    }

    @Get('/:id/submenus')
    @HttpCode(HttpStatus.OK)
    async findSubmenus(@Param('id') idmenu: number): Promise<Menu[]> {
      return await this.getService().findSubmenus(idmenu);
    }
  }
