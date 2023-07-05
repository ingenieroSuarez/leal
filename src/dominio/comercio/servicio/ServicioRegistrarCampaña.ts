import { Injectable } from '@nestjs/common';
import { ComandoRegistrarCampaña } from 'src/aplicacion/comercio/comando/registrar-campaña.comando';
import { RepositorioCampaña } from '../puerto/repositorio/repositorio-campaña';

@Injectable()
export class ServicioRegistrarCampaña {
  constructor(
    private readonly _repositorioCampaña: RepositorioCampaña,
  ) {}
  async ejecutar(datosCampaña: ComandoRegistrarCampaña) {
    console.log(datosCampaña);
    await this._repositorioCampaña.registrar(datosCampaña)
  }
}