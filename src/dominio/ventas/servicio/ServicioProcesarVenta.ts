import { Injectable } from '@nestjs/common';
import { ComandoProcesarVenta } from 'src/aplicacion/ventas/comando/procesar-venta.comando';
import { RepositorioVentas } from '../puerto/repositorio/repositorio-ventas';
import { DaoPuntos } from 'src/dominio/puntos/puerto/dao/dao-puntos';
import { ServicioListarCampaña } from 'src/dominio/comercio/servicio/ServicioListarCampaña';
import { RepositorioPuntos } from 'src/dominio/puntos/puerto/repositorio/repositorio-puntos';
import { ServicioCalcularPuntos } from 'src/dominio/puntos/servicio/servicio-calcular-puntos';


@Injectable()
export class ServicioProcesarVenta {
  constructor(
      private readonly _repositorioVentas: RepositorioVentas,
      private readonly _daoPuntos: DaoPuntos,
      private readonly _servicioListarCampaña: ServicioListarCampaña,
      private readonly _repositorioPuntos: RepositorioPuntos,
      private readonly _servicioCalcularPuntos: ServicioCalcularPuntos
    )
    {}

    async ejecutar(datosVenta: ComandoProcesarVenta) {
      const idComercio= datosVenta.idComercio;
      const idSucursal = datosVenta.idSucursal;
      const valorVenta= datosVenta.valorVenta;
      const idUsuario= datosVenta.idUsuario 
      const campañaSucursal = await this._servicioListarCampaña.listarSucursal( idSucursal );
      const campañaComercio = await this._servicioListarCampaña.listarComercio( idComercio );
      if(!campañaComercio && !campañaSucursal ) return "NO HAY CAMPAÑA";
      const configuracionPuntos = await this._daoPuntos.listarConfiguracionPuntosComercio(idComercio);
      if( configuracionPuntos ){
        const puntos= await this._servicioCalcularPuntos.ejecutar(valorVenta, campañaSucursal, campañaComercio, configuracionPuntos)
        await this._repositorioPuntos.guardar(puntos, idUsuario );
      }
      const configuracionCashBack = "  IMPLEMENTAR....";
      if( configuracionCashBack ){
        this.calcularCashback(valorVenta, campañaSucursal, campañaComercio, configuracionCashBack);
      } 
      return await this._repositorioVentas.registrar(datosVenta);
    };

    private calcularCashback(valorVenta: number, campañaSucursal: any, campañaComercio: any, configuracionCashBack: any){
      return true;
    }
}