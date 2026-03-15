import { Injectable } from '@nestjs/common';
import { CreatePostagemDto } from './dto/create-postagem.dto';
import { UpdatePostagemDto } from './dto/update-postagem.dto';
import { PrismaModule } from 'src/prisma/prisma.module';

@Injectable()
export class PostagemService {
  constructor(private readonly prisma: PrismaModule) {}
  create(createPostagemDto: CreatePostagemDto) {
    return this.prisma.Postagem.create({
      data: { ...createPostagemDto, data: new Date(createPostagemDto.data) },
    });
  }

  findAll() {
    return this.prisma.Postagem.findMany();
  }

  findOne(id: number) {
    return this.prisma.Postagem.findUnique({
      where: { id: id },
    });
  }

  findDentista(id: number) {
    return this.prisma.Postagem.findMany({
      where: { id: id },
    });
  }

  update(id: number, updatePostagemDto: UpdatePostagemDto) {
    return this.prisma.Postagem.update({
      where: { id: id },
      data: updatePostagemDto,
    });
  }

  remove(id: number) {
    return this.prisma.Postagem.delete({
      where: { id: id },
    });
  }
}
