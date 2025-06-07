import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Postulante } from "../../postulante/entities/postulante.entity";


@Entity()
export class Postulacion {
    @PrimaryColumn({type: 'uuid', default: () => 'uuid_generate_v4()', name: 'postulacion_id'})
    postulacionId:string

    @Column()
    postulanteId:string

    @Column()
    fechaInicio:Date

    @Column()
    fechaFin:Date

    @Column()
    descripcion:string

    @Column()
    estado: boolean

    @ManyToOne(() => Postulante, (postulante) => postulante.postulaciones)
    @JoinColumn({ name: 'postulanteId' })
    postulante: Postulante;
}
