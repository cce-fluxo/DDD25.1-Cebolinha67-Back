import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DetalheDaConsultaService } from './detalhe_da_consulta.service';
import { CreateDetalheDaConsultaDto } from './dto/create-detalhe_da_consulta.dto';
import { UpdateDetalheDaConsultaDto } from './dto/update-detalhe_da_consulta.dto';

@Controller('detalhe-da-consulta')
export class DetalheDaConsultaController {
  constructor(private readonly detalheDaConsultaService: DetalheDaConsultaService) {}

  @Post()
  create(@Body() createDetalheDaConsultaDto: CreateDetalheDaConsultaDto) {
    return this.detalheDaConsultaService.create(createDetalheDaConsultaDto);
  }

  @Get()
  findAll() {
    return this.detalheDaConsultaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detalheDaConsultaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDetalheDaConsultaDto: UpdateDetalheDaConsultaDto) {
    return this.detalheDaConsultaService.update(+id, updateDetalheDaConsultaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detalheDaConsultaService.remove(+id);
  }
}
