import { Module } from '@nestjs/common';
import { VentasControlador } from './controlador/ventas.controlador';

@Module({
    imports: [],
    controllers: [VentasControlador],
  })
  export class VentasModule {}