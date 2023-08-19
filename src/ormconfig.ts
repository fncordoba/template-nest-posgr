import { DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';

const srcPath = __dirname;

const envPath = path.resolve(srcPath, '../.env');

dotenv.config({ path: envPath });

const config: DataSourceOptions = {
  type: process.env.DATABASE_CLIENT as any,
  host: process.env.DATABASE_HOST,
  port: +process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [srcPath + '/**/*.entity{.ts,.js}'],
  migrations: [srcPath + '/database/migrations/**/*{.ts,.js}'],
  ssl: process.env.DATABASE_SSL === 'true',
  extra: {
    ssl: {
      ca: fs.readFileSync(process.env.DATABASE_CA).toString(),
    },
  },
};
export default config;
