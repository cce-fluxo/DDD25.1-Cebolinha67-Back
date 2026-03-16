// quem esteve aqui (coloca seu nome smp que entrar pf): motta 

import { Controller, Get, Post, Body, Patch, Param, Put} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { ApiTags } from '@nestjs/swagger';


// vou colocar as URLs todas em cima do que eu fizer pra não me perder

// vou usar o mesmo modelo de @metodo -- funcao-do-service(){...} pra todos 

//usar this.prisma.usuarioService

@ApiTags('usuarios') 
@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  // /usuarios/unico/id
  @Get('unico/id')
  getDados(@Param('id') id:string){
    return this.usuarioService.getDados(+id);
  }

  // /usuarios/ver-todos
  @Get('ver-todos')
  getUsuarios(){
    return this.usuarioService.getUsuarios();
  } // não preciso de um ID específico aqui, eu to vendo todos 

  // /usuarios/unico/editar/id 

  @Patch('unico/editar/id')
  editarDadosUsuario(@Param('id') id:string, @Body() updateUsuarioDto: UpdateUsuarioDto)
  // precisei puxar id e update, usar param pra id e body pra update
  {
    return this.usuarioService.editarDadosUsuario(+id, updateUsuarioDto);
  }

  // /usuarios/unico/atualizar/id
  @Put('unico/atualizar/id')
  atualizarTodosOsDadosUsuario(@Param('id') id:string, @Body() updateUsuarioDto: UpdateUsuarioDto)
  {
    return this.usuarioService.editarDadosUsuario(+id, updateUsuarioDto);
  }

  // /usuarios/mensagem/id

  @Post('mensagem/id')
  enviarMensagem(@Param('id') id:string , @Body() createUsuarioDto : CreateUsuarioDto){
    return this.usuarioService.enviarMensagem(+id, createUsuarioDto);
  }

}

