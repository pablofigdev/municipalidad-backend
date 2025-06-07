import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { CreatePostulacionDto } from './dto/create-postulacion.dto';
import { UpdatePostulacionDto } from './dto/update-postulacion.dto';
import { Postulacion } from './entities/postulacion.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PostulacionService {
  constructor(
    @InjectRepository(Postulacion)
    private postulacionRepository: Repository<Postulacion>,
  ) {}

  async create(createPostulacionDto: CreatePostulacionDto) {
    try {
      const postulacion = this.postulacionRepository.create(createPostulacionDto);
      const savedPostulacion = await this.postulacionRepository.save(postulacion);
      
      return {
        status: 'success',
        message: 'Postulación creada correctamente',
        data: savedPostulacion,
      };
    } catch (error) {
      throw new BadRequestException({
        status: 'error',
        message: 'Error al crear la postulación',
        error: error.message,
      });
    }
  }

  async findAll() {
    try {
      const postulaciones = await this.postulacionRepository.find({
        relations: ['postulante'],
        order: { fechaInicio: 'DESC' },
      });
      
      return {
        status: 'success',
        message: 'Postulaciones obtenidas correctamente',
        data: postulaciones,
        count: postulaciones.length,
      };
    } catch (error) {
      throw new BadRequestException({
        status: 'error',
        message: 'Error al obtener las postulaciones',
        error: error.message,
      });
    }
  }

  async findOne(postulacionId: string) {
    try {
      const postulacion = await this.postulacionRepository.findOne({
        where: { postulacionId },
        relations: ['postulante'],
      });
      
      if (!postulacion) {
        throw new NotFoundException({
          status: 'error',
          message: `Postulación con ID ${postulacionId} no encontrada`,
        });
      }

      return {
        status: 'success',
        message: 'Postulación obtenida correctamente',
        data: postulacion,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new BadRequestException({
        status: 'error',
        message: 'Error al obtener la postulación',
        error: error.message,
      });
    }
  }

  async findByPostulante(postulanteId: string) {
    try {
      const postulaciones = await this.postulacionRepository.find({
        where: { postulanteId },
        relations: ['postulante'],
        order: { fechaInicio: 'DESC' },
      });

      return {
        status: 'success',
        message: `Postulaciones del postulante ${postulanteId} obtenidas correctamente`,
        data: postulaciones,
        count: postulaciones.length,
      };
    } catch (error) {
      throw new BadRequestException({
        status: 'error',
        message: 'Error al obtener las postulaciones por postulante',
        error: error.message,
      });
    }
  }

  async findByEstado(estado: boolean) {
    try {
      const postulaciones = await this.postulacionRepository.find({
        where: { estado },
        relations: ['postulante'],
        order: { fechaInicio: 'DESC' },
      });

      return {
        status: 'success',
        message: `Postulaciones con estado ${estado ? 'activo' : 'inactivo'} obtenidas correctamente`,
        data: postulaciones,
        count: postulaciones.length,
      };
    } catch (error) {
      throw new BadRequestException({
        status: 'error',
        message: 'Error al obtener las postulaciones por estado',
        error: error.message,
      });
    }
  }

  async findActive() {
    try {
      const currentDate = new Date();
      const postulaciones = await this.postulacionRepository
        .createQueryBuilder('postulacion')
        .leftJoinAndSelect('postulacion.postulante', 'postulante')
        .where('postulacion.fechaInicio <= :currentDate', { currentDate })
        .andWhere('postulacion.fechaFin >= :currentDate', { currentDate })
        .andWhere('postulacion.estado = :estado', { estado: true })
        .orderBy('postulacion.fechaInicio', 'DESC')
        .getMany();

      return {
        status: 'success',
        message: 'Postulaciones activas obtenidas correctamente',
        data: postulaciones,
        count: postulaciones.length,
      };
    } catch (error) {
      throw new BadRequestException({
        status: 'error',
        message: 'Error al obtener las postulaciones activas',
        error: error.message,
      });
    }
  }

  async update(postulacionId: string, updatePostulacionDto: UpdatePostulacionDto) {
    try {
      const postulacion = await this.findOne(postulacionId);
      
      await this.postulacionRepository.update(postulacionId, updatePostulacionDto);
      const updatedPostulacion = await this.postulacionRepository.findOne({
        where: { postulacionId },
        relations: ['postulante'],
      });

      return {
        status: 'success',
        message: 'Postulación actualizada correctamente',
        data: updatedPostulacion,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new BadRequestException({
        status: 'error',
        message: 'Error al actualizar la postulación',
        error: error.message,
      });
    }
  }

  async remove(postulacionId: string) {
    try {
      const postulacion = await this.findOne(postulacionId);
      
      await this.postulacionRepository.delete(postulacionId);

      return {
        status: 'success',
        message: 'Postulación eliminada correctamente',
        data: { postulacionId },
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new BadRequestException({
        status: 'error',
        message: 'Error al eliminar la postulación',
        error: error.message,
      });
    }
  }
}
