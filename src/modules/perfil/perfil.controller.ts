import { Controller } from '@nestjs/common';
import { CommonController } from 'src/common/common.controller';
import { Perfil } from './perfil.entity';
import { PerfilService } from './perfil.service';

@Controller('perfiles')
export class PerfilController extends CommonController<Perfil>{
    
    constructor(private readonly perfilService: PerfilService) {
      super();
    }
  
    getService(): PerfilService {
      return this.perfilService;
    }
  }
  
