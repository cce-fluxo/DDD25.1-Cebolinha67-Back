import { Injectable } from '@nestjs/common';
import { CreateDentistaDto } from './dto/create-dentista.dto';
import { UpdateDentistaDto } from './dto/update-dentista.dto';

@Injectable()
export class DentistaService {
  create(createDentistaDto: CreateDentistaDto) {
    return 'This action adds a new dentista';
  }

  findAll() {
    return `This action returns all dentista`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dentista`;
  }

  update(id: number, updateDentistaDto: UpdateDentistaDto) {
    return `This action updates a #${id} dentista`;
  }

  remove(id: number) {
    return `This action removes a #${id} dentista`;
  }
}
