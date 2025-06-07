import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProyectoEmpresaService } from './proyecto-empresa.service';
import { CreateProyectoEmpresaDto } from './dto/create-proyecto-empresa.dto';
import { UpdateProyectoEmpresaDto } from './dto/update-proyecto-empresa.dto';

@Controller('proyecto-empresa')
export class ProyectoEmpresaController {
  constructor(private readonly proyectoEmpresaService: ProyectoEmpresaService) {}

  @Post()
  create(@Body() createProyectoEmpresaDto: CreateProyectoEmpresaDto) {
    return this.proyectoEmpresaService.create(createProyectoEmpresaDto);
  }

  @Get()
  findAll() {
    return this.proyectoEmpresaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.proyectoEmpresaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProyectoEmpresaDto: UpdateProyectoEmpresaDto) {
    return this.proyectoEmpresaService.update(+id, updateProyectoEmpresaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.proyectoEmpresaService.remove(+id);
  }
}
