// quem esteve aqui (coloca seu nome smp que entrar pf): motta ->

import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateNotificacaoDto } from './dto/update-notificacao.dto';
import { PrismaService } from 'src/prisma/prisma.service';

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
    try{
    const notificacao = await this.prisma.notificacao.findUnique({
      where: {id}
    })

    if(!notificacao){
      throw new NotFoundException("Notificação não encontrada")
    }

    return notificacao
  }
 catch(error: any){
    if (error.code === 'P2025') {
      throw new NotFoundException('Notificação não encontrada');
    }
    throw error;
  }
}

  async listarNotificacoes(){
    try{
    const notificacoes =  await this.prisma.notificacao.findMany()

    if(!notificacoes || notificacoes.length === 0){
      throw new NotFoundException("Não há notificações por enquanto")
    }

    return notificacoes
  } catch(error: any){
    if (error.code === 'P2025') {
      throw new NotFoundException('Não há notificações por enquanto');
    }   
    throw error;
  }
}
  async mudarStatus(id:number , updateNotificacaoDto: UpdateNotificacaoDto){
    try{
    const notificacao =  await this.prisma.notificacao.update({
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
  } catch(error: any){
    if (error.code === 'P2025') {
      throw new NotFoundException('Notificação não encontrada');
    }
    throw error;
   }
}
}
