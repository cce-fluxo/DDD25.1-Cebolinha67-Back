import { Module } from '@nestjs/common';
import { DentistaService } from './dentista.service';
import { DentistaController } from './dentista.controller';

@Module({
  controllers: [DentistaController],
  providers: [DentistaService],
})
export class DentistaModule {}
