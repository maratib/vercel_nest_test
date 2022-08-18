import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

export enum dbTypes {
  mysql = 'mysql',
  postgres = 'postgres',
}

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (
    configService: ConfigService,
  ): Promise<TypeOrmModuleOptions> => {
    return {
      type: 'mysql',
      host: 'remotemysql.com',
      port: 3306,
      username: 'BsUJwiOeZK',
      database: 'BsUJwiOeZK',
      password: 'BUJsBYknAb',
      entities: [__dirname + '/../**/*.entity.{js,ts}'],
      migrations: [__dirname + '/../db/migrations/*{.ts,.js}'],
      extra: {
        charset: 'utf8mb4_unicode_ci',
      },
      synchronize: false,
      logging: false,
    };
  },
};

const typeOrmConfig = new DataSource({
  type: 'mysql',
  host: 'remotemysql.com',
  port: 3306,
  username: 'BsUJwiOeZK',
  password: 'BUJsBYknAb',
  database: 'BsUJwiOeZK',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  migrations: [__dirname + '/../db/migrations/*{.ts,.js}'],
  extra: {
    charset: 'utf8mb4_unicode_ci',
  },
  synchronize: false,
  logging: true,
});

export default typeOrmConfig;
