import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiBody } from '@nestjs/swagger';
import { ComandoConfigurarPuntosLeal } from 'src/aplicacion/puntos/comando/configurar-puntos-leal.comando';

@ApiTags('Puntos')
@Controller('Puntos')
export class PuntosControlador {
  @ApiBody({ type: ComandoConfigurarPuntosLeal })
    @Post('configurar')
    async configurarPuntosLeal(@Body() datosPuntos: ComandoConfigurarPuntosLeal) {
      return datosPuntos
    }
}