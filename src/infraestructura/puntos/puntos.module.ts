import { Module } from '@nestjs/common';
import { PuntosControlador } from './controlador/puntos.controlador';

@Module({
    imports: [],
    controllers: [PuntosControlador],
  })
  export class PuntosModule {}