import { Injectable } from '@nestjs/common';
import { CreateEmpleoVacanteDto } from './dto/create-empleo-vacante.dto';
import { UpdateEmpleoVacanteDto } from './dto/update-empleo-vacante.dto';

@Injectable()
export class EmpleoVacanteService {
  create(createEmpleoVacanteDto: CreateEmpleoVacanteDto) {
    return 'This action adds a new empleoVacante';
  }

  findAll() {
    return `This action returns all empleoVacante`;
  }

  findOne(id: number) {
    return `This action returns a #${id} empleoVacante`;
  }

  update(id: number, updateEmpleoVacanteDto: UpdateEmpleoVacanteDto) {
    return `This action updates a #${id} empleoVacante`;
  }

  remove(id: number) {
    return `This action removes a #${id} empleoVacante`;
  }
}
