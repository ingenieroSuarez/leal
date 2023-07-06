import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class sucursal {
  @PrimaryGeneratedColumn()
  idsucursal: number;
  @Column()
  idcomercio: number;
}