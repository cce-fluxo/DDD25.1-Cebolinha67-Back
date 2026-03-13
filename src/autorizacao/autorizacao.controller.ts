import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AutorizacaoService } from './autorizacao.service';
import { CreateAutorizacaoDto } from './dto/create-autorizacao.dto';
import { UpdateAutorizacaoDto } from './dto/update-autorizacao.dto';

@Controller('autorizacao')
export class AutorizacaoController {
  constructor(private readonly autorizacaoService: AutorizacaoService) {}

  @Post()
  create(@Body() createAutorizacaoDto: CreateAutorizacaoDto) {
    return this.autorizacaoService.create(createAutorizacaoDto);
  }

  @Get()
  findAll() {
    return this.autorizacaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.autorizacaoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAutorizacaoDto: UpdateAutorizacaoDto) {
    return this.autorizacaoService.update(+id, updateAutorizacaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.autorizacaoService.remove(+id);
  }
}
