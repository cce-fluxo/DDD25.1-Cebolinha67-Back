import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateConsultaDto } from './dto/create-consulta.dto.js';
import { UpdateConsultaDto } from './dto/update-consulta.dto.js';

@Injectable()
export class ConsultasService {
  constructor(private readonly prisma: PrismaService) {}

  async verConsultas() {
    return await this.prisma.consulta.findMany({
      include: {
        detalhe_da_consulta: true
      }
    });
  }

  async verConsultasPaciente(id_paciente: number) {
    return await this.prisma.consulta.findMany({
      where: { id_paciente: id_paciente },
      include: {
        detalhe_da_consulta: true
      }
    });
  }

  async verConsultasDentista(id_dentista: number) {
    return await this.prisma.consulta.findMany({
      where: { id_dentista: id_dentista },
      include: {
        detalhe_da_consulta: true
      }
    });
  }

  async verConsultaUnica(id_consulta: number) {
    return await this.prisma.consulta.findUnique({
      where: { id: id_consulta },
      include: {
        detalhe_da_consulta: true
      }
    });
  }

  async criarConsulta(createConsultaDto: CreateConsultaDto) {

    return await this.prisma.consulta.create({

      data: {

        id_paciente: createConsultaDto.id_paciente,
        id_dentista: createConsultaDto.id_dentista, 
        //garante id_convenio opcional
        ...(createConsultaDto.id_convenio != null && { 
          id_convenio: createConsultaDto.id_convenio 
        }),

        id_endereco: createConsultaDto.id_endereco,

        detalhe_da_consulta: {
          create: {

            DH: new Date(createConsultaDto.dh),
            valor: createConsultaDto.valor,
            tipo_pagamento: createConsultaDto.tipo_pagamento,
            status: createConsultaDto.status,
            tipo_consulta: createConsultaDto.tipo_consulta,
            motivo: createConsultaDto.motivo

          }
        }

      }

    });

  }

  async editarConsulta(id: number, updateConsultaDto: UpdateConsultaDto) {

    return await this.prisma.consulta.update({

      where: { id },

      data: {

        id_paciente: updateConsultaDto.id_paciente,
        id_dentista: updateConsultaDto.id_dentista,
        id_convenio: updateConsultaDto.id_convenio,
        id_endereco: updateConsultaDto.id_endereco,

        detalhe_da_consulta: {

          update: {

            DH: updateConsultaDto.dh
              ? new Date(updateConsultaDto.dh)
              : undefined,

            valor: updateConsultaDto.valor,
            tipo_pagamento: updateConsultaDto.tipo_pagamento,
            status: updateConsultaDto.status,
            tipo_consulta: updateConsultaDto.tipo_consulta,
            motivo: updateConsultaDto.motivo

          }

        }

      }

    });

  }

  async removerConsulta(id: number){
    return await this.prisma.consulta.delete({
      where: { id }
    })
  }
}
