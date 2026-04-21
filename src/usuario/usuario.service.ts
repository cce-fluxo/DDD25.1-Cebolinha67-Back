import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { BadRequestException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuarioService {
  constructor(private readonly prisma: PrismaService) {}

  async criarUsuario(createUsuarioDto: CreateUsuarioDto) {
    try {
      return await this.prisma.usuario.create({
        data: {
          ...createUsuarioDto,
          data_nascimento: new Date(createUsuarioDto.data_nascimento),
          senha_usuario: await bcrypt.hash(createUsuarioDto.senha_usuario,10)
        },
      });
    } catch (error: any) {
      if (error.code === 'P2002') {
        const campo = error.meta?.target as string[];
        if (campo?.includes('email_usuario')) {
          throw new BadRequestException('Este e-mail já está cadastrado');
        }
        if (campo?.includes('cpf')) {
          throw new BadRequestException('Este CPF já está cadastrado');
        }
        throw new BadRequestException('Email ou CPF já existe');
      }

      throw error;
    }
  }

  async getDados(id: number) {
    const usuario = await this.prisma.usuario.findUnique({
      where: { id },
    });
    if (!usuario) {
      throw new NotFoundException('Usuário não encontrado');
    }
    return usuario;
    // usei uma função pra pegar os dados de um usuário específico, vai dar pra notar esse tipo de lógica ao longo do resto
  }

  async getUsuarios() {
    const usuarios = await this.prisma.usuario.findMany();
    if (!usuarios.length) {
      throw new NotFoundException('Nenhum usuário encontrado');
    }

    return usuarios;

    // não preciso passar um argumento, ele já vai listar todos
  }

  async getUsuarioByEmail(email_usuario: string) {
    const usuario = await this.prisma.usuario.findUnique({
      where: { email_usuario },
      include: {
        paciente: true,
        dentista: true,
      },
    });

    if (!usuario) {
      throw new NotFoundException('Nenhum email encontrado');
    }

    return usuario;
  } // isso aqui provavelmente não tá legal

  async editarDadosUsuario(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    const usuario = await this.prisma.usuario.findUnique({
      where: { id },
    });

    if (!usuario) {
      throw new NotFoundException('Usuário não encontrado');
    }

    return this.prisma.usuario.update({
      where: { id },
      data: updateUsuarioDto,
    });
  }

  async atualizarTodosOsDadosUuario(
    id: number,
    updateUsuarioDto: UpdateUsuarioDto,
  ) {
    // primeiro vc vai achar o usuário
    const usuario = await this.prisma.usuario.findUnique({
      where: { id },
    });

    if (!usuario) {
      throw new NotFoundException('Usuário não encontrado');
    }

    // depois vai dar update nos dados do paizão
    return this.prisma.usuario.update({
      where: { id },
      data: updateUsuarioDto,
    });
  }

  async enviarMensagem(id: number, createUsuarioDto: CreateUsuarioDto) {
    const usuarioExistente = await this.prisma.usuario.findUnique({
      where: { id },
    });

    if (!usuarioExistente) {
      throw new Error('Usuário não existente');
    }

    try {
      return await this.prisma.usuario.create({
        data: {
          ...createUsuarioDto,
          data_nascimento: new Date(createUsuarioDto.data_nascimento),
        },
      });
    } catch (error: any) {
      if (error.code === 'P2002') {
        throw new BadRequestException('Email ou CPF já existe');
      }
      throw error;
    }
  }
}
