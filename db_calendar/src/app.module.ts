import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DealsModule } from './deals/deals.module';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '../.env',
    isGlobal: true
  }),
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => ({
      type: 'postgres',
      host: configService.get('POSTGRES_HOST'),
      port: configService.get('POSTGRES_PORT_CONNECTION'),
      username: configService.get('POSTGRES_USER'),
      password: configService.get('POSTGRES_PASSWORD'),
      database: configService.get('POSTGRES_DB'),
      synchronize: true,
      entities: [],
      autoLoadEntities: true,
    })
  }),
  DealsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
