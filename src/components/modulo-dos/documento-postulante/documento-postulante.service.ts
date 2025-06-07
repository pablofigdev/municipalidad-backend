import { Injectable } from '@nestjs/common';
import { CreateDocumentoPostulanteDto } from './dto/create-documento-postulante.dto';
import { UpdateDocumentoPostulanteDto } from './dto/update-documento-postulante.dto';

@Injectable()
export class DocumentoPostulanteService {
  create(createDocumentoPostulanteDto: CreateDocumentoPostulanteDto) {
    return 'This action adds a new documentoPostulante';
  }

  findAll() {
    return `This action returns all documentoPostulante`;
  }

  findOne(id: number) {
    return `This action returns a #${id} documentoPostulante`;
  }

  update(id: number, updateDocumentoPostulanteDto: UpdateDocumentoPostulanteDto) {
    return `This action updates a #${id} documentoPostulante`;
  }

  remove(id: number) {
    return `This action removes a #${id} documentoPostulante`;
  }
}
