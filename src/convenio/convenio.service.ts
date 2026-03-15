import { Injectable } from '@nestjs/common';
import { CreateConvenioDto } from './dto/create-convenio.dto';
import { UpdateConvenioDto } from './dto/update-convenio.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ConvenioService {
  constructor(private prisma: PrismaService) {}
  create(createConvenioDto: CreateConvenioDto) {
    return 'This action adds a new convenio';
  }

  findAll() {
    return `This action returns all convenio`;
  }

  findOne(id: number) {
    return `This action returns a #${id} convenio`;
  }

  findPaciente(id: number) {
    return `This action returns the paciente of convenio #${id}`;
  }

  update(id: number, updateConvenioDto: UpdateConvenioDto) {
    return `This action updates a #${id} convenio`;
  }

  remove(id: number) {
    return `This action removes a #${id} convenio`;
  }
}
