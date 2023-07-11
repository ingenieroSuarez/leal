import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class configuracion_puntos {
  @PrimaryGeneratedColumn()
  idconfiguracion_puntos: number;
  @Column()
  idcomercio: number;
  @Column()
  valor_compra: number;
  @Column()
  puntos_por_Compra: number;
}