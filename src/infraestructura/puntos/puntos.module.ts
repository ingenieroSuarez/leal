import { Module } from '@nestjs/common';
import { PuntosControlador } from './controlador/puntos.controlador';
import { DaoPuntos } from 'src/dominio/puntos/puerto/dao/dao-puntos';
import { DaoPuntosMysql } from './adaptador/dao/dao-puntos-mysql';
import { configuracion_puntos } from './entidad/configuracion-puntos.entidad';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RepositorioPuntos } from 'src/dominio/puntos/puerto/repositorio/repositorio-puntos';
import { repositorioPuntosMysl } from './adaptador/repositorio/repositorio-puntos-mysql';
import { ServicioCalcularPuntos } from 'src/dominio/puntos/servicio/servicio-calcular-puntos';

const daoPuntos = {
  provide: DaoPuntos,
  useClass: DaoPuntosMysql,
};

const repositorioPuntos= {
  provide: RepositorioPuntos,
  useClass: repositorioPuntosMysl,
}

@Module({
    imports: [
      TypeOrmModule.forFeature([configuracion_puntos]),
    ],
    controllers: [PuntosControlador],
    providers:[
      daoPuntos,
      repositorioPuntos,
      ServicioCalcularPuntos
    ],
    exports:[
      daoPuntos,
      repositorioPuntos,
      ServicioCalcularPuntos
    ]
  })
  export class PuntosModule {}