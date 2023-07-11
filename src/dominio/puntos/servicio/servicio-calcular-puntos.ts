import { Injectable } from '@nestjs/common';

@Injectable()
export class ServicioCalcularPuntos {
  async ejecutar(valorVenta: number, campañaSucursal: object[], campañaComercio: object[], configuracionPuntos: any ) {
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
  }
}