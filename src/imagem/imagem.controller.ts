// quem esteve aqui (coloca seu nome smp que entrar pf): motta 

// vou colocar as URLs todas em cima do que eu fizer pra não me perder

// vou usar o mesmo modelo de @metodo -- funcao-do-service(){...} pra todos 

//usar this.prisma.notificacaoService

// tá tudo da minha lógica bem comentado e explicado no usuario.controller.ts, vale a pena dar uma olhada lá, que ai eu não fico me repetindo nos comentários de código

import { Controller, Get, Post,Patch,Delete, Param, Body } from '@nestjs/common';
import { ImagemService } from './imagem.service';
import { UpdateImagemDto } from './dto/update-imagem.dto';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

@Controller('imagens')
export class ImagemController {
  constructor(private readonly imagemService: ImagemService) {}

  // /imagens/mostrar-todas
  @Get('/mostrar-dados')
  //swagger 
  @ApiOperation({summary: "mostra todas as imagens"})
  @ApiResponse({status: 200, description: 'Imagem encontrada'})
  @ApiResponse({status: 404, description: 'Imagem não encontrada' })
  mostrarImagens(){
    return this.imagemService.mostrarImagens()
  }
  
  // /imagens/upload 
  @Post('/upload')
  //swagger
  @ApiOperation({summary: "faz upload das imagens"})
  @ApiParam({name:'id', type:Number})
  @ApiResponse({status: 201, description: 'Imagem criada'})
  @ApiResponse({status: 400, description: 'Imagem inválida' })
  fazerUpload(@Param('id') id:string){
    return this.imagemService.fazerUpload(+id)
  } // menor ideia se isso aqui tá certo


  // /iamgens/editar/id
  @Patch('/editar/id')
  // swagger 
  @ApiOperation({summary: "editar as imagens"})
  @ApiParam({name: 'id', type:Number})
  @ApiParam({name:'updateImagemDto' , type: UpdateImagemDto})
  @ApiResponse({status: 200, description: 'Imagem encontrada'})
  @ApiResponse({status: 404, description: 'Imagem não encontrada' })
  editarImagem(@Param('id') id:string , @Body() updateImagemDto : UpdateImagemDto){
    return this.imagemService.editarImagem(+id, updateImagemDto)
  }


  // /imagens/remover-imagem/id
  @Delete('/remover-imagem/id')
  //swagger 
  @ApiOperation({summary: 'remover as imagens'})
  @ApiParam({name: 'id', type: String})
  @ApiResponse({status: 404, description: 'Imagem não encontrada' })
  removerImagem(@Param('id') id:string){
    return this.imagemService.removerImagem(+id)
  }
}
