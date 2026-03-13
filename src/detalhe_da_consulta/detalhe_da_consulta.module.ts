import { Module } from '@nestjs/common';
import { DetalheDaConsultaService } from './detalhe_da_consulta.service';
import { DetalheDaConsultaController } from './detalhe_da_consulta.controller';

@Module({
  controllers: [DetalheDaConsultaController],
  providers: [DetalheDaConsultaService],
})
export class DetalheDaConsultaModule {}
