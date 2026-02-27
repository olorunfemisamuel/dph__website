// Enhanced logger implementation that handles different input types
const logger = {
    info: (message: string | object, meta?: any) => {
        const msg = typeof message === 'string' ? message : JSON.stringify(message, null, 2);
        console.log(`[INFO] ${new Date().toISOString()}: ${msg}`, meta ? meta : '');
    },

    error: (message: string | Error | object, meta?: any) => {
        let msg: string;
        let additionalMeta = meta;

        if (message instanceof Error) {
            // Handle Error objects
            msg = message.message;
            additionalMeta = {
                ...meta,
                stack: message.stack,
                name: message.name,
                ...(message as any) // Include any custom properties on the error
            };
        } else if (typeof message === 'string') {
            // Handle string messages
            msg = message;
        } else {
            // Handle other objects
            msg = JSON.stringify(message, null, 2);
        }

        console.error(`[ERROR] ${new Date().toISOString()}: ${msg}`, additionalMeta ? additionalMeta : '');
    },

    warn: (message: string | object, meta?: any) => {
        const msg = typeof message === 'string' ? message : JSON.stringify(message, null, 2);
        console.warn(`[WARN] ${new Date().toISOString()}: ${msg}`, meta ? meta : '');
    },

    debug: (message: string | object, meta?: any) => {
        if (process.env.NODE_ENV === 'development') {
            const msg = typeof message === 'string' ? message : JSON.stringify(message, null, 2);
            console.debug(`[DEBUG] ${new Date().toISOString()}: ${msg}`, meta ? meta : '');
        }
    },

    httpLogger: (req: any, res: any, next: any) => {
        const start = Date.now();
        res.on('finish', () => {
            const duration = Date.now() - start;
            const logMessage = `${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`;

            // Create a meta object with request details
            const meta = {
                method: req.method,
                url: req.originalUrl,
                statusCode: res.statusCode,
                duration: `${duration}ms`,
                ip: req.ip || req.connection.remoteAddress,
                userAgent: req.get('user-agent')
            };

            if (res.statusCode >= 400) {
                logger.warn(logMessage, meta);
            } else {
                logger.info(logMessage, meta);
            }
        });
        next();
    }
};

export default logger;