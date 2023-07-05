import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ComercioModule } from './comercio/comercio.module';
import { NodeEnv } from './configuracion/environment/env-node.enum';
import { VentasModule } from './ventas/ventas.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
    providers: [],
    imports: [
      //TypeOrmModule.forRootAsync({
      //  //useFactory: databaseConfigFactory,
      //  inject: [ConfigService],
      //}),
      ConfigModule.forRoot({
        isGlobal: true,
        envFilePath: `env/${process.env.NODE_ENV}.env`,
        validationSchema: Joi.object({
            NODE_ENV: Joi.string()
              .valid(NodeEnv.DEVELOPMENT, NodeEnv.PRODUCTION)
              .required(),
          }),
      }),
      ComercioModule,
      VentasModule,
      UsuarioModule
    ],
  })
  export class InfraestructuraModule {}