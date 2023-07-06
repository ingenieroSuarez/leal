import { Injectable } from '@nestjs/common';
import { ServicioListarCampaña } from 'src/dominio/comercio/servicio/ServicioListarCampaña';

@Injectable()
export class ListarCampaña {
  constructor(private _servicioListarCampaña: ServicioListarCampaña) {}

  async listarPorComercio(idComercio: number) {
    return await this._servicioListarCampaña.listarComercio(idComercio);
  }
  async listarPorSucursal(idSucursal: number){
    return await this._servicioListarCampaña.listarSucursal(idSucursal);
  }
}