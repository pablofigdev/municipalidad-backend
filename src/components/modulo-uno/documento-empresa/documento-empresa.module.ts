import { Module } from '@nestjs/common';
import { DocumentoEmpresaService } from './documento-empresa.service';
import { DocumentoEmpresaController } from './documento-empresa.controller';

@Module({
  controllers: [DocumentoEmpresaController],
  providers: [DocumentoEmpresaService],
})
export class DocumentoEmpresaModule {}
