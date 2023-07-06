import { IsDateString, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ComandoRegistrarCampaña {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: 1 })
  public idComercio: number;

  @IsNumber()
  @ApiProperty({ example: 1 })
  public idSucursal: number;
  @IsNumber()
  @ApiProperty({ example: 50000 })
  public valorCompra: number;

  @IsNumber()
  @ApiProperty({ example: 0.30 })
  public multiplicadorPuntosLeal: number;

  @IsNumber()
  @ApiProperty({ example: 0 })
  public multiplicadorCashback: number;

  @IsNotEmpty()
  @IsDateString()
  @ApiProperty({ type: Date })
  public fechaInicio: Date;

  @IsNotEmpty()
  @IsDateString()
  @ApiProperty({ type: Date })
  public fechaFin: Date;
}