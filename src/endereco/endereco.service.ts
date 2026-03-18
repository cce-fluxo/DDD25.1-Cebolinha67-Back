import { Injectable } from '@nestjs/common';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EnderecoService {

  constructor(private prisma: PrismaService){}

  async verEnderecos() {
    return this.prisma.endereco.findMany();
  }

  async verEnderecoUnico(id_endereco: number) {
    return this.prisma.endereco.findUnique({
      where: {id: id_endereco}
    });
  }

  async criarEndereco(createEnderecoDto: CreateEnderecoDto) {
  
    return this.prisma.endereco.create({

      data: { 

        logradouro: createEnderecoDto.logradouro,
        cidade: createEnderecoDto.cidade,
        estado: createEnderecoDto.estado,
        bairro: createEnderecoDto.bairro,
        complemento: createEnderecoDto.complemento,
        cep: createEnderecoDto.cep,
        id_dentista: createEnderecoDto.id_dentista,
      }

    });

  }

  async editarEndereco(id: number, updateEnderecoDto: UpdateEnderecoDto) {

    return this.prisma.endereco.update({

      where: {id},

      data: {

        logradouro: updateEnderecoDto.logradouro,
        cidade: updateEnderecoDto.cidade,
        estado: updateEnderecoDto.estado,
        bairro: updateEnderecoDto.bairro,
        complemento: updateEnderecoDto.complemento,
        cep: updateEnderecoDto.cep,
        id_dentista: updateEnderecoDto.id_dentista,
      }

    });
  }

  removerEndereco(id: number) {
    return this.prisma.endereco.delete({
      where: {id: id}
    })
  }
}
