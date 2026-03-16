import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ConvenioController } from './convenio.controller';
import { ConvenioService } from './convenio.service';

@Module({
  controllers: [ConvenioController],
  providers: [ConvenioService, PrismaService],
})
export class ConvenioModule {}
