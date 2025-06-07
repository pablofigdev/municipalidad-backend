import { Module } from '@nestjs/common';
import { ProyectoEmpresaService } from './proyecto-empresa.service';
import { ProyectoEmpresaController } from './proyecto-empresa.controller';

@Module({
  controllers: [ProyectoEmpresaController],
  providers: [ProyectoEmpresaService],
})
export class ProyectoEmpresaModule {}
