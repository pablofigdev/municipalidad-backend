import { Injectable } from '@nestjs/common';
import { CreateDocumentoEmpresaDto } from './dto/create-documento-empresa.dto';
import { UpdateDocumentoEmpresaDto } from './dto/update-documento-empresa.dto';

@Injectable()
export class DocumentoEmpresaService {
  create(createDocumentoEmpresaDto: CreateDocumentoEmpresaDto) {
    return 'This action adds a new documentoEmpresa';
  }

  findAll() {
    return `This action returns all documentoEmpresa`;
  }

  findOne(id: number) {
    return `This action returns a #${id} documentoEmpresa`;
  }

  update(id: number, updateDocumentoEmpresaDto: UpdateDocumentoEmpresaDto) {
    return `This action updates a #${id} documentoEmpresa`;
  }

  remove(id: number) {
    return `This action removes a #${id} documentoEmpresa`;
  }
}
