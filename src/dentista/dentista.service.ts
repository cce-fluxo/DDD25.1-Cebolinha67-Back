import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDentistaDto } from './dto/create-dentista.dto';
import { UpdateDentistaDto } from './dto/update-dentista.dto';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class DentistaService {

  constructor(private readonly prisma: PrismaService) {}

  async criarDentista(createDentistaDto: CreateDentistaDto) {
    try {
      return await this.prisma.dentista.create({
        data: {
          senha_dentista: createDentistaDto.senha_dentista,
          formacao: createDentistaDto.formacao,
          instituto: createDentistaDto.instituto,
          datainicio: createDentistaDto.datainicio,
          datatermino: createDentistaDto.datatermino,
          especializacao: createDentistaDto.especializacao,
          usuario: {
            create: {
              no_usuario: createDentistaDto.usuario.no_usuario,
              email_usuario: createDentistaDto.usuario.email_usuario,
              cpf: createDentistaDto.usuario.cpf,
              nu_celular: createDentistaDto.usuario.nu_celular,
              genero: createDentistaDto.usuario.genero,
              data_nascimento: createDentistaDto.usuario.data_nascimento,
              token_esqueci_senha: createDentistaDto.usuario.token_esqueci_senha,
            },
          },
        },
        include: {
          usuario: true,
        },
      });
    } catch (error) {
      console.error("ERRO NO PRISMA:", error); // Verifique o terminal após isso!
      throw new Error(error.message);
    }
  }

  async verDentistas() {
    return await this.prisma.dentista.findMany();
  }

  async verDentistaUnico(id: number) {
    return await this.prisma.dentista.findUnique({
      where: {id}
    });
  }

  async verPacientesDentista(id_dentista: number) {
  
    const dentistaComConsultasEPacientes = await this.prisma.dentista.findUnique({
      where: { id: id_dentista },
      include: {
        consultas: {
          include: {
            paciente: true, 
          },
        },
      },
    });

    // Se o dentista não existir, retorna null
    if (!dentistaComConsultasEPacientes) return null;

    // Opcional: Extrair apenas a lista de pacientes das consultas
    return dentistaComConsultasEPacientes.consultas.map((c) => c.paciente);
  }

  async editarDentista(id: number, updateDentistaDto: UpdateDentistaDto) {
    return await this.prisma.dentista.update({
      where: {id},

      data: {
        senha_dentista: updateDentistaDto.senha_dentista,
        formacao: updateDentistaDto.formacao,
        instituto: updateDentistaDto.instituto,
        datainicio: updateDentistaDto.datainicio,
        datatermino: updateDentistaDto.datatermino,
        especializacao: updateDentistaDto.especializacao,
      }
    });
  }

  async removerDentista(id: number) {
    return await this.prisma.dentista.delete({
      where: {id}
    });
  }
}
