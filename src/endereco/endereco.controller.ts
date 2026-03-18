import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EnderecoService } from './endereco.service';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('endereco')
export class EnderecoController {
  constructor(private readonly enderecoService: EnderecoService) {}

  @Post('/cadastrar-novo-endereco')
  create(@Body() createEnderecoDto: CreateEnderecoDto) {
    return this.enderecoService.criarEndereco(createEnderecoDto);
  }

  @ApiOperation({summary: "Lista todos os Enderecos"})
  @ApiResponse({status: 200, description: 'Endereco encontrado'})
  @ApiResponse({status:404, description: 'Endereco não encontrado'})
  @Get('/ver-enderecos')
  findAll() {
    return this.enderecoService.verEnderecos();
  }

  @ApiOperation({summary: "Ver Endereco"})
  @ApiResponse({status: 200, description: 'Endereco encontrado'})
  @ApiResponse({status:404, description: 'Endereco não encontrado'})  
  @Get('/ver-endereco/:id')
  findOne(@Param('id') id: string) {
    return this.enderecoService.verEnderecoUnico(+id);
  }

  @ApiOperation({summary: "Edita um endereco"})
  @ApiResponse({status: 200, description: 'Endereco encontrado'})
  @ApiResponse({status:404, description: 'Endereco não encontrado'})
  @Patch('/editar-endereco/:id')
  update(@Param('id') id: string, @Body() updateEnderecoDto: UpdateEnderecoDto) {
    return this.enderecoService.editarEndereco(+id, updateEnderecoDto);
  }

  @ApiOperation({summary: "Deleta endereco"})
  @ApiResponse({status: 200, description: 'Endereco encontrado'})
  @ApiResponse({status:404, description: 'Endereco não encontrado'})
  @Delete('/remover-enderco/:id')
  remove(@Param('id') id: string) {
    return this.enderecoService.removerEndereco(+id);
  }
}
