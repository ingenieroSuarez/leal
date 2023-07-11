import { Injectable } from '@nestjs/common';
import { ComandoProcesarVenta } from 'src/aplicacion/ventas/comando/procesar-venta.comando';
import { RepositorioVentas } from '../puerto/repositorio/repositorio-ventas';
import { DaoPuntos } from 'src/dominio/puntos/puerto/dao/dao-puntos';
import { ServicioListarCampaña } from 'src/dominio/comercio/servicio/ServicioListarCampaña';
import { RepositorioPuntos } from 'src/dominio/puntos/puerto/repositorio/repositorio-puntos';


@Injectable()
export class ServicioProcesarVenta {
  constructor(
      private readonly _repositorioVentas: RepositorioVentas,
      private readonly _daoPuntos: DaoPuntos,
      private readonly _servicioListarCampaña: ServicioListarCampaña,
      private readonly _repositorioPuntos: RepositorioPuntos
    )
    {}

    async ejecutar(datosVenta: ComandoProcesarVenta) {
      const idComercio= datosVenta.idComercio;
      const idSucursal = datosVenta.idSucursal;
      const valorVenta= datosVenta.valorVenta
      const campañaSucursal = await this._servicioListarCampaña.listarSucursal( idSucursal );
      const campañaComercio = await this._servicioListarCampaña.listarComercio( idComercio );
      if(!campañaComercio && !campañaSucursal ) return "NO HAY CAMPAÑA";
      const configuracionPuntos = await this._daoPuntos.listarConfiguracionPuntosComercio(idComercio);
      if( configuracionPuntos ){
        const puntos= this.calcularPuntos(valorVenta, campañaSucursal, campañaComercio, configuracionPuntos);
        await this._repositorioPuntos.guardar(puntos, datosVenta.idUsuario )
      }
      const configuracionCashBack = "  IMPLEMENTAR....";
      if( configuracionCashBack ) this.calcularCashback(valorVenta, campañaSucursal, campañaComercio, configuracionCashBack);
      return await this._repositorioVentas.registrar(datosVenta);
    };
    private calcularPuntos(valorVenta: number, campañaSucursal: object[], campañaComercio: object[], configuracionPuntos: any ){
      let puntosCompra=0;
      const fecha=new Date();
      if( valorVenta > configuracionPuntos.valor_compra){
        const conversionPuntos =  valorVenta / configuracionPuntos.valor_compra;
        puntosCompra = Math.floor(conversionPuntos);
      }
      let campaña= campañaSucursal.find((campaña)=>{
        return (
          valorVenta==campaña['valor_compra'],
          fecha >= campaña['fecha_inicio'],
          fecha <= campaña['fecha_final']
        )
      });
      if(campaña){
        puntosCompra=puntosCompra*campaña['multiplicador_puntos']
        return puntosCompra;
      }
      campaña= campañaComercio.find((campaña)=>{
        return (
          valorVenta==campaña['valor_compra'],
          fecha >= campaña['fecha_inicio'],
          fecha <= campaña['fecha_final']
        )
      });
      if(campaña){
        puntosCompra=puntosCompra*campaña['multiplicador_puntos']
        return puntosCompra;
      }
    };

    private calcularCashback(valorVenta: number, campañaSucursal: any, campañaComercio: any, configuracionCashBack: any){
      return true;
    }


}