import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ComandoProcesarVenta {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: 1 })
  public idComercio: number;

  @IsNumber()
  @ApiProperty({ example: 1 })
  public idSucursal: number;
  @IsNumber()
  @ApiProperty({ example: 50000 })
  public valorVenta: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: "123456" })
  public idUsuario: string;
}