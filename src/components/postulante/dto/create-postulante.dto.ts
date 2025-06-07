import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class CreatePostulanteDto {


  @ApiProperty({ description: 'Nombre del postulante' })
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @ApiProperty({ description: 'Apellido paterno del postulante' })
  @IsString()
  @IsNotEmpty()
  apellidoPaterno: string;

  @ApiProperty({ description: 'Apellido materno del postulante' })
  @IsString()
  @IsNotEmpty()
  apellidoMaterno: string;

  @ApiProperty({ description: 'Rut del postulante' })
  @IsString()
  @IsNotEmpty()
  rut: string;

  @ApiProperty({ description: 'Email del postulante' })
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ description: 'Region del postulante' })
  @IsString()
  @IsNotEmpty()
  region: string;

  @ApiProperty({ description: 'Comuna del postulante' })
  @IsString()
  @IsNotEmpty()
  comuna: string;

  @ApiProperty({ description: 'Dirección del postulante' })
  @IsString()
  @IsNotEmpty()
  direccion: string;

  @ApiProperty({ description: 'Teléfono del postulante' })
  @IsString()
  @IsNotEmpty()
  telefono: string;

  @ApiProperty({ description: 'Estado del postulante' })
  @IsString()
  @IsNotEmpty()
  estado: string;

  @ApiProperty({ description: 'Profesión del postulante' })
  @IsString()
  @IsNotEmpty()
  profesion: string;

  @ApiProperty({ description: 'Experiencia del postulante' })
  @IsString()
  @IsNotEmpty()
  experiencia: string;

  @ApiProperty({ description: 'Fecha de ingreso del postulante' })
  @IsDate()
  @IsNotEmpty()
  fechaIngreso: Date;




}
