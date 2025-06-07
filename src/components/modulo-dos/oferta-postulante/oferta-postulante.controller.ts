import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OfertaPostulanteService } from './oferta-postulante.service';
import { CreateOfertaPostulanteDto } from './dto/create-oferta-postulante.dto';
import { UpdateOfertaPostulanteDto } from './dto/update-oferta-postulante.dto';

@Controller('oferta-postulante')
export class OfertaPostulanteController {
  constructor(private readonly ofertaPostulanteService: OfertaPostulanteService) {}

  @Post()
  create(@Body() createOfertaPostulanteDto: CreateOfertaPostulanteDto) {
    return this.ofertaPostulanteService.create(createOfertaPostulanteDto);
  }

  @Get()
  findAll() {
    return this.ofertaPostulanteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ofertaPostulanteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOfertaPostulanteDto: UpdateOfertaPostulanteDto) {
    return this.ofertaPostulanteService.update(+id, updateOfertaPostulanteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ofertaPostulanteService.remove(+id);
  }
}
