import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostulacionModule } from './components/postulacion/postulacion.module';
import { DocumentoModule } from './components/documento/documento.module';
import { UsuariosModule } from './components/usuarios/usuarios.module';
import { PostulanteModule } from './components/postulante/postulante.module';
import { ComunaModule } from './components/comuna/comuna.module';
import { RegionModule } from './components/region/region.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { databaseConfig } from './config/database.config';
import { DatabaseModule } from './database/database.module';
import { EmpresaModule } from './proyectos/components/empresa/empresa.module';
import { DocumentoEmpresaModule } from './components/documento-empresa/documento-empresa.module';
import { ProyectoModule } from './components/proyecto/proyecto.module';
import { EmpleoVacanteModule } from './components/empleo-vacante/empleo-vacante.module';
import { PostulacionProyectoModule } from './components/postulacion-proyecto/postulacion-proyecto.module';
import { EmpresaModule } from './components/empresa/empresa.module';
import { EmpresaModule } from './components/empresa/empresa/empresa.module';
import { ProyectoModule } from './components/empresa/proyecto/proyecto.module';
import { DocumentoEmpresaModule } from './components/empresa/documento-empresa/documento-empresa.module';
import { ProyectoEmpresaModule } from './components/empresa/proyecto-empresa/proyecto-empresa.module';
import { DocumentoEmpresaModule } from './components/modulo-uno/documento-empresa/documento-empresa.module';
import { EmpresaModule } from './components/modulo-uno/empresa/empresa.module';
import { ProyectoModule } from './components/modulo-uno/proyecto/proyecto.module';
import { ProyectoEmpresaModule } from './components/modulo-uno/proyecto-empresa/proyecto-empresa.module';
import { OfertaTrabajoModule } from './components/modulo-dos/oferta-trabajo/oferta-trabajo.module';
import { PostulanteModule } from './components/modulo-dos/postulante/postulante.module';
import { DocumentoPostulanteModule } from './components/modulo-dos/documento-postulante/documento-postulante.module';
import { OfertaPostulanteModule } from './components/modulo-dos/oferta-postulante/oferta-postulante.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig],
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => configService.get('database'),
      inject: [ConfigService],
    }),
    DatabaseModule,
    PostulacionModule,
    DocumentoModule,
    UsuariosModule,
    PostulanteModule,
    ComunaModule,
    RegionModule,
    EmpresaModule,
    DocumentoEmpresaModule,
    ProyectoModule,
    EmpleoVacanteModule,
    PostulacionProyectoModule,
    ProyectoEmpresaModule,
    OfertaTrabajoModule,
    DocumentoPostulanteModule,
    OfertaPostulanteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
