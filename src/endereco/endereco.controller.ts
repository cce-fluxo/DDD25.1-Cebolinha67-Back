import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EnderecoService } from './endereco.service';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';

@Controller('endereco')
export class EnderecoController {
  constructor(private readonly enderecoService: EnderecoService) {}

  @Post('/cadastrar-novo-endereco')
  create(@Body() createEnderecoDto: CreateEnderecoDto) {
    return this.enderecoService.criarEndereco(createEnderecoDto);
  }

  @Get('/ver-enderecos')
  findAll() {
    return this.enderecoService.verEnderecos();
  }

  @Get('/ver-endereco/:id')
  findOne(@Param('id') id: string) {
    return this.enderecoService.verEnderecoUnico(+id);
  }

  @Patch('/editar-endereco/:id')
  update(@Param('id') id: string, @Body() updateEnderecoDto: UpdateEnderecoDto) {
    return this.enderecoService.editarEndereco(+id, updateEnderecoDto);
  }

  @Delete('/remover-enderco/:id')
  remove(@Param('id') id: string) {
    return this.enderecoService.removerEndereco(+id);
  }
}
