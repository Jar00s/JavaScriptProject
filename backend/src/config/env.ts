import * as dotenv from 'dotenv';
dotenv.config();

type NodeEnv = 'development' | 'test' | 'production';

function getEnvVar(name: string, required: boolean = true): string | undefined {
    const value = process.env[name];

    if (!value || value.trim() === '') {
        if (required) {
            throw new Error(`Missing required environment variable: ${name}`);
        }
        return undefined;
    }

    return value;
}

// NODE_ENV z domyślną wartością 'development'
const nodeEnv = (process.env.NODE_ENV as NodeEnv) || 'development';

// Musi istnieć – bez tego nie podłączymy się do bazy
const databaseUrl = getEnvVar('DATABASE_URL', true)!;

// PORT – jak nie ma, bierzemy 3000
const portRaw = getEnvVar('PORT', false) ?? '3000';
const port = Number(portRaw);

if (Number.isNaN(port) || port <= 0) {
    throw new Error(`Invalid PORT value: "${portRaw}". It must be a positive number.`);
}

// Przyszłościowo: JWT_SECRET itp.
// const jwtSecret = getEnvVar('JWT_SECRET', true);

export const config = {
    nodeEnv,
    databaseUrl,
    port,
    isDev: nodeEnv === 'development',
    isTest: nodeEnv === 'test',
    isProd: nodeEnv === 'production',
    // jwtSecret,
};