import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Empresa {
  @PrimaryGeneratedColumn()
  empresaID: number;

  // Información básica de la empresa
  @Column({ length: 255 })
  razonSocial: string;

  @Column({ length: 12, unique: true })
  rutEmpresa: string;

  @Column({ length: 100 })
  giroComercial: string;

  @Column({ length: 100 })
  rubro: string;

  // Información de contacto
  @Column({ length: 255 })
  direccion: string;

  @Column()
  comunaID: number;

  @Column()
  regionID: number;

  @Column({ length: 15 })
  telefono: string;

  @Column({ length: 100, unique: true })
  email: string;

  @Column({ length: 255, nullable: true })
  sitioWeb: string;

  // Representante legal
  @Column({ length: 100 })
  representanteLegal: string;

  @Column({ length: 12 })
  rutRepresentante: string;

  @Column({ length: 100 })
  emailRepresentante: string;

  @Column({ length: 15 })
  telefonoRepresentante: string;
}
