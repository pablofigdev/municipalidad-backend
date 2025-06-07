import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostulanteService } from './postulante.service';
import { CreatePostulanteDto } from './dto/create-postulante.dto';
import { UpdatePostulanteDto } from './dto/update-postulante.dto';

@Controller('postulante')
export class PostulanteController {
  constructor(private readonly postulanteService: PostulanteService) {}

  @Post()
  create(@Body() createPostulanteDto: CreatePostulanteDto) {
    return this.postulanteService.create(createPostulanteDto);
  }

  @Get()
  findAll() {
    return this.postulanteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postulanteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostulanteDto: UpdatePostulanteDto) {
    return this.postulanteService.update(+id, updatePostulanteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postulanteService.remove(+id);
  }
}
