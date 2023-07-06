import { Injectable } from '@nestjs/common';
import { DaoCampaña } from '../puerto/dao/dao-campaña';

@Injectable()
export class ServicioListarCampaña {
  constructor(
    private readonly _daoCampaña: DaoCampaña,
  ) {}
  async listarComercio(idComercio: number) {
    return await this._daoCampaña.listarCampañaComercio(idComercio);
  }
  async listarSucursal(idSucursal: number) {
    return await this._daoCampaña.listarCampañaSucursal(idSucursal);
  }
}