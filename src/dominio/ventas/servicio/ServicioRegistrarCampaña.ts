import { Injectable } from '@nestjs/common';
import { ComandoRegistrarVenta } from 'src/aplicacion/ventas/comando/registrar-venta.comando';

@Injectable()
export class ServicioProcesarVenta {
  //constructor(    private readonly _repositorioCampaña: RepositorioCampaña,  ) {}
  async ejecutar(datosVenta: ComandoRegistrarVenta) {
    return datosVenta
  }
}