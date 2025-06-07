import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn()
    usuarioID: number;

    @Column()
    nombre: string;
    
    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    rol: string;

    @Column()
    estado: string;

    @Column()
    fechaCreacion: Date;
}
