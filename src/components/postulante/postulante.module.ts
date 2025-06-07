import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostulanteService } from './postulante.service';
import { PostulanteController } from './postulante.controller';
import { Postulante } from './entities/postulante.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Postulante])],
  controllers: [PostulanteController],
  providers: [PostulanteService],
  exports: [PostulanteService, TypeOrmModule],
})
export class PostulanteModule {}
