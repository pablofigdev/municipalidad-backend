import { Injectable } from '@nestjs/common';
import { CreatePostulanteDto } from './dto/create-postulante.dto';
import { UpdatePostulanteDto } from './dto/update-postulante.dto';

@Injectable()
export class PostulanteService {
  create(createPostulanteDto: CreatePostulanteDto) {
    return 'This action adds a new postulante';
  }

  findAll() {
    return `This action returns all postulante`;
  }

  findOne(id: number) {
    return `This action returns a #${id} postulante`;
  }

  update(id: number, updatePostulanteDto: UpdatePostulanteDto) {
    return `This action updates a #${id} postulante`;
  }

  remove(id: number) {
    return `This action removes a #${id} postulante`;
  }
}
