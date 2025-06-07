import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostulanteDto } from './dto/create-postulante.dto';
import { UpdatePostulanteDto } from './dto/update-postulante.dto';
import { Postulante } from './entities/postulante.entity';

@Injectable()
export class PostulanteService {
  constructor(
    @InjectRepository(Postulante)
    private postulanteRepository: Repository<Postulante>,
  ) {}

  async create(createPostulanteDto: CreatePostulanteDto) {
    try {
      const postulante = this.postulanteRepository.create(createPostulanteDto);
      const savedPostulante = await this.postulanteRepository.save(postulante);
      
      return {
        status: 'success',
        message: 'Postulante creado correctamente',
        data: savedPostulante,
      };
    } catch (error) {
      throw new BadRequestException({
        status: 'error',
        message: 'Error al crear el postulante',
        error: error.message,
      });
    }
  }

  async findAll() {
    try {
      const postulantes = await this.postulanteRepository.find({
        relations: ['documentos'],
        order: { postulanteID: 'ASC' },
      });
      
      return {
        status: 'success',
        message: 'Postulantes obtenidos correctamente',
        data: postulantes,
        count: postulantes.length,
      };
    } catch (error) {
      throw new BadRequestException({
        status: 'error',
        message: 'Error al obtener los postulantes',
        error: error.message,
      });
    }
  }

  async findOne(postulanteID: number) {
    try {
      const postulante = await this.postulanteRepository.findOne({
        where: { postulanteID },
        relations: ['documentos'],
      });
      
      if (!postulante) {
        throw new NotFoundException({
          status: 'error',
          message: `Postulante con ID ${postulanteID} no encontrado`,
        });
      }

      return {
        status: 'success',
        message: 'Postulante obtenido correctamente',
        data: postulante,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new BadRequestException({
        status: 'error',
        message: 'Error al obtener el postulante',
        error: error.message,
      });
    }
  }

  async findByRut(rut: string) {
    try {
      const postulante = await this.postulanteRepository.findOne({
        where: { rut },
        relations: ['documentos'],
      });

      if (!postulante) {
        throw new NotFoundException({
          status: 'error',
          message: `Postulante con RUT ${rut} no encontrado`,
        });
      }

      return {
        status: 'success',
        message: 'Postulante obtenido correctamente',
        data: postulante,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new BadRequestException({
        status: 'error',
        message: 'Error al obtener el postulante por RUT',
        error: error.message,
      });
    }
  }

  async findByEstado(estado: string) {
    try {
      const postulantes = await this.postulanteRepository.find({
        where: { estado },
        relations: ['documentos'],
        order: { fechaIngreso: 'DESC' },
      });

      return {
        status: 'success',
        message: `Postulantes con estado ${estado} obtenidos correctamente`,
        data: postulantes,
        count: postulantes.length,
      };
    } catch (error) {
      throw new BadRequestException({
        status: 'error',
        message: 'Error al obtener los postulantes por estado',
        error: error.message,
      });
    }
  }

  async update(postulanteID: number, updatePostulanteDto: UpdatePostulanteDto) {
    try {
      const postulante = await this.findOne(postulanteID);
      
      await this.postulanteRepository.update(postulanteID, updatePostulanteDto);
      const updatedPostulante = await this.postulanteRepository.findOne({
        where: { postulanteID },
        relations: ['documentos'],
      });

      return {
        status: 'success',
        message: 'Postulante actualizado correctamente',
        data: updatedPostulante,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new BadRequestException({
        status: 'error',
        message: 'Error al actualizar el postulante',
        error: error.message,
      });
    }
  }

  async remove(postulanteID: number) {
    try {
      const postulante = await this.findOne(postulanteID);
      
      await this.postulanteRepository.delete(postulanteID);

      return {
        status: 'success',
        message: 'Postulante eliminado correctamente',
        data: { postulanteID },
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new BadRequestException({
        status: 'error',
        message: 'Error al eliminar el postulante',
        error: error.message,
      });
    }
  }
}
