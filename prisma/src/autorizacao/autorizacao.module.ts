import { Module } from '@nestjs/common';
import { AutorizacaoService } from './autorizacao.service';
import { AutorizacaoController } from './autorizacao.controller';

@Module({
  controllers: [AutorizacaoController],
  providers: [AutorizacaoService],
})
export class AutorizacaoModule {}
