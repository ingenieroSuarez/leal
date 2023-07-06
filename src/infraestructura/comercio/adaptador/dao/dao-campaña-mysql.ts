import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable, Logger } from '@nestjs/common';
import { DaoCampaña } from "src/dominio/comercio/puerto/dao/dao-campaña";
import { campaña } from '../../entidad/campaña.entidad';

@Injectable()
export class DaoCampañaMysql implements DaoCampaña{
    constructor(
        @InjectRepository(campaña)
        private readonly _repositorioCampaña: Repository<campaña>
    ){}
    private logger = new Logger(DaoCampañaMysql.name);
    async listarCampañaComercio(idComercio: number) {
        try {
            const respuesta= await this._repositorioCampaña.find(
                { where: { idcomercio : idComercio } }
            )
            return respuesta;
        } catch (error) {
            this.logger.error(error)
            return []
        }
    }
    async listarCampañaSucursal(idSucursal: number) {
        try {
            const respuesta= await this._repositorioCampaña.find(
                { where: { idsucursal : idSucursal } }
            )
            return respuesta;
        } catch (error) {
            this.logger.error(error)
            return []
        }
    }
}