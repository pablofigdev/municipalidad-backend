import { Injectable, Logger, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostulanteDto } from './dto/create-postulante.dto';
import { UpdatePostulanteDto } from './dto/update-postulante.dto';
import { Postulante } from './entities/postulante.entity';

@Injectable()
export class PostulanteService {
  private readonly logger = new Logger(PostulanteService.name);

  constructor(
    @InjectRepository(Postulante)
    private postulanteRepository: Repository<Postulante>,
  ) {}

  async create(createPostulanteDto: CreatePostulanteDto) {
    try {
      this.logger.log('Creando nuevo postulante');
      
      // Verificar si ya existe el RUT
      const existeRUT = await this.postulanteRepository.findOne({
        where: { rut: createPostulanteDto.rut }
      });

      if (existeRUT) {
        this.logger.warn(`RUT ya existe: ${createPostulanteDto.rut}`);
        throw new HttpException(
          'El RUT ya está registrado',
          HttpStatus.CONFLICT
        );
      }

      // Verificar si ya existe el email
      const existeEmail = await this.postulanteRepository.findOne({
        where: { email: createPostulanteDto.email }
      });

      if (existeEmail) {
        this.logger.warn(`Email ya existe: ${createPostulanteDto.email}`);
        throw new HttpException(
          'El email ya está registrado',
          HttpStatus.CONFLICT
        );
      }

      const postulante = this.postulanteRepository.create(createPostulanteDto);
      const resultado = await this.postulanteRepository.save(postulante);
      
      this.logger.log(`Postulante creado con ID: ${resultado.postulanteID}`);
      return {
        status: 200,
        message: 'Postulante creado exitosamente',
        data: resultado
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      this.logger.error(`Error al crear postulante: ${error.message}`);
      throw new HttpException(
        'Error interno del servidor al crear postulante',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async findAll() {
    try {
      this.logger.log('Obteniendo todos los postulantes');
      const postulantes = await this.postulanteRepository.find({
        relations: ['documentos', 'postulaciones'],
        order: { fechaRegistro: 'DESC' }
      });
      
      this.logger.log(`Se encontraron ${postulantes.length} postulantes`);
      return {
        status: 200,
        message: 'Postulantes obtenidos exitosamente',
        count: postulantes.length,
        data: postulantes
      };
    } catch (error) {
      this.logger.error(`Error al obtener postulantes: ${error.message}`);
      throw new HttpException(
        'Error interno del servidor al obtener postulantes',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async findOne(id: string) {
    try {
      this.logger.log(`Buscando postulante con ID: ${id}`);
      const postulante = await this.postulanteRepository.findOne({
        where: { postulanteID: id },
        relations: ['documentos', 'postulaciones']
      });

      if (!postulante) {
        this.logger.warn(`Postulante no encontrado con ID: ${id}`);
        throw new HttpException(
          'Postulante no encontrado',
          HttpStatus.NOT_FOUND
        );
      }

      this.logger.log(`Postulante encontrado: ${id}`);
      return {
        status: 200,
        message: 'Postulante encontrado exitosamente',
        data: postulante
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      this.logger.error(`Error al buscar postulante: ${error.message}`);
      throw new HttpException(
        'Error interno del servidor al buscar postulante',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async update(id: string, updatePostulanteDto: UpdatePostulanteDto) {
    try {
      this.logger.log(`Actualizando postulante con ID: ${id}`);
      
      const postulante = await this.postulanteRepository.findOne({
        where: { postulanteID: id }
      });

      if (!postulante) {
        this.logger.warn(`Postulante no encontrado para actualizar con ID: ${id}`);
        throw new HttpException(
          'Postulante no encontrado',
          HttpStatus.NOT_FOUND
        );
      }

      // Si se actualiza RUT, verificar que no exista en otro postulante
      if (updatePostulanteDto.rut && updatePostulanteDto.rut !== postulante.rut) {
        const existeRUT = await this.postulanteRepository.findOne({
          where: { rut: updatePostulanteDto.rut }
        });

        if (existeRUT) {
          this.logger.warn(`RUT ya existe: ${updatePostulanteDto.rut}`);
          throw new HttpException(
            'El RUT ya está registrado',
            HttpStatus.CONFLICT
          );
        }
      }

      // Si se actualiza email, verificar que no exista en otro postulante
      if (updatePostulanteDto.email && updatePostulanteDto.email !== postulante.email) {
        const existeEmail = await this.postulanteRepository.findOne({
          where: { email: updatePostulanteDto.email }
        });

        if (existeEmail) {
          this.logger.warn(`Email ya existe: ${updatePostulanteDto.email}`);
          throw new HttpException(
            'El email ya está registrado',
            HttpStatus.CONFLICT
          );
        }
      }

      await this.postulanteRepository.update(id, updatePostulanteDto);
      const postulanteActualizado = await this.postulanteRepository.findOne({
        where: { postulanteID: id },
        relations: ['documentos', 'postulaciones']
      });

      this.logger.log(`Postulante actualizado exitosamente: ${id}`);
      return {
        status: 200,
        message: 'Postulante actualizado exitosamente',
        data: postulanteActualizado
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      this.logger.error(`Error al actualizar postulante: ${error.message}`);
      throw new HttpException(
        'Error interno del servidor al actualizar postulante',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async remove(id: string) {
    try {
      this.logger.log(`Eliminando postulante con ID: ${id}`);
      
      const postulante = await this.postulanteRepository.findOne({
        where: { postulanteID: id }
      });

      if (!postulante) {
        this.logger.warn(`Postulante no encontrado para eliminar con ID: ${id}`);
        throw new HttpException(
          'Postulante no encontrado',
          HttpStatus.NOT_FOUND
        );
      }

      await this.postulanteRepository.remove(postulante);
      
      this.logger.log(`Postulante eliminado exitosamente: ${id}`);
      return {
        status: 200,
        message: 'Postulante eliminado exitosamente'
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      this.logger.error(`Error al eliminar postulante: ${error.message}`);
      throw new HttpException(
        'Error interno del servidor al eliminar postulante',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async findByRut(rut: string) {
    try {
      this.logger.log(`Buscando postulante por RUT: ${rut}`);
      const postulante = await this.postulanteRepository.findOne({
        where: { rut },
        relations: ['documentos', 'postulaciones']
      });

      if (!postulante) {
        this.logger.warn(`Postulante no encontrado con RUT: ${rut}`);
        throw new HttpException(
          'Postulante no encontrado',
          HttpStatus.NOT_FOUND
        );
      }

      this.logger.log(`Postulante encontrado por RUT: ${rut}`);
      return {
        status: 200,
        message: 'Postulante encontrado exitosamente',
        data: postulante
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      this.logger.error(`Error al buscar postulante por RUT: ${error.message}`);
      throw new HttpException(
        'Error interno del servidor al buscar postulante por RUT',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async findByEmail(email: string) {
    try {
      this.logger.log(`Buscando postulante por email: ${email}`);
      const postulante = await this.postulanteRepository.findOne({
        where: { email },
        relations: ['documentos', 'postulaciones']
      });

      if (!postulante) {
        this.logger.warn(`Postulante no encontrado con email: ${email}`);
        throw new HttpException(
          'Postulante no encontrado',
          HttpStatus.NOT_FOUND
        );
      }

      this.logger.log(`Postulante encontrado por email: ${email}`);
      return {
        status: 200,
        message: 'Postulante encontrado exitosamente',
        data: postulante
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      this.logger.error(`Error al buscar postulante por email: ${error.message}`);
      throw new HttpException(
        'Error interno del servidor al buscar postulante por email',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async findByEstado(estado: string) {
    try {
      this.logger.log(`Buscando postulantes con estado: ${estado}`);
      const postulantes = await this.postulanteRepository.find({
        where: { estado },
        relations: ['documentos', 'postulaciones'],
        order: { fechaRegistro: 'DESC' }
      });

      this.logger.log(`Se encontraron ${postulantes.length} postulantes con estado: ${estado}`);
      return {
        status: 200,
        message: 'Postulantes por estado obtenidos exitosamente',
        count: postulantes.length,
        data: postulantes
      };
    } catch (error) {
      this.logger.error(`Error al buscar postulantes por estado: ${error.message}`);
      throw new HttpException(
        'Error interno del servidor al buscar postulantes por estado',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  // async findByProfesion(profesion: string) {
  //   try {
  //     this.logger.log(`Buscando postulantes con profesión: ${profesion}`);
  //     const postulantes = await this.postulanteRepository.find({
  //       where: { profesion },
  //       relations: ['documentos', 'postulaciones'],
  //       order: { fechaRegistro: 'DESC' }
  //     });

  //     this.logger.log(`Se encontraron ${postulantes.length} postulantes con profesión: ${profesion}`);
  //     return {
  //       status: 200,
  //       message: 'Postulantes por profesión obtenidos exitosamente',
  //       count: postulantes.length,
  //       data: postulantes
  //     };
  //   } catch (error) {
  //     this.logger.error(`Error al buscar postulantes por profesión: ${error.message}`);
  //     throw new HttpException(
  //       'Error interno del servidor al buscar postulantes por profesión',
  //       HttpStatus.INTERNAL_SERVER_ERROR
  //     );
  //   }
  // }
}
