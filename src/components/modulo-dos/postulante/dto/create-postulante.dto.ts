import { IsString, IsOptional, IsNotEmpty, IsEmail, IsEnum, IsNumber, IsBoolean, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreatePostulanteDto {
    @ApiProperty({ description: 'Nombres del postulante' })
    @IsString()
    @IsNotEmpty()
    nombres: string;

    @ApiProperty({ description: 'Apellido paterno' })
    @IsString()
    @IsNotEmpty()
    apellidoPaterno: string;

    @ApiProperty({ description: 'Apellido materno' })
    @IsString()
    @IsNotEmpty()
    apellidoMaterno: string;

    @ApiProperty({ description: 'RUT del postulante', example: '12345678-9' })
    @IsString()
    @IsNotEmpty()
    rut: string;

    @ApiProperty({ description: 'Email del postulante' })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({ description: 'Teléfono del postulante', required: false })
    @IsString()
    @IsOptional()
    telefono?: string;

    @ApiProperty({ description: 'Fecha de nacimiento', required: false })
    @IsDate()
    @Type(() => Date)
    @IsOptional()
    fechaNacimiento?: Date;

    @ApiProperty({ description: 'Género', enum: ['masculino', 'femenino', 'otro'], required: false })
    @IsString()
    @IsOptional()
    genero?: string;

    @ApiProperty({ description: 'Nacionalidad', required: false })
    @IsString()
    @IsOptional()
    nacionalidad?: string;

    @ApiProperty({ description: 'Región', required: false })
    @IsString()
    @IsOptional()
    region?: string;

    @ApiProperty({ description: 'Comuna', required: false })
    @IsString()
    @IsOptional()
    comuna?: string;

    @ApiProperty({ description: 'Dirección', required: false })
    @IsString()
    @IsOptional()
    direccion?: string;

    @ApiProperty({ description: 'Nivel de educación', enum: ['básica', 'media', 'técnico', 'universitario', 'postgrado'], required: false })
    @IsString()
    @IsOptional()
    nivelEducacion?: string;

    @ApiProperty({ description: 'Profesión', required: false })
    @IsString()
    @IsOptional()
    profesion?: string;

    @ApiProperty({ description: 'Experiencia laboral', enum: ['sin experiencia', '1-2 años', '3-5 años', '5+ años'], required: false })
    @IsString()
    @IsOptional()
    experienciaLaboral?: string;

    @ApiProperty({ description: 'Habilidades', required: false })
    @IsString()
    @IsOptional()
    habilidades?: string;

    @ApiProperty({ description: 'Idiomas', required: false })
    @IsString()
    @IsOptional()
    idiomas?: string;

    @ApiProperty({ description: 'Pretensión salarial', required: false })
    @IsNumber()
    @IsOptional()
    pretensionSalarial?: number;

    @ApiProperty({ description: 'Disponibilidad', enum: ['inmediata', '1 semana', '2 semanas', '1 mes'], required: false })
    @IsString()
    @IsOptional()
    disponibilidad?: string;

    @ApiProperty({ description: 'Modalidad preferida', enum: ['presencial', 'remoto', 'híbrido', 'cualquiera'], required: false })
    @IsString()
    @IsOptional()
    modalidadPreferida?: string;

    @ApiProperty({ description: 'Jornada preferida', enum: ['completa', 'media jornada', 'por turnos', 'cualquiera'], required: false })
    @IsString()
    @IsOptional()
    jornadaPreferida?: string;

    @ApiProperty({ description: 'Estado del postulante', enum: ['activo', 'inactivo', 'pausado'], required: false, default: 'activo' })
    @IsEnum(['activo', 'inactivo', 'pausado'])
    @IsOptional()
    estado?: string;

    @ApiProperty({ description: 'Información personal sobre el postulante', required: false })
    @IsString()
    @IsOptional()
    sobreMi?: string;

    @ApiProperty({ description: 'Servicio militar completo', default: false, required: false })
    @IsBoolean()
    @IsOptional()
    servicioMilitarCompleto?: boolean;
}
