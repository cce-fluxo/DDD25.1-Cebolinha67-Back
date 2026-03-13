import { Test, TestingModule } from '@nestjs/testing';
import { AutorizacaoController } from './autorizacao.controller';
import { AutorizacaoService } from './autorizacao.service';

describe('AutorizacaoController', () => {
  let controller: AutorizacaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AutorizacaoController],
      providers: [AutorizacaoService],
    }).compile();

    controller = module.get<AutorizacaoController>(AutorizacaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
