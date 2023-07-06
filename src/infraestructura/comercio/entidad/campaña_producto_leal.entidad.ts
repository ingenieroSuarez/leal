import { Entity, Column, PrimaryColumn, ManyToOne, OneToMany } from 'typeorm';
import { campaña } from "./campaña.entidad";

@Entity()
export class campaña_producto_leal {
  @PrimaryColumn()
  campaña_idcampaña: number;
  @PrimaryColumn()
  idproductos_leal: string;

}