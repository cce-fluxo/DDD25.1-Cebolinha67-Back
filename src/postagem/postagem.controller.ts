// quem esteve aqui (coloca seu nome smp que entrar pf): arthur -> motta

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
import { PostagemService } from './postagem.service';
import { CreatePostagemDto } from './dto/create-postagem.dto';
import { UpdatePostagemDto } from './dto/update-postagem.dto';

@Controller('postagem')
export class PostagemController {
  constructor(private readonly postagemService: PostagemService) {}

  @Post('/individual')
  createIndividual(@Body() createPostagemDto: CreatePostagemDto) {
    return this.postagemService.createIndividual(createPostagemDto);
  }

  @Post('/geral')
  createGeral(@Body() createPostagemDto: CreatePostagemDto) {
    return this.postagemService.createGeral(createPostagemDto);
  }

  @Get()
  findAll() {
    return this.postagemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.postagemService.findOne(id);
  }

  @Get('/dentista/:id')
  findDentista(@Param('id', ParseIntPipe) id: number) {
    return this.postagemService.findDentista(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePostagemDto: UpdatePostagemDto,
  ) {
    return this.postagemService.update(id, updatePostagemDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.postagemService.remove(id);
  }
}
