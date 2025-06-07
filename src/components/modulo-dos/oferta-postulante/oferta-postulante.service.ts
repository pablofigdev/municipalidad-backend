import { Injectable } from '@nestjs/common';
import { CreateOfertaPostulanteDto } from './dto/create-oferta-postulante.dto';
import { UpdateOfertaPostulanteDto } from './dto/update-oferta-postulante.dto';

@Injectable()
export class OfertaPostulanteService {
  create(createOfertaPostulanteDto: CreateOfertaPostulanteDto) {
    return 'This action adds a new ofertaPostulante';
  }

  findAll() {
    return `This action returns all ofertaPostulante`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ofertaPostulante`;
  }

  update(id: number, updateOfertaPostulanteDto: UpdateOfertaPostulanteDto) {
    return `This action updates a #${id} ofertaPostulante`;
  }

  remove(id: number) {
    return `This action removes a #${id} ofertaPostulante`;
  }
}
