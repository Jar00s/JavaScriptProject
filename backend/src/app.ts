import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { config } from './config/env';
import { errorHandler } from './middlewares/errorHandler';
// tu później dojdą importy routerów, np. authRouter, usersRouter

export const app: Application = express();

/**
 * Middleware globalne
 */

// Parsowanie JSON
app.use(express.json());

// Parsowanie danych z formularzy (x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true }));

// CORS
// W DEV pozwalamy na localhost, w PROD później zawęzimy (np. do domeny frontendu)
app.use(
    cors({
        origin: config.isDev ? 'http://localhost:5173' : undefined,
        credentials: true,
    }),
);

/**
 * Healthcheck – do monitoringu i szybkiego sprawdzenia czy backend żyje
 */
app.get('/api/health', (req: Request, res: Response) => {
    res.status(200).json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        env: config.nodeEnv,
    });
});

// Testowy POST endpoint (tymczasowy)
app.post('/api/test', (req: Request, res: Response) => {
    const data = req.body;

    return res.status(201).json({
        message: 'POST request received successfully',
        received: data,
    });
});

app.get('/api/error-test', (req: Request, res: Response) => {
    throw new Error('Test error from /api/error-test');
});
/**
 * Tutaj będą routery modułów
 * Przykład (jak zrobimy moduł auth):
 *   app.use('/api/auth', authRouter);
 */
// TODO: app.use('/api/auth', authRouter);

/**
 * 404 handler – jeśli żaden endpoint nie zadziałał
 */
app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({
        status: 'error',
        message: 'Not found',
    });
});

/**
 * Globalny handler błędów – ZAWSZE na końcu
 */
app.use(errorHandler);
