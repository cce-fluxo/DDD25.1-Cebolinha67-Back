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
import { ConvenioService } from './convenio.service';
import { CreateConvenioDto } from './dto/create-convenio.dto';
import { UpdateConvenioDto } from './dto/update-convenio.dto';

@ApiTags('Convenios')
@Controller('convenio')
export class ConvenioController {
  constructor(private readonly convenioService: ConvenioService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo convênio' })
  @ApiBody({ type: CreateConvenioDto })
  @ApiCreatedResponse({
    description: 'Convênio criado com sucesso',
  })
  @ApiBadRequestResponse({
    description: 'Dados inválidos para criação do convênio',
  })
  create(@Body() createConvenioDto: CreateConvenioDto) {
    return this.convenioService.create(createConvenioDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os convênios' })
  @ApiOkResponse({
    description: 'Lista de convênios retornada com sucesso',
  })
  findAll() {
    return this.convenioService.findAll();
  }

  @Get('paciente/:id')
  @ApiOperation({ summary: 'Listar convênios de um paciente' })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID do paciente',
    example: 1,
  })
  @ApiOkResponse({
    description: 'Convênios do paciente retornados com sucesso',
  })
  @ApiBadRequestResponse({
    description: 'ID do paciente inválido',
  })
  @ApiNotFoundResponse({
    description: 'Paciente não encontrado',
  })
  findPaciente(@Param('id', ParseIntPipe) id: number) {
    return this.convenioService.findPaciente(id);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar um convênio pelo ID' })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID do convênio',
    example: 1,
  })
  @ApiOkResponse({
    description: 'Convênio encontrado com sucesso',
  })
  @ApiBadRequestResponse({
    description: 'ID do convênio inválido',
  })
  @ApiNotFoundResponse({
    description: 'Convênio não encontrado',
  })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.convenioService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar um convênio pelo ID' })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID do convênio',
    example: 1,
  })
  @ApiBody({ type: UpdateConvenioDto })
  @ApiOkResponse({
    description: 'Convênio atualizado com sucesso',
  })
  @ApiBadRequestResponse({
    description: 'Dados inválidos para atualização do convênio',
  })
  @ApiNotFoundResponse({
    description: 'Convênio não encontrado',
  })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateConvenioDto: UpdateConvenioDto,
  ) {
    return this.convenioService.update(id, updateConvenioDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover um convênio pelo ID' })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID do convênio',
    example: 1,
  })
  @ApiOkResponse({
    description: 'Convênio removido com sucesso',
  })
  @ApiBadRequestResponse({
    description: 'ID do convênio inválido',
  })
  @ApiNotFoundResponse({
    description: 'Convênio não encontrado',
  })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.convenioService.remove(id);
  }
}