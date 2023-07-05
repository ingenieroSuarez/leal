import { Module } from '@nestjs/common';
import { UsuarioControlador } from './controlador/usuario.controlador';

@Module({
    imports: [],
    controllers: [UsuarioControlador],
  })
  export class UsuarioModule {}