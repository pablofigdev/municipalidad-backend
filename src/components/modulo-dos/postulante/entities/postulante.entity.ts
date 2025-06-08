import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn } from 'typeorm';
import { DocumentoPostulante } from '../../documento-postulante/entities/documento-postulante.entity';
import { OfertaPostulante } from '../../oferta-postulante/entities/oferta-postulante.entity';

@Entity()
export class Postulante {
    @PrimaryGeneratedColumn('uuid')
    postulanteID: string;

    @Column({ type: 'varchar', length: 100 })
    nombres: string;

    @Column({ type: 'varchar', length: 100 })
    apellidoPaterno: string;

    @Column({ type: 'varchar', length: 100 })
    apellidoMaterno: string;

    @Column({ type: 'varchar', length: 12, unique: true })
    rut: string;

    @Column({ type: 'varchar', length: 100, unique: true })
    email: string;

    @Column({ type: 'varchar', length: 20, nullable: true })
    telefono: string;

    @Column({ type: 'date', nullable: true })
    fechaNacimiento: Date;

    @Column({ type: 'varchar', length: 10, nullable: true })
    genero: string; // masculino, femenino, otro

    @Column({ type: 'varchar', length: 100, nullable: true })
    nacionalidad: string;

    @Column({ type: 'varchar', length: 100, nullable: true })
    region: string;

    @Column({ type: 'varchar', length: 100, nullable: true })
    comuna: string;

    @Column({ type: 'text', nullable: true })
    direccion: string;

    @Column({ type: 'varchar', length: 100, nullable: true })
    nivelEducacion: string; // básica, media, técnico, universitario, postgrado

    @Column({ type: 'varchar', length: 255, nullable: true })
    profesion: string;

    @Column({ type: 'varchar', length: 100, nullable: true })
    experienciaLaboral: string; // sin experiencia, 1-2 años, 3-5 años, 5+ años

    @Column({ type: 'text', nullable: true })
    habilidades: string;

    @Column({ type: 'text', nullable: true })
    idiomas: string;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
    pretensionSalarial: number;

    @Column({ type: 'varchar', length: 100, nullable: true })
    disponibilidad: string; // inmediata, 1 semana, 2 semanas, 1 mes

    @Column({ type: 'varchar', length: 100, nullable: true })
    modalidadPreferida: string; // presencial, remoto, híbrido, cualquiera

    @Column({ type: 'varchar', length: 100, nullable: true })
    jornadaPreferida: string; // completa, media jornada, por turnos, cualquiera

    @Column({ type: 'enum', enum: ['activo', 'inactivo', 'pausado'], default: 'activo' })
    estado: string;

    @Column({ type: 'text', nullable: true })
    sobreMi: string;

    @Column({ type: 'boolean', default: false })
    servicioMilitarCompleto: boolean;

    @CreateDateColumn()
    fechaRegistro: Date;

    // Relaciones
    @OneToMany(() => DocumentoPostulante, (documento) => documento.postulante)
    documentos: DocumentoPostulante[];

    @OneToMany(() => OfertaPostulante, (ofertaPostulante) => ofertaPostulante.postulante)
    postulaciones: OfertaPostulante[];
}
