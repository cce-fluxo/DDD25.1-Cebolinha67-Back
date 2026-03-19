import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConsultasService } from './consultas.service.js';
import { CreateConsultaDto } from './dto/create-consulta.dto.js';
import { UpdateConsultaDto } from './dto/update-consulta.dto.js';
import { ApiTags , ApiOperation , ApiParam , ApiResponse, ApiBody} from '@nestjs/swagger';
import { Consulta } from './entities/consulta.entity.js';

@ApiTags('Consultas')
@Controller('consultas')
export class ConsultasController {
  constructor(private readonly consultasService: ConsultasService) {}

  @Get('ver-consulta')
  @ApiOperation({summary: "Lista todas as Consultas"})
  @ApiResponse({status: 200, description: 'Consulta criada'})
  @ApiResponse({status:404, description: 'Consulta não encontrada'})
  verConsultas() {
    return this.consultasService.verConsultas();
  }

  @Get('ver-consulta/paciente/:id_paciente')
  @ApiOperation({summary: "Lista de consultas de paciente específico"})
  @ApiResponse({status: 200, description: 'Consulta encontrada'})
  @ApiResponse({status:404, description: 'Consulta não encontrada'})
  verConsultasPaciente(@Param('id_paciente') id_paciente: string) {
    return this.consultasService.verConsultasPaciente(+id_paciente);
  }

  @Get('ver-consulta/dentista/:id_dentista')
  @ApiOperation({summary: "Lista de consultas de dentista específico"})
  @ApiResponse({status: 200, description: 'Consulta encontrada'})
  @ApiResponse({status:404, description: 'Consulta não encontrada'})
  verConsultasDentista(@Param('id_dentista') id_dentista: string) {
    return this.consultasService.verConsultasDentista(+id_dentista);
  }

  @Get('ver-consulta/unica/:id_consulta')
  @ApiOperation({summary: "Consulta específica"})
  @ApiResponse({status: 200, description: 'Consulta encontrada'})
  @ApiResponse({status:404, description: 'Consulta não encontrada'})
  verConsultaUnica(@Param('id_consulta') id_consulta: string) {
    return this.consultasService.verConsultaUnica(+id_consulta);
  }

  @Post('criar-consulta')
  @ApiBody({ type: CreateConsultaDto })
  @ApiOperation({summary: "Permite a criacao de consulta"})
  @ApiParam({name:'id', type:Number})
  @ApiResponse({status: 200, description: 'Consulta encontrada'})
  @ApiResponse({status:404, description: 'Consulta não encontrada'})
  criarConsulta(@Body() createConsultaDto: CreateConsultaDto) {
    return this.consultasService.criarConsulta(createConsultaDto);
  }

  @Patch('/editar-consulta/:id')
  @ApiOperation({summary: "Permite a edicao de consulta"})
  @ApiParam({name:'id', type:Number})
  @ApiResponse({status: 200, description: 'Consulta encontrada'})
  @ApiResponse({status:404, description: 'Consulta não encontrada'})
  update(@Param('id') id: string, @Body() updateConsultaDto: UpdateConsultaDto) {
    return this.consultasService.editarConsulta(+id, updateConsultaDto);
  }

  @Delete('/remover-consulta/:id')
  @ApiOperation({summary: "Permite a remocao de consulta"})
  @ApiParam({name:'id', type:Number})
  @ApiResponse({status: 200, description: 'Consulta encontrada'})
  @ApiResponse({status:404, description: 'Consulta não encontrada'})
  remove(@Param('id') id: string) {
    return this.consultasService.removerConsulta(+id);
  }
}
