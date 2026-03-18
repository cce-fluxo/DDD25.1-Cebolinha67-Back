import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DentistaService } from './dentista.service';
import { CreateDentistaDto } from './dto/create-dentista.dto';
import { UpdateDentistaDto } from './dto/update-dentista.dto';
import { ApiTags , ApiOperation , ApiParam , ApiResponse} from '@nestjs/swagger';

@ApiTags('dentistas')
@Controller('dentista')
export class DentistaController {
  constructor(private readonly dentistaService: DentistaService) {}

  @Post('criar')
  @ApiOperation({summary: "Permite a criacao de dentista"})
  @ApiParam({name:'id', type:Number})
  @ApiResponse({status: 200, description: 'Dentista encontrado'})
  @ApiResponse({status:404, description: 'Dentista não encontrado'})
  create(@Body() createDentistaDto: CreateDentistaDto) {
    return this.dentistaService.criarDentista(createDentistaDto);
  }

  @Get('dentista')
  @ApiOperation({summary: "Lista todos os Dentistas"})
  @ApiResponse({status: 200, description: 'Dentista encontrado'})
  @ApiResponse({status:404, description: 'Dentista não encontrado'})
  verDentistas() {
    return this.dentistaService.verDentistas();
  }

  @Get('/dentista/:id')
  @ApiOperation({summary: "Lista dentista específico"})
  @ApiParam({name: 'id', type: Number})
  @ApiResponse({status: 200, description: 'Dentista encontrado'})
  @ApiResponse({status:404, description: 'Dentista não encontrado'})
  verDentistaUnico(@Param('id') id: string) {
    return this.dentistaService.verDentistaUnico(+id);
  }

  @Patch('dentista/mudar-dados/:id')
  @ApiOperation({summary: "Edita dentista específico"})
  @ApiParam({name: 'id', type: Number})
  @ApiResponse({status: 200, description: 'Dentista encontrado'})
  @ApiResponse({status:404, description: 'Dentista não encontrado'})
  editarDentista(@Param('id') id: string, @Body() updateDentistaDto: UpdateDentistaDto) {
    return this.dentistaService.editarDentista(+id, updateDentistaDto);
  }

  @Delete('dentista/deletar/:id')
  @ApiOperation({summary: "Remove dentista específico"})
  @ApiParam({name: 'id', type: Number})
  @ApiResponse({status: 200, description: 'Dentista encontrado'})
  @ApiResponse({status:404, description: 'Dentista não encontrado'})
  removerDentista(@Param('id') id: string) {
    return this.dentistaService.removerDentista(+id);
  }
}
