import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmpleoVacanteService } from './empleo-vacante.service';
import { CreateEmpleoVacanteDto } from './dto/create-empleo-vacante.dto';
import { UpdateEmpleoVacanteDto } from './dto/update-empleo-vacante.dto';

@Controller('empleo-vacante')
export class EmpleoVacanteController {
  constructor(private readonly empleoVacanteService: EmpleoVacanteService) {}

  @Post()
  create(@Body() createEmpleoVacanteDto: CreateEmpleoVacanteDto) {
    return this.empleoVacanteService.create(createEmpleoVacanteDto);
  }

  @Get()
  findAll() {
    return this.empleoVacanteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.empleoVacanteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmpleoVacanteDto: UpdateEmpleoVacanteDto) {
    return this.empleoVacanteService.update(+id, updateEmpleoVacanteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.empleoVacanteService.remove(+id);
  }
}
