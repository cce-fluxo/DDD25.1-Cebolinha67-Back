// quem esteve aqui (coloca seu nome smp que entrar pf): motta 

// vou colocar as URLs todas em cima do que eu fizer pra não me perder

// vou usar o mesmo modelo de @metodo -- funcao-do-service(){...} pra todos 

//usar this.prisma.notificacaoService

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NotificacaoService } from './notificacao.service';
import { CreateNotificacaoDto } from './dto/create-notificacao.dto';
import { UpdateNotificacaoDto } from './dto/update-notificacao.dto';

@Controller('notificacoes')
export class NotificacaoController {
  constructor(private readonly notificacaoService: NotificacaoService) {}

  @Get

  // /notificacao/
  pegarDados(){
    
  }
}
