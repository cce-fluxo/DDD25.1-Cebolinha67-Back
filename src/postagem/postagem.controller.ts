import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
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
    return this.postagemService.create(createPostagemDto);
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
    return this.postagemService.update(+id, updatePostagemDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.postagemService.remove(+id);
  }
}
