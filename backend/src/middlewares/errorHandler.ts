import { Request, Response, NextFunction } from 'express';
import { config } from '../config/env';

interface AppError extends Error {
    statusCode?: number;
    status?: string;
}

// Na przyszłość możesz zrobić klasę AppError i rzucać nią z serwisów/kontrolerów

export function errorHandler(
    err: AppError,
    req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    next: NextFunction,
) {
    const statusCode = err.statusCode ?? 500;
    const status = err.status ?? 'error';

    if (config.isDev) {
        // W dev logujemy pełny błąd do konsoli
        // W produkcji można tu wpiąć logger (np. pino, winston, sentry)
        // eslint-disable-next-line no-console
        console.error('Error handler caught error:', err);
    }

    res.status(statusCode).json({
        status,
        message: err.message || 'Internal server error',
        ...(config.isDev && { stack: err.stack }),
    });
}
