import { Injectable } from '@nestjs/common';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';

@Injectable()
export class PacienteService {
  create(createPacienteDto: CreatePacienteDto) {
    return 'This action adds a new paciente';
  }

  findAll() {
    return `This action returns all paciente`;
  }

  findOne(id: number) {
    return `This action returns a #${id} paciente`;
  }

  findNotificacoes(id: number) {
    return `This action returns the notifications of paciente #${id}`;
  }

  findConsultas(id: number) {
    return `This action returns the consultations of paciente #${id}`;
  }

  update(id: number, updatePacienteDto: UpdatePacienteDto) {
    return `This action updates a #${id} paciente`;
  }

  remove(id: number) {
    return `This action removes a #${id} paciente`;
  }
}
