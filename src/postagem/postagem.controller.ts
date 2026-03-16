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
  HttpException,
} from '@nestjs/common';
import { PostagemService } from './postagem.service';
import { CreatePostagemDto } from './dto/create-postagem.dto';
import { UpdatePostagemDto } from './dto/update-postagem.dto';


@Controller('postagem')
export class PostagemController {
  constructor(private readonly postagemService: PostagemService) {}

  @Post()
  create(@Body() createPostagemDto: CreatePostagemDto) {
    const input: any = {
      ...createPostagemDto,
    };
    if (createPostagemDto.dentista) {
      input.dentista = { connect: { id: createPostagemDto.dentista } };
    }
    return this.postagemService.create(input);
  }

  @Get()
  findAll() {
    return this.postagemService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: string) {
    const user = await this.postagemService.findOne(+id);
    if (!user) {
      throw new HttpException('Postagem não encontrada', 404);
    }
    return user;
  }

  @Get('/dentista/:id')
  async findDentista(@Param('id', ParseIntPipe) id: string) {
    const users = await this.postagemService.findDentista(+id);
    if (!users || users.length === 0) {
      throw new HttpException(
        'Nenhuma postagem encontrada para o dentista especificado',
        404,
      );
    }
    return users;
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: string,
    @Body() updatePostagemDto: UpdatePostagemDto,
  ) {
    const input: any = {
      ...updatePostagemDto,
    };
    if (updatePostagemDto.dentista) {
      input.dentista = { connect: { id: updatePostagemDto.dentista } };
    }
    return this.postagemService.update(+id, input);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.postagemService.remove(+id);
  }
}

/*
---------------------------------------------------------------

Era o 1o decorator embaixo de controller
@Post()
  create(@Body() createPostagemDto: CreatePostagemDto) {
    return this.postagemService.create(createPostagemDto);
  }

--------------------------------------------------------------

Era o penúltimo decorator embaixo de controller, logo acima do @Delete
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: string,
    @Body() updatePostagemDto: UpdatePostagemDto,
  ) {
    return this.postagemService.update(+id, updatePostagemDto);
  }


*/