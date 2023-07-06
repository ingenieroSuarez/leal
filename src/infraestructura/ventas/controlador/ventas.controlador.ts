import { Controller,  Post, Body, UsePipes } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Ventas')
@Controller('Ventas')
export class VentasControlador {
  
    @Post('registrar')
    async registrarVenta(@Body() datosVenta: any) {
        console.log(datosVenta);
      return "registrarVenta"
    }
}