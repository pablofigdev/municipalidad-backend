import { Entity,  Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Postulante } from '../../postulante/entities/postulante.entity';

@Entity()
export class Documento {
  @PrimaryGeneratedColumn('uuid')
  documentoID: string;

  @Column()
  postulanteID: number;

  @Column()
  nombreArchivo: string;

  @Column()
  tipoArchivo: string;

  @Column({type: 'text'})
  contenido: string;

  @Column()
  fechaSubida: Date;

  @ManyToOne(() => Postulante, (postulante) => postulante.documentos)
  postulante: Postulante;

}
