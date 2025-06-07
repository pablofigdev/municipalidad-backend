import { Test, TestingModule } from '@nestjs/testing';
import { EmpleoVacanteService } from './empleo-vacante.service';

describe('EmpleoVacanteService', () => {
  let service: EmpleoVacanteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmpleoVacanteService],
    }).compile();

    service = module.get<EmpleoVacanteService>(EmpleoVacanteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
