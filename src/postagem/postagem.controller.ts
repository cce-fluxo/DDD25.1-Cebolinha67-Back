import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { PostagemService } from './postagem.service';
import { CreatePostagemDto } from './dto/create-postagem.dto';
import { UpdatePostagemDto } from './dto/update-postagem.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@ApiTags('Postagens')
@Controller('postagem')
export class PostagemController {
  constructor(private readonly postagemService: PostagemService) {}

  @Post('/individual')
  @ApiOperation({ summary: 'Criar uma postagem individual (para pacientes específicos)' })
  @ApiBody({ type: CreatePostagemDto })
  @ApiCreatedResponse({
    description: 'Postagem individual criada com sucesso',
  })
  @ApiBadRequestResponse({
    description: 'Dados inválidos para criação da postagem',
  })
  createIndividual(@Body() createPostagemDto: CreatePostagemDto) {
    return this.postagemService.createIndividual(createPostagemDto);
  }

  @Post('/geral')
  @ApiOperation({ summary: 'Criar uma postagem geral (para todos os pacientes)' })
  @ApiBody({ type: CreatePostagemDto })
  @ApiCreatedResponse({
    description: 'Postagem geral criada com sucesso',
  })
  @ApiBadRequestResponse({
    description: 'Dados inválidos para criação da postagem',
  })
  createGeral(@Body() createPostagemDto: CreatePostagemDto) {
    return this.postagemService.createGeral(createPostagemDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as postagens' })
  @ApiOkResponse({
    description: 'Lista de postagens retornada com sucesso',
  })
  findAll() {
    return this.postagemService.findAll();
  }

  @Get('/dentista/:id')
  @ApiOperation({ summary: 'Listar postagens de um dentista' })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID do dentista',
    example: 1,
  })
  @ApiOkResponse({
    description: 'Postagens do dentista retornadas com sucesso',
  })
  @ApiBadRequestResponse({
    description: 'ID do dentista inválido',
  })
  @ApiNotFoundResponse({
    description: 'Dentista não encontrado',
  })
  findDentista(@Param('id', ParseIntPipe) id: number) {
    return this.postagemService.findDentista(id);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar uma postagem pelo ID' })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID da postagem',
    example: 1,
  })
  @ApiOkResponse({
    description: 'Postagem encontrada com sucesso',
  })
  @ApiBadRequestResponse({
    description: 'ID da postagem inválido',
  })
  @ApiNotFoundResponse({
    description: 'Postagem não encontrada',
  })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.postagemService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar uma postagem pelo ID' })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID da postagem',
    example: 1,
  })
  @ApiBody({ type: UpdatePostagemDto })
  @ApiOkResponse({
    description: 'Postagem atualizada com sucesso',
  })
  @ApiBadRequestResponse({
    description: 'Dados inválidos para atualização da postagem',
  })
  @ApiNotFoundResponse({
    description: 'Postagem não encontrada',
  })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePostagemDto: UpdatePostagemDto,
  ) {
    return this.postagemService.update(id, updatePostagemDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover uma postagem pelo ID' })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID da postagem',
    example: 1,
  })
  @ApiOkResponse({
    description: 'Postagem removida com sucesso',
  })
  @ApiBadRequestResponse({
    description: 'ID da postagem inválido',
  })
  @ApiNotFoundResponse({
    description: 'Postagem não encontrada',
  })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.postagemService.remove(id);
  }
}