// DB.config.ts

import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config as configDotenv } from 'dotenv';
import { join } from 'path';
const envFilePath = join(__dirname, '..', '.env');
configDotenv({ path: envFilePath });
const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT,10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true, // Sincroniza las entidades con la base de datos (solo en desarrollo)
};

export default config;
