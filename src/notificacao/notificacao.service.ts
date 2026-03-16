// quem esteve aqui (coloca seu nome smp que entrar pf): motta ->

import { Injectable } from '@nestjs/common';
import { UpdateNotificacaoDto } from './dto/update-notificacao.dto';
import { PrismaService } from 'src/prisma/prisma.service';

// aqui no service, vou fazer as funções que estão listadas na nossa tabela de configuração dos endpoints no lucid chart, na ordem em que elas aparecem lá, obviamente vou manter a ordem no controller

// e vou usar camelCase no nome das funções, além de dar prioridade a escrever em pt

// vou tentar explicar ao máximo o que eu fizer rpzd

// usar this.prisma.usuario

// funções uteis (prov vou colar isso em todos kkkk) : findUnique , findMany , update , create

// tem vários comentários úteis no usuario.service.ts , eu não vou reescrever tudo mas a lógica de pensamento pra fazer tá bem falada lá


@Injectable()
export class NotificacaoService {
  constructor (private readonly prisma: PrismaService){}
  
  async getDados(id:number){
    return this.prisma.notificacao.findUnique({
      where: {id}
    })
  }

  async listarNotificacoes(){
    return this.prisma.notificacao.findMany({})
  } 

  async mudarStatus(id:number , updateNotificacaoDto: UpdateNotificacaoDto){
    return this.prisma.notificacao.update({
      where: {id},
      data: updateNotificacaoDto
    })
  }
}
