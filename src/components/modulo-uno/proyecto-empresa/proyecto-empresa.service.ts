import { Injectable } from '@nestjs/common';
import { CreateProyectoEmpresaDto } from './dto/create-proyecto-empresa.dto';
import { UpdateProyectoEmpresaDto } from './dto/update-proyecto-empresa.dto';

@Injectable()
export class ProyectoEmpresaService {
  create(createProyectoEmpresaDto: CreateProyectoEmpresaDto) {
    return 'This action adds a new proyectoEmpresa';
  }

  findAll() {
    return `This action returns all proyectoEmpresa`;
  }

  findOne(id: number) {
    return `This action returns a #${id} proyectoEmpresa`;
  }

  update(id: number, updateProyectoEmpresaDto: UpdateProyectoEmpresaDto) {
    return `This action updates a #${id} proyectoEmpresa`;
  }

  remove(id: number) {
    return `This action removes a #${id} proyectoEmpresa`;
  }
}
