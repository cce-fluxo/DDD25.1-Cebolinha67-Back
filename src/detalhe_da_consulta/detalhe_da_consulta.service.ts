import { Injectable } from '@nestjs/common';
import { CreateDetalheDaConsultaDto } from './dto/create-detalhe_da_consulta.dto';
import { UpdateDetalheDaConsultaDto } from './dto/update-detalhe_da_consulta.dto';

@Injectable()
export class DetalheDaConsultaService {
  create(createDetalheDaConsultaDto: CreateDetalheDaConsultaDto) {
    return 'This action adds a new detalheDaConsulta';
  }

  findAll() {
    return `This action returns all detalheDaConsulta`;
  }

  findOne(id: number) {
    return `This action returns a #${id} detalheDaConsulta`;
  }

  update(id: number, updateDetalheDaConsultaDto: UpdateDetalheDaConsultaDto) {
    return `This action updates a #${id} detalheDaConsulta`;
  }

  remove(id: number) {
    return `This action removes a #${id} detalheDaConsulta`;
  }
}
