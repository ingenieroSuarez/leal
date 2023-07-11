import { Module } from '@nestjs/common';
import { ComercioControlador } from './controlador/comercio.controlador';
import { ManejadorProcesarCampaña } from 'src/aplicacion/comercio/comando/registrar-campaña.manejador';
import { ServicioRegistrarCampaña } from 'src/dominio/comercio/servicio/ServicioRegistrarCampaña';
import { RepositorioCampaña } from 'src/dominio/comercio/puerto/repositorio/repositorio-campaña';
import { RepositorioCampañaMysql } from './adaptador/repositorio/repositorio-campaña-mysql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { campaña } from './entidad/campaña.entidad';
import { DaoCampaña } from 'src/dominio/comercio/puerto/dao/dao-campaña';
import { DaoCampañaMysql } from './adaptador/dao/dao-campaña-mysql';
import { ListarCampaña } from 'src/aplicacion/comercio/consulta/listar-campaña';
import { ServicioListarCampaña } from 'src/dominio/comercio/servicio/ServicioListarCampaña';

const repositorioCampaña = {
  provide: RepositorioCampaña,
  useClass: RepositorioCampañaMysql,
};
const daoCampaña = {
  provide: DaoCampaña,
  useClass: DaoCampañaMysql,
};

@Module({
    imports: [
      TypeOrmModule.forFeature([campaña]),
    ],
    controllers: [ComercioControlador],
    providers:[
      ManejadorProcesarCampaña,
      ServicioRegistrarCampaña,
      ListarCampaña,
      ServicioListarCampaña,
      repositorioCampaña,
      daoCampaña
    ],
    exports:[
      ServicioListarCampaña
    ]

  })
  export class ComercioModule {}