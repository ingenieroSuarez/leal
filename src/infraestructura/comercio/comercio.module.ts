import { Module } from '@nestjs/common';
import { ComercioControlador } from './controlador/comercio.controlador';
import { ManejadorProcesarCampaña } from 'src/aplicacion/comercio/comando/registrar-campaña.manejador';
import { ServicioRegistrarCampaña } from 'src/dominio/comercio/servicio/ServicioRegistrarCampaña';
import { RepositorioCampaña } from 'src/dominio/comercio/puerto/repositorio/repositorio-campaña';
import { RepositorioCampañaMysql } from './adaptador/repositorio/repositorio-campaña-mysql';

const repositorioCampaña = {
  provide: RepositorioCampaña,
  useClass: RepositorioCampañaMysql,
};

@Module({
    imports: [],
    controllers: [ComercioControlador],
    providers:[ 
      ManejadorProcesarCampaña,
      ServicioRegistrarCampaña,
      repositorioCampaña
    ]
  })
  export class ComercioModule {}