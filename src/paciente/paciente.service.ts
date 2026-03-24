import { HttpException, Injectable } from '@nestjs/common';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PacienteService {
  constructor(private prisma: PrismaService) {}
  
  async create(createPacienteDto: CreatePacienteDto) {
    return await this.prisma.paciente.create({
      data: {
        rg: createPacienteDto.rg,
        
        usuario: {
            create: {
              no_usuario: createPacienteDto.usuario.no_usuario,
              email_usuario: createPacienteDto.usuario.email_usuario,
              senha_usuario: await bcrypt.hash(createPacienteDto.usuario.senha_usuario,10),
              cpf: createPacienteDto.usuario.cpf,
              nu_celular: createPacienteDto.usuario.nu_celular,
              genero: createPacienteDto.usuario.genero,
              data_nascimento: createPacienteDto.usuario.data_nascimento,
              token_esqueci_senha: createPacienteDto.usuario.token_esqueci_senha,
            },
          },
        },
        include: {
          usuario: true,
        },
    });
  }

  async findAll() {
    return await this.prisma.paciente.findMany();
  }

  async findOne(id: number) {
    const paciente = await this.prisma.paciente.findUnique({
      where: { id },
    });
    if (!paciente) {
      throw new HttpException(`Paciente com id não encontrado`, 404);
    }
    return paciente;
  }

  async findNotificacoes(id: number) {
    const paciente = await this.prisma.paciente.findUnique({
      where: { id },
    });
    if (!paciente) {
      throw new HttpException(`Paciente com id não encontrado`, 404);
    }
    const notificacoes = await this.prisma.notificacaoUsuario.findMany({
      where: { id_usuario: paciente.id_usuario },
    });
    if (!notificacoes) {
      throw new HttpException(`Nenhuma notificação associada ao paciente`, 404);
    }
    return notificacoes;
  }

  async findConsultas(id: number) {
    const paciente = await this.prisma.paciente.findUnique({
      where: { id },
    });
    if (!paciente) {
      throw new HttpException(`Paciente com id não encontrado`, 404);
    }
    const consultas = await this.prisma.consulta.findMany({
      where: { id_paciente: id },
    });
    if (!consultas) {
      throw new HttpException(`Nenhuma consulta associada ao paciente`, 404);
    }
    return consultas;
  }

  async findConvenio(id: number) {
    const paciente = await this.prisma.paciente.findUnique({
      where: { id },
    });
    if (!paciente) {
      throw new HttpException(`Paciente com id não encontrado`, 404);
    }
    const convenios = await this.prisma.convenio.findMany({
      where: { id_paciente: id },
    });
    if (!convenios) {
      throw new HttpException(`Nenhuma convenio associada ao paciente`, 404);
    }
    return convenios;
  }

  async update(id: number, updatePacienteDto: UpdatePacienteDto) {
    const paciente = await this.findOne(id);
    if (!paciente) {
      throw new HttpException(`Paciente com id não encontrado`, 404);
    }
    return this.prisma.paciente.update({
      where: { id },
      data: {
        rg: updatePacienteDto.rg
      },
    });
  }

  async remove(id: number) {
    const paciente = await this.findOne(id);
    if (!paciente) {
      throw new HttpException(`Paciente com id não encontrado`, 404);
    }
    return this.prisma.paciente.delete({
      where: { id },
    });
  }
}
