import { IsDateString, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ComandoRegistrarCampaña {
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

  @IsNumber()
  @ApiProperty({ example: 1 })
  public cashBackLeal: number;

  @IsNotEmpty()
  @IsDateString()
  @ApiProperty({ type: Date })
  public fechaInicio: Date;

  @IsNotEmpty()
  @IsDateString()
  @ApiProperty({ type: Date })
  public fechaFin: Date;
}