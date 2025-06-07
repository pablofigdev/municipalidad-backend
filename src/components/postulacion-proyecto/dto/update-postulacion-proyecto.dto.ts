import { PartialType } from '@nestjs/swagger';
import { CreatePostulacionProyectoDto } from './create-postulacion-proyecto.dto';

export class UpdatePostulacionProyectoDto extends PartialType(CreatePostulacionProyectoDto) {}
