// quem esteve aqui (coloca seu nome smp que entrar pf): motta -> 

// vou colocar as URLs todas em cima do que eu fizer pra não me perder

// vou usar o mesmo modelo de @metodo -- funcao-do-service(){...} pra todos 

//usar this.prisma.notificacaoService

// tá tudo da minha lógica bem comentado e explicado no usuario.controller.ts, vale a pena dar uma olhada lá, que ai eu não fico me repetindo nos comentários de código

import { Controller, Get, Body, Patch, Param, UseGuards} from '@nestjs/common';
import { NotificacaoService } from './notificacao.service';
import { UpdateNotificacaoDto } from './dto/update-notificacao.dto';
import { ApiOperation, ApiParam, ApiTags, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@ApiTags('notficacoes')
@Controller('notificacoes')
export class NotificacaoController {
  constructor(private readonly notificacaoService: NotificacaoService) {}

  @Get('/lista/minhasnotificacoes/:id')
  @ApiOperation({summary: 'lista todas as minhas notificações'})
  @ApiResponse({status: 200, description: "Notificações encontradas"})
  @ApiResponse({status:404, description: 'Notificações não encontradas' })
  listarMinhasNotificacoes(@Param('id') id:string){
    return this.notificacaoService.getNotificacaoUsuario(+id)
  }

  // /notificacoes/lista
  @Get('/lista')
  //swagger
  @ApiOperation({summary: 'lista todas as notificações'})
  @ApiResponse({status: 200, description: "Notificação encontrada"})
  @ApiResponse({status:404, description: 'Notificação não encontrada' })
  listarNotificacoes(){
    return this.notificacaoService.listarNotificacoes()
  }

  // /notificacoes/:id — deve ficar por último para não capturar rotas específicas
  @Get('/:id')
  @ApiOperation({summary: 'pega uma notificação pelo ID dela'})
  @ApiParam({name: 'id' , type:Number})
  @ApiResponse({status: 200, description: "Notificação encontrada"})
  @ApiResponse({status:404, description: 'Notificação não encontrada' })
  getDados(@Param('id') id:string){
    return this.notificacaoService.getDados(+id)
  }

  @Patch("/status/:id")
  // swagger 
  @ApiOperation({summary: 'muda o status de uma notificação'})
  @ApiParam({name:'id', type:Number})
  @ApiParam({name: 'updateNotificacaoDto', type: UpdateNotificacaoDto})
  @ApiResponse({status: 200, description: "Notificação encontrada"})
  @ApiResponse({status:404, description: 'Notificação não encontrada' })
  mudarStatus(@Param('id') id:string, @Body() updateNotificacaoDto: UpdateNotificacaoDto){
    return this.notificacaoService.mudarStatus(+id, updateNotificacaoDto)
  }
}


