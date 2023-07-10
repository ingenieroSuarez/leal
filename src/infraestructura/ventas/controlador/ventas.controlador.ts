import { Controller,  Post, Body, UsePipes } from '@nestjs/common';
import { ApiTags, ApiBody } from '@nestjs/swagger';
import { ComandoRegistrarVenta } from 'src/aplicacion/ventas/comando/registrar-venta.comando';
import { ManejadorProcesarVenta } from 'src/aplicacion/ventas/comando/registrar-venta.manejador';

@ApiTags('Ventas')
@Controller('Ventas')
export class VentasControlador {
  constructor(
    private readonly _manejadorProcesarVenta: ManejadorProcesarVenta
  ){}
    @Post('registrar')
    @ApiBody({ type: ComandoRegistrarVenta })
    async registrarVenta(@Body() datosVenta: ComandoRegistrarVenta) {
      return await this._manejadorProcesarVenta.ejecutar( datosVenta )
    }
}