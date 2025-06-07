import { Module } from '@nestjs/common';
import { PostulacionProyectoService } from './postulacion-proyecto.service';
import { PostulacionProyectoController } from './postulacion-proyecto.controller';

@Module({
  controllers: [PostulacionProyectoController],
  providers: [PostulacionProyectoService],
})
export class PostulacionProyectoModule {}
