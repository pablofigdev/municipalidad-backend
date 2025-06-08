import { Injectable, Logger, HttpException, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { Usuario } from '../components/usuarios/entities/usuario.entity';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
    private jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {
    try {
      this.logger.log(`Registrando nuevo usuario: ${registerDto.email}`);
      
      // Verificar si el usuario ya existe
      const usuarioExistente = await this.usuarioRepository.findOne({
        where: { email: registerDto.email }
      });

      if (usuarioExistente) {
        this.logger.warn(`Usuario ya existe: ${registerDto.email}`);
        throw new HttpException(
          'El email ya está registrado',
          HttpStatus.CONFLICT
        );
      }

      // Encriptar contraseña
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(registerDto.password, saltRounds);

      // Crear usuario
      const nuevoUsuario = this.usuarioRepository.create({
        ...registerDto,
        password: hashedPassword,
      });

      const usuarioGuardado = await this.usuarioRepository.save(nuevoUsuario);

      // Remover password de la respuesta
      const { password, ...resultado } = usuarioGuardado;

      this.logger.log(`Usuario registrado exitosamente: ${usuarioGuardado.usuarioID}`);
      return {
        status: 200,
        message: 'Usuario registrado exitosamente',
        data: resultado
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      this.logger.error(`Error al registrar usuario: ${error.message}`);
      throw new HttpException(
        'Error interno del servidor al registrar usuario',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async login(loginDto: LoginDto) {
    try {
      this.logger.log(`Intento de login: ${loginDto.email}`);
      
      // Buscar usuario por email
      const usuario = await this.usuarioRepository.findOne({
        where: { email: loginDto.email }
      });

      if (!usuario) {
        this.logger.warn(`Usuario no encontrado: ${loginDto.email}`);
        throw new HttpException(
          'Credenciales inválidas',
          HttpStatus.UNAUTHORIZED
        );
      }

      // Verificar estado del usuario
      if (usuario.estado !== 'activo') {
        this.logger.warn(`Usuario inactivo o bloqueado: ${loginDto.email}`);
        throw new HttpException(
          'Usuario inactivo o bloqueado',
          HttpStatus.FORBIDDEN
        );
      }

      // Verificar contraseña
      const passwordValida = await bcrypt.compare(loginDto.password, usuario.password);
      if (!passwordValida) {
        this.logger.warn(`Contraseña incorrecta para: ${loginDto.email}`);
        throw new HttpException(
          'Credenciales inválidas',
          HttpStatus.UNAUTHORIZED
        );
      }

      // Actualizar último login
      await this.usuarioRepository.update(usuario.usuarioID, {
        ultimoLogin: new Date()
      });

      // Generar JWT
      const payload = { 
        sub: usuario.usuarioID, 
        email: usuario.email, 
        rol: usuario.rol 
      };
      const accessToken = this.jwtService.sign(payload);

      // Remover password de la respuesta
      const { password, ...usuarioSinPassword } = usuario;

      this.logger.log(`Login exitoso: ${usuario.usuarioID}`);
      return {
        status: 200,
        message: 'Login exitoso',
        data: {
          user: usuarioSinPassword,
          access_token: accessToken,
          token_type: 'Bearer',
          expires_in: '24h'
        }
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      this.logger.error(`Error en login: ${error.message}`);
      throw new HttpException(
        'Error interno del servidor en login',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async validateUser(payload: any) {
    try {
      const usuario = await this.usuarioRepository.findOne({
        where: { usuarioID: payload.sub }
      });

      if (usuario && usuario.estado === 'activo') {
        const { password, ...resultado } = usuario;
        return resultado;
      }
      return null;
    } catch (error) {
      this.logger.error(`Error validando usuario: ${error.message}`);
      return null;
    }
  }

  async getProfile(usuarioID: string) {
    try {
      this.logger.log(`Obteniendo perfil del usuario: ${usuarioID}`);
      
      const usuario = await this.usuarioRepository.findOne({
        where: { usuarioID }
      });

      if (!usuario) {
        throw new HttpException(
          'Usuario no encontrado',
          HttpStatus.NOT_FOUND
        );
      }

      const { password, ...usuarioSinPassword } = usuario;

      return {
        status: 200,
        message: 'Perfil obtenido exitosamente',
        data: usuarioSinPassword
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      this.logger.error(`Error obteniendo perfil: ${error.message}`);
      throw new HttpException(
        'Error interno del servidor',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
} 