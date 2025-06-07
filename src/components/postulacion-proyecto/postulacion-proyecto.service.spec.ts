import { Test, TestingModule } from '@nestjs/testing';
import { PostulacionProyectoService } from './postulacion-proyecto.service';

describe('PostulacionProyectoService', () => {
  let service: PostulacionProyectoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostulacionProyectoService],
    }).compile();

    service = module.get<PostulacionProyectoService>(PostulacionProyectoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
