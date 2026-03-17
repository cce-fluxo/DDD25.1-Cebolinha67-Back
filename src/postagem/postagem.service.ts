import { HttpException, Injectable } from '@nestjs/common';
import { CreatePostagemDto } from './dto/create-postagem.dto';
import { UpdatePostagemDto } from './dto/update-postagem.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostagemService {
  constructor(private readonly prisma: PrismaService) {}
  createIndividual(dataPosta: CreatePostagemDto) {
    if (dataPosta.imagens && dataPosta.imagens.length > 0) {
      throw new HttpException(
        'Postagem individual não pode ter imagens associadas',
        400,
      );
    }
    if (!dataPosta.pacientes || dataPosta.pacientes.length === 0) {
      throw new HttpException(
        'Postagem individual deve ter pelo menos um paciente associado',
        400,
      );
    }
    return this.prisma.postagem.create({
      data: {
        titulo: dataPosta.titulo,
        mensagem: dataPosta.mensagem,
        tipo: 'individual',
        id_dentista: dataPosta.dentista,
        imagem_postagem: {},
        postagem_paciente: {
          create: dataPosta.pacientes?.map((id_paciente) => ({
            id_paciente: id_paciente,
          })),
        },
      },
      include: {
        postagem_paciente: { select: { id_paciente: true } },
      },
    });
  }

  createGeral(dataPosta: CreatePostagemDto) {
    if (dataPosta.pacientes && dataPosta.pacientes.length > 0) {
      throw new HttpException(
        'Postagem geral não pode ter pacientes associados',
        400,
      );
    }
    return this.prisma.postagem.create({
      data: {
        titulo: dataPosta.titulo,
        mensagem: dataPosta.mensagem,
        tipo: 'geral',
        id_dentista: dataPosta.dentista,
        imagem_postagem: dataPosta.imagens
          ? {
              create: dataPosta.imagens.map((imagem) => ({
                imagem: {
                  connectOrCreate: {
                    where: { url: imagem.url },
                    create: {
                      url: imagem.url,
                      nome: imagem.nome,
                    },
                  },
                },
              })),
            }
          : undefined,
        postagem_paciente: {},
      },
      include: {
        imagem_postagem: { include: { imagem: true } },
      },
    });
  }

  async findAll() {
    const geral = await this.prisma.postagem.findMany({
      where: { tipo: 'geral' },
      include: {
        imagem_postagem: { include: { imagem: true } },
      },
    });
    const individual = await this.prisma.postagem.findMany({
      where: { tipo: 'individual' },
      include: {
        postagem_paciente: { select: { id_paciente: true } },
      },
    });
    return { geral, individual };
  }

  async findOne(id: number) {
    const postagem = await this.prisma.postagem.findUnique({
      where: { id },
      include: {
        imagem_postagem: {
          include: { imagem: true },
        },
        postagem_paciente: {
          select: { id_paciente: true },
        },
      },
    });

    if (!postagem) throw new HttpException('Postagem não encontrada', 404);
    if (postagem.tipo === 'geral') {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { postagem_paciente, ...resto } = postagem;
      return resto;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { imagem_postagem, ...resto } = postagem;
    return resto;
  }

  async findDentista(idDentista: number) {
    const geral = await this.prisma.postagem.findMany({
      where: { tipo: 'geral', id_dentista: idDentista },
      include: {
        imagem_postagem: { include: { imagem: true } },
      },
    });
    const individual = await this.prisma.postagem.findMany({
      where: { tipo: 'individual', id_dentista: idDentista },
      include: {
        postagem_paciente: { select: { id_paciente: true } },
      },
    });
    if (!geral && !individual) {
      throw new HttpException(
        'Nenhuma postagem encontrada para o dentista especificado',
        404,
      );
    }
    return { geral, individual };
  }

  async update(id: number, updatePostagemDto: UpdatePostagemDto) {
    const findPostagem = await this.findOne(id);
    if (!findPostagem) {
      throw new HttpException('Postagem não encontrada', 404);
    }

    return this.prisma.postagem.update({
      where: { id: id },
      data: {
        titulo: updatePostagemDto.titulo,
        mensagem: updatePostagemDto.mensagem,
        imagem_postagem: updatePostagemDto.imagens
          ? {
              create: updatePostagemDto.imagens.map((imagem) => ({
                imagem: {
                  connectOrCreate: {
                    where: { url: imagem.url },
                    create: {
                      url: imagem.url,
                      nome: imagem.nome,
                    },
                  },
                },
              })),
            }
          : undefined,
      },
    });
  }

  async remove(id: number) {
    const postagem = await this.findOne(id);
    if (!postagem) {
      throw new HttpException('Postagem não encontrada', 404);
    }
    return this.prisma.postagem.delete({ where: { id } });
  }
}
