import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDentistaDto } from './dto/create-dentista.dto';
import { UpdateDentistaDto } from './dto/update-dentista.dto';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class DentistaService {

  constructor(private readonly prisma: PrismaService) {}

  criarDentista(createDentistaDto: CreateDentistaDto) {
    return this.prisma.dentista.create({

      data: {
        senha_dentista: createDentistaDto.senha_dentista,
        formacao: createDentistaDto.formacao,
        instituto: createDentistaDto.instituto,
        datainicio: createDentistaDto.datainicio,
        datatermino: createDentistaDto.datatermino,
        especializacao: createDentistaDto.especializacao,
        id_usuario: createDentistaDto.id_usuario,
      }

    });
  }

  verDentistas() {
    return this.prisma.dentista.findMany();
  }

  verDentistaUnico(id: number) {
    return this.prisma.dentista.findUnique({
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

  editarDentista(id: number, updateDentistaDto: UpdateDentistaDto) {
    return this.prisma.dentista.update({
      where: {id},

      data: {
        senha_dentista: updateDentistaDto.senha_dentista,
        formacao: updateDentistaDto.formacao,
        instituto: updateDentistaDto.instituto,
        datainicio: updateDentistaDto.datainicio,
        datatermino: updateDentistaDto.datatermino,
        especializacao: updateDentistaDto.especializacao,
        id_usuario: updateDentistaDto.id_usuario,
      }
    });
  }

  removerDentista(id: number) {
    return this.prisma.dentista.delete({
      where: {id}
    });
  }
}
