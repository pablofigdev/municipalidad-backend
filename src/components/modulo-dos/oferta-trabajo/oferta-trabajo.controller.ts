import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OfertaTrabajoService } from './oferta-trabajo.service';
import { CreateOfertaTrabajoDto } from './dto/create-oferta-trabajo.dto';
import { UpdateOfertaTrabajoDto } from './dto/update-oferta-trabajo.dto';

@Controller('oferta-trabajo')
export class OfertaTrabajoController {
  constructor(private readonly ofertaTrabajoService: OfertaTrabajoService) {}

  @Post()
  create(@Body() createOfertaTrabajoDto: CreateOfertaTrabajoDto) {
    return this.ofertaTrabajoService.create(createOfertaTrabajoDto);
  }

  @Get()
  findAll() {
    return this.ofertaTrabajoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ofertaTrabajoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOfertaTrabajoDto: UpdateOfertaTrabajoDto) {
    return this.ofertaTrabajoService.update(+id, updateOfertaTrabajoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ofertaTrabajoService.remove(+id);
  }
}
