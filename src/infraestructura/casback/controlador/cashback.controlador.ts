import { Controller,  Post, Body } from '@nestjs/common';
import { ApiTags, ApiBody } from '@nestjs/swagger';
import { ComandoConfigurarCashbackLeal } from 'src/aplicacion/cashback/comando/configurar-cashback-leal.comando';

@ApiTags('Cashback')
@Controller('Cashback')
export class CashbackControlador {
    @ApiBody({ type: ComandoConfigurarCashbackLeal })
    @Post('configurar')
    async configurarCashback(@Body() datoscashback: ComandoConfigurarCashbackLeal) {
      return datoscashback;
    }
}