import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConsultasService } from './consultas.service.js';
import { CreateConsultaDto } from './dto/create-consulta.dto.js';
import { UpdateConsultaDto } from './dto/update-consulta.dto.js';

@Controller('consultas')
export class ConsultasController {
  constructor(private readonly consultasService: ConsultasService) {}

  @Get('ver-consulta')
  verConsultas() {
    return this.consultasService.verConsultas();
  }

  @Get('ver-consulta/paciente/:id_paciente')
  verConsultasPaciente(@Param('id_paciente') id_paciente: string) {
    return this.consultasService.verConsultasPaciente(+id_paciente);
  }

  @Get('ver-consulta/dentista/:id_dentista')
  verConsultasDentista(@Param('id_dentista') id_dentista: string) {
    return this.consultasService.verConsultasDentista(+id_dentista);
  }

  @Get('ver-consulta/unica/:id_consulta')
  verConsultaUnica(@Param('id_consulta') id_consulta: string) {
    return this.consultasService.verConsultaUnica(+id_consulta);
  }

  @Post('criar-consulta')
  criarConsulta(@Body() createConsultaDto: CreateConsultaDto) {
    return this.consultasService.criarConsulta(createConsultaDto);
  }

  @Delete('remover-consulta/:id')
  removerConsulta(@Param('id') id: string) {
    return this.consultasService.removerConsulta(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConsultaDto: UpdateConsultaDto) {
    return this.consultasService.editarConsulta(+id, updateConsultaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.consultasService.removerConsulta(+id);
  }
}
