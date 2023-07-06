import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class campaña {
  @PrimaryGeneratedColumn()
  idCampaña: number;
  @Column()
  idsucursal: number;
  @Column()
  idcomercio: number;
  @Column()
  fecha_inicio: Date;
  @Column()
  fecha_final: Date;
  @Column({ type: 'float' })
  multiplicador_puntos: number;
  @Column({ type: 'float' })
  multiplicador_cashback:number;
  @Column()
  valor_compra: number;
}