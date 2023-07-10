import { Controller,  Post, Body, UsePipes } from '@nestjs/common';
import { ApiTags, ApiBody } from '@nestjs/swagger';
import { ComandoRegistrarVenta } from 'src/aplicacion/ventas/comando/registrar-venta.comando';

@ApiTags('Ventas')
@Controller('Ventas')
export class VentasControlador {

    @Post('registrar')
    @ApiBody({ type: ComandoRegistrarVenta })
    async registrarVenta(@Body() datosVenta: ComandoRegistrarVenta) {
      return datosVenta
    }
}