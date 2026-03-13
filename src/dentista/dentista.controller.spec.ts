import { Test, TestingModule } from '@nestjs/testing';
import { DentistaController } from './dentista.controller';
import { DentistaService } from './dentista.service';

describe('DentistaController', () => {
  let controller: DentistaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DentistaController],
      providers: [DentistaService],
    }).compile();

    controller = module.get<DentistaController>(DentistaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
