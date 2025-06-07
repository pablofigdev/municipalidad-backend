import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Documento } from '../../documento/entities/documento.entity';
import { Postulacion } from 'src/components/postulacion/entities/postulacion.entity';

@Entity()
export class Postulante {
  @PrimaryGeneratedColumn()
  postulanteID: number;

  @Column()
  nombre: string;

  @Column()
  apellidoPaterno: string;

  @Column()
  apellidoMaterno: string;

  @Column()
  rut: string;

  @Column()
  email: string;

  @Column()
  region: string;

  @Column()
  comuna: string;

  @Column()
  direccion: string;

  @Column()
  telefono: string;

  @Column()
  estado: string;

  @Column({nullable: true})
  profesion: string;

  @Column({nullable: true})
  experiencia: string;

  @Column({nullable: true})
  fechaIngreso: Date;


  @OneToMany(() => Documento, (documento) => documento.postulante)
  documentos: Documento[];

  @OneToMany(() => Postulacion, (postulacion) => postulacion.postulante)
  postulaciones: Postulacion[];
}
