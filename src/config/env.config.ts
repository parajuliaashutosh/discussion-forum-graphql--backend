import dotenv from 'dotenv';
import path from 'path';

// Load the correct env file based on NODE_ENV
const envFile = '.env';

dotenv.config({ path: path.resolve(process.cwd(), envFile) });

export class DotenvConfig {
    static NODE_ENV = process.env.NODE_ENV;
    static PORT = +process.env.PORT!;

    // *Database Configurations
    static DATABASE_HOST = process.env.DATABASE_HOST;
    static DATABASE_PORT = +process.env.DATABASE_PORT!;
    static DATABASE_USERNAME = process.env.DATABASE_USERNAME;
    static DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
    static DATABASE_NAME = process.env.DATABASE_NAME;

    // JWT SECRET
    static JWT_SECRET = process.env.JWT_SECRET!;
    static JWT_TOKEN_EXPIRE = process.env.JWT_TOKEN_EXPIRE!;

    // SEED ADMIN PASSWORD
    static ADMIN_PASSWORD = process.env.ADMIN_PASSWORD!;
}
