import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DocumentoEmpresaService } from './documento-empresa.service';
import { CreateDocumentoEmpresaDto } from './dto/create-documento-empresa.dto';
import { UpdateDocumentoEmpresaDto } from './dto/update-documento-empresa.dto';

@Controller('documento-empresa')
export class DocumentoEmpresaController {
  constructor(private readonly documentoEmpresaService: DocumentoEmpresaService) {}

  @Post()
  create(@Body() createDocumentoEmpresaDto: CreateDocumentoEmpresaDto) {
    return this.documentoEmpresaService.create(createDocumentoEmpresaDto);
  }

  @Get()
  findAll() {
    return this.documentoEmpresaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.documentoEmpresaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDocumentoEmpresaDto: UpdateDocumentoEmpresaDto) {
    return this.documentoEmpresaService.update(+id, updateDocumentoEmpresaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.documentoEmpresaService.remove(+id);
  }
}
