import { HttpException, Injectable } from '@nestjs/common';
import { CreateConvenioDto } from './dto/create-convenio.dto';
import { UpdateConvenioDto } from './dto/update-convenio.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ConvenioService {
  constructor(private prisma: PrismaService) {}
  async create(createConvenioDto: CreateConvenioDto) {
    const paciente = await this.prisma.paciente.findUnique({
      where: { id: createConvenioDto.id_paciente },
    });
    if (!paciente) {
      throw new HttpException(`Paciente com esse id não encontrado`, 404);
    }
    return this.prisma.convenio.create({
      data: {
        no_operadora: createConvenioDto.no_operadora,
        nu_carteirinha: createConvenioDto.nu_carteirinha,
        dt_val_carteirinha: createConvenioDto.dt_val_carteirinha,
        id_paciente: createConvenioDto.id_paciente,
      },
    });
  }

  findAll() {
    return this.prisma.convenio.findMany();
  }

  async findOne(id: number) {
    const convenio = await this.prisma.convenio.findUnique({ where: { id } });
    if (!convenio) {
      throw new HttpException(`Convenio com id não encontrado`, 404);
    }
    return convenio;
  }

  async findPaciente(idPaciente: number) {
    const paciente = await this.prisma.paciente.findUnique({
      where: { id: idPaciente },
    });
    if (!paciente) {
      throw new HttpException(`Paciente com id não encontrado`, 404);
    }
    const convenios = await this.prisma.convenio.findMany({
      where: { id_paciente: idPaciente },
    });
    if (!convenios.length) {
      throw new HttpException(`Nenhum convenio associado ao paciente`, 404);
    }
    return convenios;
  }

  async update(id: number, updateConvenioDto: UpdateConvenioDto) {
    const convenio = await this.findOne(id);
    if (!convenio) {
      throw new HttpException(`Convenio com id não encontrado`, 404);
    }
    return this.prisma.convenio.update({
      where: { id },
      data: {
        no_operadora: updateConvenioDto.no_operadora,
        nu_carteirinha: updateConvenioDto.nu_carteirinha,
        dt_val_carteirinha: updateConvenioDto.dt_val_carteirinha,
      },
    });
  }

  async remove(id: number) {
    const convenio = await this.findOne(id);
    if (!convenio) {
      throw new HttpException(`Convenio com id não encontrado`, 404);
    }
    return this.prisma.convenio.delete({ where: { id } });
  }
}
