import { Module } from '@nestjs/common';
import { EmpleoVacanteService } from './empleo-vacante.service';
import { EmpleoVacanteController } from './empleo-vacante.controller';

@Module({
  controllers: [EmpleoVacanteController],
  providers: [EmpleoVacanteService],
})
export class EmpleoVacanteModule {}
