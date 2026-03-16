// quem esteve aqui (coloca seu nome smp que entrar pf): motta 

// vou colocar as URLs todas em cima do que eu fizer pra não me perder

// vou usar o mesmo modelo de @metodo -- funcao-do-service(){...} pra todos 

//usar this.prisma.notificacaoService

// tá tudo da minha lógica bem comentado e explicado no usuario.controller.ts, vale a pena dar uma olhada lá, que ai eu não fico me repetindo nos comentários de código

import { Controller, Get, Post,Patch,Delete, Param, Body } from '@nestjs/common';
import { ImagemService } from './imagem.service';
import { UpdateImagemDto } from './dto/update-imagem.dto';

@Controller('imagens')
export class ImagemController {
  constructor(private readonly imagemService: ImagemService) {}

  // /imagens/mostrar-todas

  @Get()
  mostrarImagens(){
    return this.imagemService.mostrarImagens()
  }

  @Post()
  fazerUpload(@Param('id') id:string){
    return this.imagemService.fazerUpload(+id)
  } // menor ideia se isso aqui tá certo

  @Patch()
  editarImagem(@Param('id') id:string , @Body() updateImagemDto : UpdateImagemDto){
    return this.imagemService.editarImagem(+id, updateImagemDto)
  }

  @Delete()
  removerImagem(@Param('id') id:string){
    return this.imagemService.removerImagem(+id)
  }
  
}
