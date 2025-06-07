import { Module } from '@nestjs/common';
import { DocumentoPostulanteService } from './documento-postulante.service';
import { DocumentoPostulanteController } from './documento-postulante.controller';

@Module({
  controllers: [DocumentoPostulanteController],
  providers: [DocumentoPostulanteService],
})
export class DocumentoPostulanteModule {}
