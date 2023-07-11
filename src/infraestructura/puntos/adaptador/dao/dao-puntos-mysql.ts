import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable, Logger } from '@nestjs/common';
import { configuracion_puntos } from '../../entidad/configuracion-puntos.entidad';
import { DaoPuntos } from 'src/dominio/puntos/puerto/dao/dao-puntos';

@Injectable()
export class DaoPuntosMysql implements DaoPuntos{
     constructor(
         @InjectRepository(configuracion_puntos)
         private readonly _configuracion_puntos: Repository<configuracion_puntos>
     ){}
    private logger = new Logger(DaoPuntosMysql.name);
    async listarConfiguracionPuntosComercio(idComercio: number) {
        try {
             const respuestaPuntos= await this._configuracion_puntos.findOne(
                 { where: { idcomercio : idComercio } }
            )
            return respuestaPuntos;
        } catch (error) {
            this.logger.error(error)
            return []
        }
    };
}