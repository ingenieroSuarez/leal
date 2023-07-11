import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable, Logger } from '@nestjs/common';
import { RepositorioCampaña } from 'src/dominio/comercio/puerto/repositorio/repositorio-campaña';
import { ComandoRegistrarCampaña } from 'src/aplicacion/comercio/comando/registrar-campaña.comando';
import { RepositorioVentas } from 'src/dominio/ventas/puerto/repositorio/repositorio-ventas';
import { ComandoProcesarVenta } from 'src/aplicacion/ventas/comando/procesar-venta.comando';

@Injectable()
export class RepositorioVentasMysql implements RepositorioVentas{
    // constructor( ){}
    private logger = new Logger(RepositorioVentasMysql.name);
    async registrar(datosVenta: ComandoProcesarVenta) {
        try {
           this.logger.debug(datosVenta)
        } catch (error) {
            this.logger.error(error)
        }
    }
}