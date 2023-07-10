import { Injectable } from '@nestjs/common';
import { ComandoRegistrarVenta  } from './registrar-venta.comando';
import { ServicioProcesarVenta } from 'src/dominio/ventas/servicio/ServicioProcesarVenta';

@Injectable()
export class ManejadorProcesarVenta {
  constructor(private _servicioprocesarVenta: ServicioProcesarVenta) {}

  async ejecutar(datosVenta: ComandoRegistrarVenta) {
   return this._servicioprocesarVenta.ejecutar(datosVenta)
  }
}