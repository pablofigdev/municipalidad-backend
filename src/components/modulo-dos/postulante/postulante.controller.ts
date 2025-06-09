import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { PostulanteService } from './postulante.service';
import { CreatePostulanteDto } from './dto/create-postulante.dto';
import { UpdatePostulanteDto } from './dto/update-postulante.dto';
import { Public } from 'src/common/decorators/public.decorator';

@ApiTags('public')
@Public()
@Controller('postulante')
export class PostulanteController {
  constructor(private readonly postulanteService: PostulanteService) {}

  @Post('/crear-postulante')
  @ApiOperation({ summary: 'Crear nuevo postulante' })
  @ApiResponse({ status: 200, description: 'Postulante creado exitosamente' })
  @ApiResponse({ status: 409, description: 'RUT o email ya registrado' })
  create(@Body() createPostulanteDto: CreatePostulanteDto) {
    return this.postulanteService.create(createPostulanteDto);
  }

  @Get() 
  @ApiOperation({ summary: 'Obtener todos los postulantes' })
  @ApiResponse({ status: 200, description: 'Postulantes obtenidos exitosamente' })
  findAll() {
    return this.postulanteService.findAll();
  }

  @Get('rut/:rut')
  @ApiOperation({ summary: 'Buscar postulante por RUT' })
  @ApiResponse({ status: 200, description: 'Postulante encontrado exitosamente' })
  @ApiResponse({ status: 404, description: 'Postulante no encontrado' })
  findByRut(@Param('rut') rut: string) {
    return this.postulanteService.findByRut(rut);
  }

  @Get('email/:email')
  @ApiOperation({ summary: 'Buscar postulante por email' })
  @ApiResponse({ status: 200, description: 'Postulante encontrado exitosamente' })
  @ApiResponse({ status: 404, description: 'Postulante no encontrado' })
  findByEmail(@Param('email') email: string) {
    return this.postulanteService.findByEmail(email);
  }

  @Get('estado/:estado')
  @ApiOperation({ summary: 'Buscar postulantes por estado' })
  @ApiResponse({ status: 200, description: 'Postulantes filtrados exitosamente' })
  findByEstado(@Param('estado') estado: string) {
    return this.postulanteService.findByEstado(estado);
  }

  // @Get('profesion/:profesion')
  // @ApiOperation({ summary: 'Buscar postulantes por profesión' })
  // @ApiResponse({ status: 200, description: 'Postulantes filtrados exitosamente' })
  // findByProfesion(@Param('profesion') profesion: string) {
  //   return this.postulanteService.findByProfesion(profesion);
  // }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener postulante por ID' })
  @ApiResponse({ status: 200, description: 'Postulante encontrado exitosamente' })
  @ApiResponse({ status: 404, description: 'Postulante no encontrado' })
  findOne(@Param('id') id: string) {
    return this.postulanteService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar postulante' })
  @ApiResponse({ status: 200, description: 'Postulante actualizado exitosamente' })
  @ApiResponse({ status: 404, description: 'Postulante no encontrado' })
  @ApiResponse({ status: 409, description: 'RUT o email ya registrado' })
  update(@Param('id') id: string, @Body() updatePostulanteDto: UpdatePostulanteDto) {
    return this.postulanteService.update(id, updatePostulanteDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar postulante' })
  @ApiResponse({ status: 200, description: 'Postulante eliminado exitosamente' })
  @ApiResponse({ status: 404, description: 'Postulante no encontrado' })
  remove(@Param('id') id: string) {
    return this.postulanteService.remove(id);
  }
}
