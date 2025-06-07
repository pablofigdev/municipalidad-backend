import { Module } from '@nestjs/common';
import { PostulanteService } from './postulante.service';
import { PostulanteController } from './postulante.controller';

@Module({
  controllers: [PostulanteController],
  providers: [PostulanteService],
})
export class PostulanteModule {}
