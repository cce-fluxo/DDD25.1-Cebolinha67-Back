import { Test, TestingModule } from '@nestjs/testing';
import { AutorizacaoService } from './autorizacao.service';

describe('AutorizacaoService', () => {
  let service: AutorizacaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AutorizacaoService],
    }).compile();

    service = module.get<AutorizacaoService>(AutorizacaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
