import { Test, TestingModule } from '@nestjs/testing';
import { PacienteService } from './paciente.service';
import { describe, beforeEach, it, expect } from '@jest/globals';

describe('PacienteService', () => {
  let service: PacienteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PacienteService],
    }).compile();

    service = module.get<PacienteService>(PacienteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

