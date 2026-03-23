import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateImagemDto } from './dto/update-imagem.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ImagemService {
  constructor(private readonly prisma: PrismaService) {}

  async mostrarImagens() {
    const imagens = await this.prisma.imagem.findMany();

    if (!imagens || imagens.length === 0) {
      throw new NotFoundException('Não encontramos nenhuma imagem');
    }

    return imagens;
  }

  async fazerUpload(id: number) {
    const imagem = await this.prisma.imagem.findUnique({
      where: { id },
    });

    if (!imagem) {
      throw new NotFoundException('Imagem não encontrada para upload');
    }

    return imagem;
  }

  async editarImagem(id: number, updateImagemDto: UpdateImagemDto) {
    const imagemExistente = await this.prisma.imagem.findUnique({
      where: { id },
    });

    if (!imagemExistente) {
      throw new NotFoundException('Não há foto a ser editada');
    }

    return this.prisma.imagem.update({
      where: { id },
      data: updateImagemDto,
    });
  }

  async removerImagem(id: number) {
    const imagemExistente = await this.prisma.imagem.findUnique({
      where: { id },
    });

    if (!imagemExistente) {
      throw new NotFoundException('Não há imagem a ser deletada');
    }

    return this.prisma.imagem.delete({
      where: { id },
    });
  }
}