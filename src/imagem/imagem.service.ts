// quem esteve aqui (coloca seu nome smp que entrar pf): motta

// aqui no service, vou fazer as funções que estão listadas na nossa tabela de configuração dos endpoints no lucid chart, na ordem em que elas aparecem lá, obviamente vou manter a ordem no controller

// e vou usar camelCase no nome das funções, além de dar prioridade a escrever em pt

// vou tentar explicar ao máximo o que eu fizer rpzd

// usar this.prisma.usuario

// funções uteis (prov vou colar isso em todos kkkk) : findUnique , findMany , update , create

// tem vários comentários úteis no usuario.service.ts , eu não vou reescrever tudo em todos pra não ficar maçante mas a lógica de pensamento pra fazer tá bem falada lá

import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateImagemDto } from './dto/update-imagem.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ImagemService {
  constructor(private readonly prisma: PrismaService) {}

  async mostrarImagens() {
    const imagens = this.prisma.imagem.findMany();

    if (!imagens || (await imagens).length=== 0) {
      throw new NotFoundException('Não encontramos nenhuma imagem');
    }
    return imagens;
  }

  async fazerUpload(id: number) {
    const imagem = this.prisma.imagem.findUnique({
      where: { id },
    });

    if (!imagem) {
      throw new NotFoundException('Imagem não encontrada para upload');
    }

    return imagem;
  } // revisar esse cara aqui, ele provavelmente tá errado

  async editarImagem(id: number, updateImagemDto: UpdateImagemDto) {
    const imagem = this.prisma.imagem.update({
      where: { id },
      data: updateImagemDto,
    });

    if (!imagem) {
      throw new NotFoundException('Não há foto a ser editada');
    }
    return imagem;
  }

  async removerImagem(id: number) {
    const imagem = this.prisma.imagem.delete({
      where: { id },
    });

    if (!imagem) {
      throw new NotFoundException('Não há imagem a ser deletada');
    }
    return imagem;
  }
}

