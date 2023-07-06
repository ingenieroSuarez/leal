import { Injectable } from '@nestjs/common';
import { ComandoRegistrarCampaña } from 'src/aplicacion/comercio/comando/registrar-campaña.comando';
import { RepositorioCampaña } from '../puerto/repositorio/repositorio-campaña';

@Injectable()
export class ServicioRegistrarCampaña {
  constructor(
    private readonly _repositorioCampaña: RepositorioCampaña,
  ) {}
  async ejecutar(datosCampaña: ComandoRegistrarCampaña) {
    const cashbackLeal= datosCampaña.multiplicadorCashback;
    const puntosLeal=datosCampaña.multiplicadorPuntosLeal;
    if(cashbackLeal===0 ){
        datosCampaña.multiplicadorCashback=null;
    };
    if(puntosLeal===0){
        datosCampaña.multiplicadorPuntosLeal=null;
    };
    await this._repositorioCampaña.registrar(datosCampaña);
  }
}