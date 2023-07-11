import { Module } from '@nestjs/common';
import { PuntosControlador } from './controlador/puntos.controlador';
import { DaoPuntos } from 'src/dominio/puntos/puerto/dao/dao-puntos';
import { DaoPuntosMysql } from './adaptador/dao/dao-puntos-mysql';
import { configuracion_puntos } from './entidad/configuracion-puntos.entidad';
import { TypeOrmModule } from '@nestjs/typeorm';

const daoPuntos = {
  provide: DaoPuntos,
  useClass: DaoPuntosMysql,
};

@Module({
    imports: [
      TypeOrmModule.forFeature([configuracion_puntos]),
    ],
    controllers: [PuntosControlador],
    providers:[
      daoPuntos
    ],
    exports:[
      daoPuntos
    ]
  })
  export class PuntosModule {}