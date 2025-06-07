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
    PostulacionModule,
    DocumentoModule,
    UsuariosModule,
    PostulanteModule,
    ComunaModule,
    RegionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
