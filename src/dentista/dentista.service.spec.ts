import { Test, TestingModule } from '@nestjs/testing';
import { DentistaService } from './dentista.service';

describe('DentistaService', () => {
  let service: DentistaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DentistaService],
    }).compile();

    service = module.get<DentistaService>(DentistaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
