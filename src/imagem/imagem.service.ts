// quem esteve aqui (coloca seu nome smp que entrar pf): motta 

// aqui no service, vou fazer as funções que estão listadas na nossa tabela de configuração dos endpoints no lucid chart, na ordem em que elas aparecem lá, obviamente vou manter a ordem no controller

// e vou usar camelCase no nome das funções, além de dar prioridade a escrever em pt

// vou tentar explicar ao máximo o que eu fizer rpzd

// usar this.prisma.usuario

// funções uteis (prov vou colar isso em todos kkkk) : findUnique , findMany , update , create

// tem vários comentários úteis no usuario.service.ts , eu não vou reescrever tudo em todos pra não ficar maçante mas a lógica de pensamento pra fazer tá bem falada lá

import { Injectable } from '@nestjs/common';
import { UpdateImagemDto } from './dto/update-imagem.dto';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class ImagemService {

  constructor(private readonly prisma: PrismaService){}

  async mostrarImagens(){
    this.prisma.imagem.findMany()
  }

  async fazerUpload(id:number) {
    this.prisma.imagem.findUnique({
      where:{id}
    })

  }; // revisar esse cara aqui


  async editarImagem(id:number, updateImagemDto : UpdateImagemDto){
    this.prisma.imagem.update({
      where: {id},
      data: updateImagemDto 
    })
  }

  async removerImagem(id:number){
    this.prisma.imagem.delete({
      where: {id}
    })
  }
  
}
