import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ApiTags, ApiBody } from '@nestjs/swagger';
import { ComandoRegistrarCampaña } from 'src/aplicacion/comercio/comando/registrar-campaña.comando';
import { ManejadorProcesarCampaña } from 'src/aplicacion/comercio/comando/registrar-campaña.manejador';
import { ListarCampaña } from 'src/aplicacion/comercio/consulta/listar-campaña';

@ApiTags('Comercio')
@Controller('comercio')
export class ComercioControlador {
    constructor(
      private readonly _manejadorProcesarCampaña: ManejadorProcesarCampaña,
      private readonly _listarCampaña: ListarCampaña
    ){}
    @Post('campana')
    @ApiBody({ type: ComandoRegistrarCampaña })
    async crearCampañaComercio(@Body() datosCampaña: ComandoRegistrarCampaña) {
      return await this._manejadorProcesarCampaña.ejecutar(datosCampaña)
    }

    @Get('campana:idComercio')
    async listarCampañasDeComercio(@Param('idComercio') idComercio: number) {
        return await this._listarCampaña.listarPorComercio(idComercio)
    }
    @Post('sucursal/campana')
    async crearCampañaSucursal(@Body() datosVenta: any) {
        console.log(datosVenta);
      return "crearCampañaSucursal"
    }

    @Get('sucursal/campana:idSucursal')
    async listarCampañaSucursal(@Param('idSucursal') idSucursal: number) {
        return await this._listarCampaña.listarPorSucursal(idSucursal)
    }
}