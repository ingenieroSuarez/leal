import { Controller, Get, Post, Body, UsePipes, Param } from '@nestjs/common';
import { ApiTags, ApiBody } from '@nestjs/swagger';
import { ComandoRegistrarCampaña } from 'src/aplicacion/comercio/comando/registrar-campaña.comando';
import { ManejadorProcesarCampaña } from 'src/aplicacion/comercio/comando/registrar-campaña.manejador';

@ApiTags('Comercio')
@Controller('comercio')

export class ComercioControlador {
    constructor(
      private readonly _manejadorProcesarCampaña: ManejadorProcesarCampaña
    ){}
    @Post('campana')
    @ApiBody({ type: ComandoRegistrarCampaña })
    async crearCampañaComercio(@Body() datosCampaña: ComandoRegistrarCampaña) {
        console.log(datosCampaña);
        await this._manejadorProcesarCampaña.ejecutar(datosCampaña)
      return "crearCampañaComercio"
    }
    @Get('campana:idComercio')
    async listarCampañasDeComercio(@Param('idComercio') idComercio: string) {
        console.log(idComercio);
        return "listarCampañasDeComercio"
    }
    @Post('sucursal/campana')
    async crearCampañaSucursal(@Body() datosVenta: any) {
        console.log(datosVenta);
      return "crearCampañaSucursal"
    }
    @Get('sucursal/campana:idSucursal')
    async listarCampañaSucursal(@Param('idSucursal') idSucursal: string) {
        console.log(idSucursal);
      return "listarCampañaSucursal"
    }
}