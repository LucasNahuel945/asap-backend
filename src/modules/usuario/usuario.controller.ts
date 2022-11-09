import { Body, Controller, Post } from '@nestjs/common';
import { CommonController } from 'src/common/common.controller';
import { Usuario } from './usuario.entity';
import { UsuarioService } from './usuario.service';

@Controller('usuarios')
export class UsuarioController extends CommonController<Usuario>{
    
  constructor(private readonly usuarioService: UsuarioService) {
    super();
  }

  getService(): UsuarioService {
    return this.usuarioService;
  }

  @Post('/auth')
  async auth(@Body() user: { email: string, password: string }): Promise<Usuario> {
    const _user = await this.getService().auth(user.email, user.password)
    return _user
  }
}
