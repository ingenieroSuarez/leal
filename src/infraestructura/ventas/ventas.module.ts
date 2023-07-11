import { Module } from '@nestjs/common';
import { VentasControlador } from './controlador/ventas.controlador';
import { ManejadorProcesarVenta } from 'src/aplicacion/ventas/comando/procesar-venta.manejador';
import { ServicioProcesarVenta } from 'src/dominio/ventas/servicio/ServicioProcesarVenta';
import { RepositorioVentas } from 'src/dominio/ventas/puerto/repositorio/repositorio-ventas';
import { RepositorioVentasMysql } from './adaptador/repositorio/repositorio-ventas-mysql';
import { PuntosModule } from '../puntos/puntos.module';
import { ComercioModule } from '../comercio/comercio.module';

const repositorioVentas = {
  provide: RepositorioVentas,
  useClass: RepositorioVentasMysql,
};
@Module({
    imports: [
      PuntosModule,
      ComercioModule
    ],
    controllers: [VentasControlador],
    providers:[
      ManejadorProcesarVenta,
      ServicioProcesarVenta,
      repositorioVentas
    ]
  })
  export class VentasModule {}