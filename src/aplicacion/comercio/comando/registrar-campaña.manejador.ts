import { Injectable } from '@nestjs/common';
import { ComandoRegistrarCampaña } from './registrar-campaña.comando';
import { ServicioRegistrarCampaña } from 'src/dominio/comercio/servicio/ServicioRegistrarCampaña';

@Injectable()
export class ManejadorProcesarCampaña {
  constructor(private _servicioRegistrarCampaña: ServicioRegistrarCampaña) {}

  async ejecutar(comandoRegistrarCampaña: ComandoRegistrarCampaña) {
    await this._servicioRegistrarCampaña.ejecutar(comandoRegistrarCampaña);
  }
}