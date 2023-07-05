import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable, Logger } from '@nestjs/common';
import { RepositorioCampaña } from 'src/dominio/comercio/puerto/repositorio/repositorio-campaña';
import { ComandoRegistrarCampaña } from 'src/aplicacion/comercio/comando/registrar-campaña.comando';

@Injectable()
export class RepositorioCampañaMysql implements RepositorioCampaña{
    private logger = new Logger(RepositorioCampañaMysql.name);
    async registrar(datosCampaña: ComandoRegistrarCampaña) {
        console.log(datosCampaña);
        
    }
}