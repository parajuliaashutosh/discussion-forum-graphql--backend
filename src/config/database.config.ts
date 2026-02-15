import 'reflect-metadata';
import { DataSource } from 'typeorm';
import Print from '../utils/Print';
import { DotenvConfig } from './env.config';

Print.info('Database Configuration:');
Print.info(`Host: ${DotenvConfig.DATABASE_HOST}`);
Print.info(`Port: ${DotenvConfig.DATABASE_PORT}`);
Print.info(`Username: ${DotenvConfig.DATABASE_USERNAME}`);
Print.info(`Database: ${DotenvConfig.DATABASE_NAME}`);

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: DotenvConfig.DATABASE_HOST,
    port: DotenvConfig.DATABASE_PORT,
    username: DotenvConfig.DATABASE_USERNAME,
    password: DotenvConfig.DATABASE_PASSWORD,
    database: DotenvConfig.DATABASE_NAME,
    logging: false,
    dropSchema: false,
    synchronize: true,
    entities: [__dirname + '/../entities/**/*.entity{.ts,.js}'],
});
