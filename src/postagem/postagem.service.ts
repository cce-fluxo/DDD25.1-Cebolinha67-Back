import { Injectable } from '@nestjs/common';
import { CreatePostagemDto } from './dto/create-postagem.dto';
import { UpdatePostagemDto } from './dto/update-postagem.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostagemService {
  constructor(private readonly prisma: PrismaService) {}
  create(createPostagemDto: CreatePostagemDto) {
    return this.prisma.postagem.create({
      data: { ...createPostagemDto, data: new Date(createPostagemDto.data) },
    });
  }

  findAll() {
    return this.prisma.postagem.findMany();
  }

  findOne(id: number) {
    return this.prisma.postagem.findUnique({
      where: { id: id },
    });
  }

  findDentista(id: number) {
    return this.prisma.postagem.findMany({
      where: { id_dentista: id },
    });
  }

  update(id: number, updatePostagemDto: UpdatePostagemDto) {
    return this.prisma.postagem.update({
      where: { id: id },
      data: updatePostagemDto,
    });
  }

  remove(id: number) {
    return this.prisma.postagem.delete({
      where: { id: id },
    });
  }
}
