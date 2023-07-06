import { IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ComandoConfigurarPuntosLeal {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: 1 })
  public idComercio: number;

  @IsNumber()
  @ApiProperty({ example: 50000 })
  public valorCompra: number;

  @IsNumber()
  @ApiProperty({ example: 1 })
  public puntosLeal: number;
}