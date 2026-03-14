import { Injectable } from '@nestjs/common';
import { CreateAutorizacaoDto } from './dto/create-autorizacao.dto';
import { UpdateAutorizacaoDto } from './dto/update-autorizacao.dto';

@Injectable()
export class AutorizacaoService {
  create(createAutorizacaoDto: CreateAutorizacaoDto) {
    return 'This action adds a new autorizacao';
  }

  findAll() {
    return `This action returns all autorizacao`;
  }

  findOne(id: number) {
    return `This action returns a #${id} autorizacao`;
  }

  update(id: number, updateAutorizacaoDto: UpdateAutorizacaoDto) {
    return `This action updates a #${id} autorizacao`;
  }

  remove(id: number) {
    return `This action removes a #${id} autorizacao`;
  }
}
