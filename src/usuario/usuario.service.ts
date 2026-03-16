// quem esteve aqui (coloca seu nome smp que entrar pf): motta 

import {Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';

// aqui no service, vou fazer as funções que estão listadas na nossa tabela de configuração dos endpoints no lucid chart, na ordem em que elas aparecem lá, obviamente vou manter a ordem no controller

// e vou usar camelCase no nome das funções, além de dar prioridade a escrever em pt

// vou tentar explicar ao máximo o que eu fizer rpzd

// usar this.prisma.usuario

// funções uteis (prov vou colar isso em todos kkkk) : findUnique , findMany , update , create

@Injectable()
export class UsuarioService {
  constructor(private readonly prisma: PrismaService){}

   async getDados(id:number){
    return this.prisma.usuario.findUnique({
      where:{id}
    }); 

    // usei uma função pra pegar os dados de um usuário específico, vai dar pra notar esse tipo de lógica ao longo do resto
  }

  async getUsuarios(){

    return this.prisma.usuario.findMany({})

    // não preciso passar um argumento, ele já vai listar todos
  }

   async editarDadosUsuario(id:number, updateUsuarioDto:UpdateUsuarioDto){
    return this.prisma.usuario.update({
      where:{id},
      data: updateUsuarioDto // lembrar desse data 
    });
  }

   async atualizarTodosOsDadosUuario(id:number, updateUsuarioDto: UpdateUsuarioDto){
    // vai ser a mesma coisa da de cima

    return this.prisma.usuario.update({
      where:{id},
      data:updateUsuarioDto
    })
  }

   async enviarMensagem(id: number, createUsuarioDto: CreateUsuarioDto){
    return this.prisma.usuario.create({
      data: {
        ...createUsuarioDto,
        data_nascimento: new Date(createUsuarioDto.dt_nascimento)
      } 
    });

    // pesquisei essa loucura ai pq ele não queria aceitar data:createUsuarioDto
  }

}