import { Injectable } from '@nestjs/common';
import { CreatePostulacionProyectoDto } from './dto/create-postulacion-proyecto.dto';
import { UpdatePostulacionProyectoDto } from './dto/update-postulacion-proyecto.dto';

@Injectable()
export class PostulacionProyectoService {
  create(createPostulacionProyectoDto: CreatePostulacionProyectoDto) {
    return 'This action adds a new postulacionProyecto';
  }

  findAll() {
    return `This action returns all postulacionProyecto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} postulacionProyecto`;
  }

  update(id: number, updatePostulacionProyectoDto: UpdatePostulacionProyectoDto) {
    return `This action updates a #${id} postulacionProyecto`;
  }

  remove(id: number) {
    return `This action removes a #${id} postulacionProyecto`;
  }
}
