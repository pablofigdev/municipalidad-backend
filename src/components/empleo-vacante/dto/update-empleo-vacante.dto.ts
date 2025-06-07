import { PartialType } from '@nestjs/swagger';
import { CreateEmpleoVacanteDto } from './create-empleo-vacante.dto';

export class UpdateEmpleoVacanteDto extends PartialType(CreateEmpleoVacanteDto) {}
