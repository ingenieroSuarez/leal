import { Injectable } from '@nestjs/common';
import { ComandoProcesarVenta } from 'src/aplicacion/ventas/comando/procesar-venta.comando';
import { RepositorioVentas } from '../puerto/repositorio/repositorio-ventas';
import { DaoPuntos } from 'src/dominio/puntos/puerto/dao/dao-puntos';
import { ServicioListarCampaña } from 'src/dominio/comercio/servicio/ServicioListarCampaña';


@Injectable()
export class ServicioProcesarVenta {
  constructor(
      private readonly _repositorioVentas: RepositorioVentas,
      private readonly _daoPuntos: DaoPuntos,
      private readonly _servicioListarCampaña: ServicioListarCampaña
    )
    {}

    async ejecutar(datosVenta: ComandoProcesarVenta) {
      const idComercio= datosVenta.idComercio;
      const idSucursal = datosVenta.idSucursal
      const campañaSucursal= await this._servicioListarCampaña.listarSucursal( idSucursal );
      const campañaComercio= await this._servicioListarCampaña.listarComercio( idComercio );
      if(!campañaComercio && !campañaSucursal ) return "NO HAY CAMPAÑA";
      const configuracionPuntos= await this._daoPuntos.listarConfiguracionPuntosComercio(idComercio);
      const configuracionCashBack="IMPLEMENTAR...."
      if(!configuracionPuntos && !configuracionCashBack) return "NO HAY PRODUCTOS LEAL CONFIGURADOS";
      if( datosVenta.valorVenta < configuracionPuntos.valor_compra ) return "COMPRA NO SUMA PUNTOS";
      let conversionPuntos = datosVenta.valorVenta / configuracionPuntos.valor_compra;
      const puntosCompra = Math.floor(conversionPuntos);
      console.log(puntosCompra, configuracionCashBack);
      conversionPuntos = configuracionPuntos.puntos_por_compra;
      return await this._repositorioVentas.registrar(datosVenta);

    }
    private multiplicadorDePuntos(){
      return true;
    }
    private multiplicadorDeCashback(){
      return true;
    }


}