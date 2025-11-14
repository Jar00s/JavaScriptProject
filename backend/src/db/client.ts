
import { PrismaClient, Prisma } from '../../generated/client'
import { config } from '../config/env';

declare global {
    // eslint-disable-next-line no-var
    var prisma: PrismaClient | undefined;
}

const logLevels: Prisma.LogLevel[] = config.isDev
    ? ['query', 'info', 'warn', 'error']
    : ['error'];

const prismaOptions: Prisma.PrismaClientOptions = {
    log: logLevels,
};
export const db = (() => {
    // Zabezpieczenie przed wieloma instancjami w środowisku deweloperskim
    //process.env.NODE_ENV === 'development'
    if (config.isDev) {
        if (!global.prisma) {
            global.prisma = new PrismaClient(prismaOptions);
        }
        return global.prisma;
    }

    // Dla produkcji zawsze nowa instancja
    return new PrismaClient(prismaOptions);
})();

// Obsługa zamykania połączenia przy wyłączaniu aplikacji
process.on('beforeExit', async () => {
    await db.$disconnect();
});
