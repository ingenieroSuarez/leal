import { ComandoRegistrarCampaña } from 'src/aplicacion/comercio/comando/registrar-campaña.comando';

export abstract class RepositorioCampaña {
  abstract registrar(datosCampaña: ComandoRegistrarCampaña);
}