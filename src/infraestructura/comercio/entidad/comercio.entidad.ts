import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class comercio {
  @PrimaryGeneratedColumn()
  idcomercio: number;
  @Column()
  nombre: string;
}