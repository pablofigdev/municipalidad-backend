import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentoService } from './documento.service';
import { DocumentoController } from './documento.controller';
import { Documento } from './entities/documento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Documento])],
  controllers: [DocumentoController],
  providers: [DocumentoService],
  exports: [DocumentoService, TypeOrmModule],
})
export class DocumentoModule {}
