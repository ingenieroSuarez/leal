import { Module } from '@nestjs/common';
import { CashbackControlador } from './controlador/cashback.controlador';

@Module({
    imports: [],
    controllers: [CashbackControlador],
  })
  export class CashbackModule {}