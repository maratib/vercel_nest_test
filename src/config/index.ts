// configuration.ts
import * as Joi from '@hapi/joi';
import { JwtModuleAsyncOptions } from '@nestjs/jwt';

export const config = () => ({
  NODE_ENV: process.env.NODE_ENV,
  ENV_NAME: process.env.NAME,
  port: parseInt(process.env.PORT, 10) || 3000,
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN,
  },
});

export const getLogLevels = (): any[] => {
  return process.env.LOG_LEVELS?.split(',');
};
export const getEnvFile = (): string => {
  let file;
  if (process.env.NODE_ENV) {
    return `${process.cwd()}/env/${process.env.NODE_ENV}.env`;
  }
  return `${process.cwd()}/.env`;
};

export const getDbType = (typeName: string): string => {
  return 'mysql';
};

export const validationSchema = Joi.object({
  DB_TYPE: Joi.string().required(),
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().required(),
  DB_USER: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_NAME: Joi.string().required(),
  PORT: Joi.number(),
});

export const jwtConfig: JwtModuleAsyncOptions = {
  useFactory: async () => {
    return {
      secret: config().jwt.secret,
      signOptions: { expiresIn: config().jwt.expiresIn },
    };
  },
};
