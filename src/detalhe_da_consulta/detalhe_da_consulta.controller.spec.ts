import { Test, TestingModule } from '@nestjs/testing';
import { DetalheDaConsultaController } from './detalhe_da_consulta.controller';
import { DetalheDaConsultaService } from './detalhe_da_consulta.service';

describe('DetalheDaConsultaController', () => {
  let controller: DetalheDaConsultaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetalheDaConsultaController],
      providers: [DetalheDaConsultaService],
    }).compile();

    controller = module.get<DetalheDaConsultaController>(DetalheDaConsultaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
