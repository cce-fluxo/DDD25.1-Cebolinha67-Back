// quem esteve aqui (coloca seu nome smp que entrar pf): motta 

import {Injectable, NotFoundException } from '@nestjs/common';
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
    const usuario = await this.prisma.usuario.findUnique({
      where:{id}
    }); 
    if(!usuario){
      throw new NotFoundException('Usuário não encontrado');
    }
    return usuario;
    // usei uma função pra pegar os dados de um usuário específico, vai dar pra notar esse tipo de lógica ao longo do resto
  }

  async getUsuarios(){

    const usuarios = await this.prisma.usuario.findMany({})
    if(!usuarios.length){
      throw new NotFoundException("Nenhum usuário encontrado")
    }

    return usuarios

    // não preciso passar um argumento, ele já vai listar todos
  }

   async editarDadosUsuario(id:number, updateUsuarioDto:UpdateUsuarioDto){
    const usuario = await this.prisma.usuario.findUnique({
      where: {id}
    })

    if(!usuario){
      throw new NotFoundException("Usuário não encontrado")
    }
    
    return this.prisma.usuario.update({
      where:{id},
      data:updateUsuarioDto
    })
    }

   async atualizarTodosOsDadosUuario(id:number, updateUsuarioDto: UpdateUsuarioDto){

    // primeiro vc vai achar o usuário
    const usuario = await this.prisma.usuario.findUnique({
      where:{id}
    })

    if(!usuario){
      throw new NotFoundException("Usuário não encontrado")
    }

    // depois vai dar update nos dados do paizão
    return this.prisma.usuario.update({
      where:{id},
      data: updateUsuarioDto
    })
   }

   async enviarMensagem(id: number, createUsuarioDto: CreateUsuarioDto){
    const usuarioExistente = await this.prisma.usuario.findUnique({
      where:{id}
    })

    if(!usuarioExistente){
      throw new Error("Usuário não existente")
    }

    return this.prisma.usuario.create({
      data:{
        ...createUsuarioDto,
        data_nascimento: new Date(createUsuarioDto.dt_nascimento)
      }
    })
    }

    // pesquisei essa loucura ai pq ele não queria aceitar data:createUsuarioDto
  }