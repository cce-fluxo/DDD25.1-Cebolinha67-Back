import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';

@Controller('paciente')
export class PacienteController {
  constructor(private readonly pacienteService: PacienteService) {}

  @Post()
  create(@Body() createPacienteDto: CreatePacienteDto) {
    return this.pacienteService.create(createPacienteDto);
  }

  @Get()
  findAll() {
    return this.pacienteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.pacienteService.findOne(id);
  }

  @Get('ver-notificacoes/:id')
  findNotificacoes(@Param('id', ParseIntPipe) id: number) {
    return this.pacienteService.findNotificacoes(id);
  }

  @Get('ver-consultas/:id')
  findConsultas(@Param('id', ParseIntPipe) id: number) {
    return this.pacienteService.findConsultas(id);
  }

  @Get('ver-convenios/:id')
  findConvenios(@Param('id', ParseIntPipe) id: number) {
    return this.pacienteService.findConvenio(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePacienteDto: UpdatePacienteDto,
  ) {
    return this.pacienteService.update(id, updatePacienteDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.pacienteService.remove(id);
  }
}
