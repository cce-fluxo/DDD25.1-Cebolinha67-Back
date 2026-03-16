// quem esteve aqui (coloca seu nome smp que entrar pf): motta ->

import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateNotificacaoDto } from './dto/update-notificacao.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Notificacao } from '../../dist/src/generated/prisma/models/Notificacao';

// aqui no service, vou fazer as funções que estão listadas na nossa tabela de configuração dos endpoints no lucid chart, na ordem em que elas aparecem lá, obviamente vou manter a ordem no controller

// e vou usar camelCase no nome das funções, além de dar prioridade a escrever em pt

// vou tentar explicar ao máximo o que eu fizer rpzd

// usar this.prisma.usuario

// funções uteis (prov vou colar isso em todos kkkk) : findUnique , findMany , update , create

// tem vários comentários úteis no usuario.service.ts , eu não vou reescrever tudo mas a lógica de pensamento pra fazer tá bem falada lá

// a maioria dos erros handlings é verificação de existência

@Injectable()
export class NotificacaoService {
  constructor (private readonly prisma: PrismaService){}
  
  async getDados(id:number){
    const notificacao = this.prisma.notificacao.findUnique({
      where: {id}
    })

    if(!notificacao){
      throw new NotFoundException("Notificação não encontrada")
    }

    return notificacao
  }

  async listarNotificacoes(){
    const notificacoes = this.prisma.notificacao.findMany()

    if(!(await notificacoes).length){
      throw new NotFoundException("Não há notificações por enquanto")
    }

    return notificacoes
  } 

  async mudarStatus(id:number , updateNotificacaoDto: UpdateNotificacaoDto){
    const notificacao = this.prisma.notificacao.update({
      where: {id},
      data: updateNotificacaoDto
    })

    if(!notificacao){
      throw new NotFoundException('Notificação não encontrada')
    }

    return this.prisma.notificacao.update({
      where: {id},
      data:updateNotificacaoDto
    })
  }
}
