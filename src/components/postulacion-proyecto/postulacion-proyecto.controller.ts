import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostulacionProyectoService } from './postulacion-proyecto.service';
import { CreatePostulacionProyectoDto } from './dto/create-postulacion-proyecto.dto';
import { UpdatePostulacionProyectoDto } from './dto/update-postulacion-proyecto.dto';

@Controller('postulacion-proyecto')
export class PostulacionProyectoController {
  constructor(private readonly postulacionProyectoService: PostulacionProyectoService) {}

  @Post()
  create(@Body() createPostulacionProyectoDto: CreatePostulacionProyectoDto) {
    return this.postulacionProyectoService.create(createPostulacionProyectoDto);
  }

  @Get()
  findAll() {
    return this.postulacionProyectoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postulacionProyectoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostulacionProyectoDto: UpdatePostulacionProyectoDto) {
    return this.postulacionProyectoService.update(+id, updatePostulacionProyectoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postulacionProyectoService.remove(+id);
  }
}
