import { Injectable } from '@nestjs/common';
import { CreateOfertaTrabajoDto } from './dto/create-oferta-trabajo.dto';
import { UpdateOfertaTrabajoDto } from './dto/update-oferta-trabajo.dto';

@Injectable()
export class OfertaTrabajoService {
  create(createOfertaTrabajoDto: CreateOfertaTrabajoDto) {
    return 'This action adds a new ofertaTrabajo';
  }

  findAll() {
    return `This action returns all ofertaTrabajo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ofertaTrabajo`;
  }

  update(id: number, updateOfertaTrabajoDto: UpdateOfertaTrabajoDto) {
    return `This action updates a #${id} ofertaTrabajo`;
  }

  remove(id: number) {
    return `This action removes a #${id} ofertaTrabajo`;
  }
}
