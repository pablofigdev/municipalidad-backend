import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDocumentoDto } from './dto/create-documento.dto';
import { UpdateDocumentoDto } from './dto/update-documento.dto';
import { Documento } from './entities/documento.entity';

@Injectable()
export class DocumentoService {
  constructor(
    @InjectRepository(Documento)
    private documentoRepository: Repository<Documento>,
  ) {}

  async create(createDocumentoDto: CreateDocumentoDto) {
    try {
      const documento = this.documentoRepository.create({
        ...createDocumentoDto,
        fechaSubida: new Date(),
      });
      const savedDocumento = await this.documentoRepository.save(documento);
      
      return {
        status: 'success',
        message: 'Documento creado correctamente',
        data: savedDocumento,
      };
    } catch (error) {
      throw new BadRequestException({
        status: 'error',
        message: 'Error al crear el documento',
        error: error.message,
      });
    }
  }

  async findAll() {
    try {
      const documentos = await this.documentoRepository.find({
        relations: ['postulante'],
        order: { fechaSubida: 'DESC' },
      });
      
      return {
        status: 'success',
        message: 'Documentos obtenidos correctamente',
        data: documentos,
        count: documentos.length,
      };
    } catch (error) {
      throw new BadRequestException({
        status: 'error',
        message: 'Error al obtener los documentos',
        error: error.message,
      });
    }
  }

  async findOne(documentoID: string) {
    try {
      const documento = await this.documentoRepository.findOne({
        where: { documentoID },
        relations: ['postulante'],
      });
      
      if (!documento) {
        throw new NotFoundException({
          status: 'error',
          message: `Documento con ID ${documentoID} no encontrado`,
        });
      }

      return {
        status: 'success',
        message: 'Documento obtenido correctamente',
        data: documento,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new BadRequestException({
        status: 'error',
        message: 'Error al obtener el documento',
        error: error.message,
      });
    }
  }

  async findByPostulante(postulanteID: number) {
    try {
      const documentos = await this.documentoRepository.find({
        where: { postulanteID },
        relations: ['postulante'],
        order: { fechaSubida: 'DESC' },
      });

      return {
        status: 'success',
        message: `Documentos del postulante ${postulanteID} obtenidos correctamente`,
        data: documentos,
        count: documentos.length,
      };
    } catch (error) {
      throw new BadRequestException({
        status: 'error',
        message: 'Error al obtener los documentos por postulante',
        error: error.message,
      });
    }
  }

  async findByTipoArchivo(tipoArchivo: string) {
    try {
      const documentos = await this.documentoRepository.find({
        where: { tipoArchivo },
        relations: ['postulante'],
        order: { fechaSubida: 'DESC' },
      });

      return {
        status: 'success',
        message: `Documentos de tipo ${tipoArchivo} obtenidos correctamente`,
        data: documentos,
        count: documentos.length,
      };
    } catch (error) {
      throw new BadRequestException({
        status: 'error',
        message: 'Error al obtener los documentos por tipo',
        error: error.message,
      });
    }
  }

  async update(documentoID: string, updateDocumentoDto: UpdateDocumentoDto) {
    try {
      const documento = await this.findOne(documentoID);
      
      await this.documentoRepository.update(documentoID, updateDocumentoDto);
      const updatedDocumento = await this.documentoRepository.findOne({
        where: { documentoID },
        relations: ['postulante'],
      });

      return {
        status: 'success',
        message: 'Documento actualizado correctamente',
        data: updatedDocumento,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new BadRequestException({
        status: 'error',
        message: 'Error al actualizar el documento',
        error: error.message,
      });
    }
  }

  async remove(documentoID: string) {
    try {
      const documento = await this.findOne(documentoID);
      
      await this.documentoRepository.delete(documentoID);

      return {
        status: 'success',
        message: 'Documento eliminado correctamente',
        data: { documentoID },
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new BadRequestException({
        status: 'error',
        message: 'Error al eliminar el documento',
        error: error.message,
      });
    }
  }
}
