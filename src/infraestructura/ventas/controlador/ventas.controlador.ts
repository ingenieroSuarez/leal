import { Controller,  Post, Body } from '@nestjs/common';
import { ApiTags, ApiBody } from '@nestjs/swagger';
import { ComandoProcesarVenta } from 'src/aplicacion/ventas/comando/procesar-venta.comando';
import { ManejadorProcesarVenta } from 'src/aplicacion/ventas/comando/procesar-venta.manejador';

@ApiTags('Ventas')
@Controller('Ventas')
export class VentasControlador {
  constructor(
    private readonly _manejadorProcesarVenta: ManejadorProcesarVenta
  ){}
    @Post('registrar')
    @ApiBody({ type: ComandoProcesarVenta })
    async registrarVenta(@Body() datosVenta: ComandoProcesarVenta) {
      return await this._manejadorProcesarVenta.ejecutar( datosVenta )
    }
}