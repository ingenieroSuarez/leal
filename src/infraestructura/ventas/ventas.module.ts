import { Module } from '@nestjs/common';
import { VentasControlador } from './controlador/ventas.controlador';
import { ManejadorProcesarVenta } from 'src/aplicacion/ventas/comando/registrar-venta.manejador';
import { ServicioProcesarVenta } from 'src/dominio/ventas/servicio/ServicioRegistrarCampaña';

@Module({
    imports: [],
    controllers: [VentasControlador],
    providers:[
      ManejadorProcesarVenta,
      ServicioProcesarVenta
    ]
  })
  export class VentasModule {}