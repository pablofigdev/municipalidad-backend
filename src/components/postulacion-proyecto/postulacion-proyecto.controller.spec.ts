import { Test, TestingModule } from '@nestjs/testing';
import { PostulacionProyectoController } from './postulacion-proyecto.controller';
import { PostulacionProyectoService } from './postulacion-proyecto.service';

describe('PostulacionProyectoController', () => {
  let controller: PostulacionProyectoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostulacionProyectoController],
      providers: [PostulacionProyectoService],
    }).compile();

    controller = module.get<PostulacionProyectoController>(PostulacionProyectoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
