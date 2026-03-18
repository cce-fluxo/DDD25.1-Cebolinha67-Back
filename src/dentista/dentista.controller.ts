import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DentistaService } from './dentista.service';
import { CreateDentistaDto } from './dto/create-dentista.dto';
import { UpdateDentistaDto } from './dto/update-dentista.dto';

@Controller('dentista')
export class DentistaController {
  constructor(private readonly dentistaService: DentistaService) {}

  @Post()
  create(@Body() createDentistaDto: CreateDentistaDto) {
    return this.dentistaService.criarDentista(createDentistaDto);
  }

  @Get()
  findAll() {
    return this.dentistaService.verDentistas();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dentistaService.verDentistaUnico(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDentistaDto: UpdateDentistaDto) {
    return this.dentistaService.editarDentista(+id, updateDentistaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dentistaService.removerDentista(+id);
  }
}
