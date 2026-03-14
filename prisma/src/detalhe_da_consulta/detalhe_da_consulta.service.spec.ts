import { Test, TestingModule } from '@nestjs/testing';
import { DetalheDaConsultaService } from './detalhe_da_consulta.service';

describe('DetalheDaConsultaService', () => {
  let service: DetalheDaConsultaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetalheDaConsultaService],
    }).compile();

    service = module.get<DetalheDaConsultaService>(DetalheDaConsultaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
