import { Comuna } from '../../components/comuna/entities/comuna.entity';

export const comunaSeedData: Partial<Comuna>[] = [
  // Región Metropolitana (16)
  { comunaId: 1, nombre: 'Santiago', regionId: 16 },
  { comunaId: 2, nombre: 'Las Condes', regionId: 16 },
  { comunaId: 3, nombre: 'Providencia', regionId: 16 },
  { comunaId: 4, nombre: 'Ñuñoa', regionId: 16 },
  { comunaId: 5, nombre: 'Maipú', regionId: 16 },
  { comunaId: 6, nombre: 'La Florida', regionId: 16 },
  
  // Región de Valparaíso (5)
  { comunaId: 7, nombre: 'Valparaíso', regionId: 5 },
  { comunaId: 8, nombre: 'Viña del Mar', regionId: 5 },
  { comunaId: 9, nombre: 'Quilpué', regionId: 5 },
  
  // Región del Biobío (9)
  { comunaId: 10, nombre: 'Concepción', regionId: 9 },
  { comunaId: 11, nombre: 'Talcahuano', regionId: 9 },
  { comunaId: 12, nombre: 'Chillán', regionId: 9 },
  
  // Región de La Araucanía (10)
  { comunaId: 13, nombre: 'Temuco', regionId: 10 },
  { comunaId: 14, nombre: 'Padre las Casas', regionId: 10 },
  
  // Región de Los Lagos (12)
  { comunaId: 15, nombre: 'Puerto Montt', regionId: 12 },
  { comunaId: 16, nombre: 'Osorno', regionId: 12 },
]; 