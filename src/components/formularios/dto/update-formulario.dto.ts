import { PartialType } from '@nestjs/mapped-types';
import { CreateFormularioDto } from './create-formulario.dto';

export class UpdateFormularioDto extends PartialType(CreateFormularioDto) {} 