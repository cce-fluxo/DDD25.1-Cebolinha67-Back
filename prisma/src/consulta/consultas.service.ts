import { Injectable } from '@nestjs/common';
import { CreateConsultaDto } from './dto/create-consulta.dto.js';
import { UpdateConsultaDto } from './dto/update-consulta.dto.js';

@Injectable()
export class ConsultasService {
  create(createConsultaDto: CreateConsultaDto) {
    return 'This action adds a new consulta';
  }

  findAll() {
    return `This action returns all consultas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} consulta`;
  }

  update(id: number, updateConsultaDto: UpdateConsultaDto) {
    return `This action updates a #${id} consulta`;
  }

  remove(id: number) {
    return `This action removes a #${id} consulta`;
  }
}
