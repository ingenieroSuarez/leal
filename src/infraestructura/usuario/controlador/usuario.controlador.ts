import { Controller, Get, Post, Body, UsePipes, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Usuario')
@Controller('usuario')
export class UsuarioControlador {
    //constructor(){}
    @Post('puntos')
    async redimirPuntos(@Body() datosVenta: any) {
        console.log(datosVenta);
      return "crearCampañaComercio"
    }
    @Post('cashback')
    async redimirCashback(@Body() datosVenta: any) {
        console.log(datosVenta);
      return "crearCampañaComercio"
    }
}