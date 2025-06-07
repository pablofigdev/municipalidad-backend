import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DocumentoPostulanteService } from './documento-postulante.service';
import { CreateDocumentoPostulanteDto } from './dto/create-documento-postulante.dto';
import { UpdateDocumentoPostulanteDto } from './dto/update-documento-postulante.dto';

@Controller('documento-postulante')
export class DocumentoPostulanteController {
  constructor(private readonly documentoPostulanteService: DocumentoPostulanteService) {}

  @Post()
  create(@Body() createDocumentoPostulanteDto: CreateDocumentoPostulanteDto) {
    return this.documentoPostulanteService.create(createDocumentoPostulanteDto);
  }

  @Get()
  findAll() {
    return this.documentoPostulanteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.documentoPostulanteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDocumentoPostulanteDto: UpdateDocumentoPostulanteDto) {
    return this.documentoPostulanteService.update(+id, updateDocumentoPostulanteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.documentoPostulanteService.remove(+id);
  }
}
