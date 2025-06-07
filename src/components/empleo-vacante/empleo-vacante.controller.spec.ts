import { Test, TestingModule } from '@nestjs/testing';
import { EmpleoVacanteController } from './empleo-vacante.controller';
import { EmpleoVacanteService } from './empleo-vacante.service';

describe('EmpleoVacanteController', () => {
  let controller: EmpleoVacanteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmpleoVacanteController],
      providers: [EmpleoVacanteService],
    }).compile();

    controller = module.get<EmpleoVacanteController>(EmpleoVacanteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
