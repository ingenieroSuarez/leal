import { Injectable } from '@nestjs/common';
import { ComandoProcesarVenta  } from './procesar-venta.comando';
import { ServicioProcesarVenta } from 'src/dominio/ventas/servicio/ServicioProcesarVenta';

@Injectable()
export class ManejadorProcesarVenta {
  constructor(private _servicioprocesarVenta: ServicioProcesarVenta) {}

  async ejecutar(datosVenta: ComandoProcesarVenta) {
   return this._servicioprocesarVenta.ejecutar(datosVenta);
  }
}