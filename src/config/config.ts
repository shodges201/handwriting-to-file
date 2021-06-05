import dotenv from 'dotenv';
import assert from 'assert';
import path from 'path';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

dotenv.config();

const {
    BASE_URL,
    PORT,
    API_PREFIX
} = process.env;

assert(BASE_URL, `BASE_URL required for this environment`);
assert(PORT, `PORT needs to be specified to run`);

export interface IConfig {
    baseUrl: string;
    port: number;
    baseDir: string;
    api: {
        prefix: string;
    };
}

export default {
    baseUrl: BASE_URL,
    port: parseInt(PORT),
    api: {
        prefix: API_PREFIX
    },
    baseDir: path.join(__dirname, '../../')    
} as IConfig