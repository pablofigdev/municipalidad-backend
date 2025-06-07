import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostulacionService } from './postulacion.service';
import { CreatePostulacionDto } from './dto/create-postulacion.dto';
import { UpdatePostulacionDto } from './dto/update-postulacion.dto';
import { Public } from '../../common/decorators/public.decorator';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('postulacion')
@ApiTags('Postulacion')
@Public()
export class PostulacionController {
  constructor(private readonly postulacionService: PostulacionService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una postulación' })
  create(@Body() createPostulacionDto: CreatePostulacionDto) {
    return this.postulacionService.create(createPostulacionDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las postulaciones' })
  findAll() {
    return this.postulacionService.findAll();
  }

  @Get(':postulacionId')
  @ApiOperation({ summary: 'Obtener una postulación por su ID' })
  findOne(@Param('postulacionId') postulacionId: string) {
    return this.postulacionService.findOne(postulacionId);
  }

  @Patch(':postulacionId')
  @ApiOperation({ summary: 'Actualizar una postulación' })
  update(@Param('postulacionId') postulacionId: string, @Body() updatePostulacionDto: UpdatePostulacionDto) {
    return this.postulacionService.update(postulacionId, updatePostulacionDto);
  }

  @Delete(':postulacionId')
  @ApiOperation({ summary: 'Eliminar una postulación' })
  remove(@Param('postulacionId') postulacionId: string) {
    return this.postulacionService.remove(postulacionId);
  }
}
