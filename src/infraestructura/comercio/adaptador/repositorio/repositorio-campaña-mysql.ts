import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable, Logger } from '@nestjs/common';
import { RepositorioCampaña } from 'src/dominio/comercio/puerto/repositorio/repositorio-campaña';
import { ComandoRegistrarCampaña } from 'src/aplicacion/comercio/comando/registrar-campaña.comando';
import { campaña } from '../../entidad/campaña.entidad';

@Injectable()
export class RepositorioCampañaMysql implements RepositorioCampaña{
    constructor(
        @InjectRepository(campaña)
        private readonly repositorioCampaña: Repository<campaña>
    ){}
    private logger = new Logger(RepositorioCampañaMysql.name);
    async registrar(datosCampaña: ComandoRegistrarCampaña) {
        try {
            const nuevaCampaña= new campaña();
            nuevaCampaña.idcomercio= datosCampaña.idComercio;
            nuevaCampaña.idsucursal = datosCampaña.idSucursal;
            nuevaCampaña.multiplicador_puntos= datosCampaña.multiplicadorPuntosLeal;
            nuevaCampaña.multiplicador_cashback=datosCampaña.multiplicadorCashback;
            nuevaCampaña.fecha_inicio= datosCampaña.fechaInicio;
            nuevaCampaña.fecha_final = datosCampaña.fechaFin;
            nuevaCampaña.valor_compra= datosCampaña.valorCompra;
            const respuesta= await this.repositorioCampaña.save(nuevaCampaña);
            return respuesta;
        } catch (error) {
            this.logger.error(error)
        }
    }
}