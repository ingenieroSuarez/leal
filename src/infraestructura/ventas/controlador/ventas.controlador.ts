import { Controller, Get, Post, Body, UsePipes, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Ventas')
@Controller('Ventas')
export class VentasControlador {
    //constructor(){}
    @Post('registrar')
    async registrarVenta(@Body() datosVenta: any) {
        console.log(datosVenta);
      return "crearCampañaComercio"
    }
}