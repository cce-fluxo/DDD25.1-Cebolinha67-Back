// quem esteve aqui (coloca seu nome smp que entrar pf): motta -> 

// vou colocar as URLs todas em cima do que eu fizer pra não me perder

// vou usar o mesmo modelo de @metodo -- funcao-do-service(){...} pra todos 

//usar this.prisma.notificacaoService

// tá tudo da minha lógica bem comentado e explicado no usuario.controller.ts, vale a pena dar uma olhada lá, que ai eu não fico me repetindo nos comentários de código

import { Controller, Get, Body, Patch, Param} from '@nestjs/common';
import { NotificacaoService } from './notificacao.service';
import { UpdateNotificacaoDto } from './dto/update-notificacao.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('notficacoes')
@Controller('notificacoes')
export class NotificacaoController {
  constructor(private readonly notificacaoService: NotificacaoService) {}

  // /notificacoes/id
  @Get('/id')
  getDados(@Param('id') id:string){
    return this.notificacaoService.getDados(+id)
  }

  // /notificacoes/lida

  @Get('/lida')
  listarNotificacoes(){
    return this.notificacaoService.listarNotificacoes()
  }

  @Patch("/status/id")
  mudarStatus(@Param('id') id:string, @Body() updateNotificacaoDto: UpdateNotificacaoDto){
    return this.notificacaoService.mudarStatus(+id, updateNotificacaoDto)
  }
}


