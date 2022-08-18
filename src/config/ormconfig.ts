import { User } from '../db/entities/user.entity';

const config = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'temp',
  password: 'temp',
  database: 'temp',
  // entities: [__dirname + '../**/*.entity.{js,ts}'],
  // migrations: [__dirname + '../db/migrations/*{.ts,.js}'],
  entities: [User],
  synchronize: true,
  logging: true,
};

export = config;
