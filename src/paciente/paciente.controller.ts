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
import { PacienteService } from './paciente.service';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';

@ApiTags('Pacientes')
@Controller('paciente')
export class PacienteController {
  constructor(private readonly pacienteService: PacienteService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo paciente' })
  @ApiBody({ type: CreatePacienteDto })
  @ApiCreatedResponse({
    description: 'Paciente criado com sucesso',
  })
  @ApiBadRequestResponse({
    description: 'Dados inválidos para criação do paciente',
  })
  create(@Body() createPacienteDto: CreatePacienteDto) {
    return this.pacienteService.create(createPacienteDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os pacientes' })
  @ApiOkResponse({
    description: 'Lista de pacientes retornada com sucesso',
  })
  findAll() {
    return this.pacienteService.findAll();
  }

  @Get('ver-notificacoes/:id')
  @ApiOperation({ summary: 'Listar notificações de um paciente' })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID do paciente',
    example: 1,
  })
  @ApiOkResponse({
    description: 'Notificações do paciente retornadas com sucesso',
  })
  @ApiBadRequestResponse({
    description: 'ID do paciente inválido',
  })
  @ApiNotFoundResponse({
    description: 'Paciente não encontrado',
  })
  findNotificacoes(@Param('id', ParseIntPipe) id: number) {
    return this.pacienteService.findNotificacoes(id);
  }

  @Get('ver-consultas/:id')
  @ApiOperation({ summary: 'Listar consultas de um paciente' })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID do paciente',
    example: 1,
  })
  @ApiOkResponse({
    description: 'Consultas do paciente retornadas com sucesso',
  })
  @ApiBadRequestResponse({
    description: 'ID do paciente inválido',
  })
  @ApiNotFoundResponse({
    description: 'Paciente não encontrado',
  })
  findConsultas(@Param('id', ParseIntPipe) id: number) {
    return this.pacienteService.findConsultas(id);
  }

  @Get('ver-convenios/:id')
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
  findConvenios(@Param('id', ParseIntPipe) id: number) {
    return this.pacienteService.findConvenio(id);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar um paciente pelo ID' })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID do paciente',
    example: 1,
  })
  @ApiOkResponse({
    description: 'Paciente encontrado com sucesso',
  })
  @ApiBadRequestResponse({
    description: 'ID do paciente inválido',
  })
  @ApiNotFoundResponse({
    description: 'Paciente não encontrado',
  })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.pacienteService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar um paciente pelo ID' })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID do paciente',
    example: 1,
  })
  @ApiBody({ type: UpdatePacienteDto })
  @ApiOkResponse({
    description: 'Paciente atualizado com sucesso',
  })
  @ApiBadRequestResponse({
    description: 'Dados inválidos para atualização do paciente',
  })
  @ApiNotFoundResponse({
    description: 'Paciente não encontrado',
  })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePacienteDto: UpdatePacienteDto,
  ) {
    return this.pacienteService.update(id, updatePacienteDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover um paciente pelo ID' })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID do paciente',
    example: 1,
  })
  @ApiOkResponse({
    description: 'Paciente removido com sucesso',
  })
  @ApiBadRequestResponse({
    description: 'ID do paciente inválido',
  })
  @ApiNotFoundResponse({
    description: 'Paciente não encontrado',
  })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.pacienteService.remove(id);
  }
}