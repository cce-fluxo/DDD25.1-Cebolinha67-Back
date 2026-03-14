import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DentistaService } from './dentista.service';
import { CreateDentistaDto } from './dto/create-dentista.dto';
import { UpdateDentistaDto } from './dto/update-dentista.dto';

@Controller('dentista')
export class DentistaController {
  constructor(private readonly dentistaService: DentistaService) {}

  @Post()
  create(@Body() createDentistaDto: CreateDentistaDto) {
    return this.dentistaService.create(createDentistaDto);
  }

  @Get()
  findAll() {
    return this.dentistaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dentistaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDentistaDto: UpdateDentistaDto) {
    return this.dentistaService.update(+id, updateDentistaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dentistaService.remove(+id);
  }
}
