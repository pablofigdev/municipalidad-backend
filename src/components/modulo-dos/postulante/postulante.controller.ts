import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { PostulanteService } from './postulante.service';
import { CreatePostulanteDto } from './dto/create-postulante.dto';
import { UpdatePostulanteDto } from './dto/update-postulante.dto';
import { Public } from 'src/common/decorators/public.decorator';

@ApiTags('')
@Public()
@Controller('postulante')
export class PostulanteController {
  constructor(private readonly postulanteService: PostulanteService) {}

  @Post()
  @ApiOperation({ summary: 'Crear nuevo postulante' })
  @ApiResponse({ status: 200, description: 'Postulante creado exitosamente' })
  create(@Body() createPostulanteDto: CreatePostulanteDto) {
    return this.postulanteService.create(createPostulanteDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los postulantes' })
  @ApiResponse({ status: 200, description: 'Postulantes obtenidos exitosamente' })
  findAll() {
    return this.postulanteService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener postulante por ID' })
  @ApiResponse({ status: 200, description: 'Postulante encontrado exitosamente' })
  @ApiResponse({ status: 404, description: 'Postulante no encontrado' })
  findOne(@Param('id') id: number) {
    return this.postulanteService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar postulante' })
  @ApiResponse({ status: 200, description: 'Postulante actualizado exitosamente' })
  @ApiResponse({ status: 404, description: 'Postulante no encontrado' })
  update(@Param('id') id: number, @Body() updatePostulanteDto: UpdatePostulanteDto) {
    return this.postulanteService.update(id, updatePostulanteDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar postulante' })
  @ApiResponse({ status: 200, description: 'Postulante eliminado exitosamente' })
  @ApiResponse({ status: 404, description: 'Postulante no encontrado' })
  remove(@Param('id') id: number) {
    return this.postulanteService.remove(id);
  }
}
