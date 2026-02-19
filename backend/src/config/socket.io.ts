import { Server as SocketServer } from 'socket.io';
import { Server as HttpServer } from 'http';
import logger from '../utils/logger';

let io: SocketServer;

export const initializeSocket = (server: HttpServer) => {
  io = new SocketServer(server, {
    cors: {
      origin: process.env.FRONTEND_URL || 'http://localhost:5173',
      credentials: true
    },
    path: process.env.WS_PATH || '/ws/stocks'
  });

  io.on('connection', (socket) => {
    logger.info(`Client connected: ${socket.id}`);

    socket.on('subscribe', (data: { symbols: string[] }) => {
      try {
        const symbols = data.symbols || ['AAPL', 'GOOGL', 'MSFT', 'TSLA'];
        symbols.forEach(symbol => {
          socket.join(`stock:${symbol}`);
        });
        socket.emit('subscribed', { symbols });
        logger.info(`Client ${socket.id} subscribed to: ${symbols.join(', ')}`);
      } catch (error) {
        socket.emit('error', { message: 'Failed to subscribe to symbols' });
      }
    });

    socket.on('unsubscribe', (data: { symbols: string[] }) => {
      try {
        data.symbols.forEach(symbol => {
          socket.leave(`stock:${symbol}`);
        });
        logger.info(`Client ${socket.id} unsubscribed from: ${data.symbols.join(', ')}`);
      } catch (error) {
        socket.emit('error', { message: 'Failed to unsubscribe' });
      }
    });

    socket.on('disconnect', () => {
      logger.info(`Client disconnected: ${socket.id}`);
    });
  });

  // Broadcast mock stock data
  startMockStockBroadcast();

  return io;
};

const startMockStockBroadcast = () => {
  setInterval(() => {
    if (!io) return;

    const symbols = ['AAPL', 'GOOGL', 'MSFT', 'TSLA', 'AMZN', 'META'];
    symbols.forEach(symbol => {
      const stockData = {
        symbol,
        price: 100 + Math.random() * 100,
        change: (Math.random() * 10) - 5,
        changePercent: (Math.random() * 5) - 2.5,
        timestamp: new Date()
      };
      io.to(`stock:${symbol}`).emit('stock_update', stockData);
    });
  }, 5000);
};

export const getIO = () => {
  if (!io) {
    throw new Error('Socket.io not initialized');
  }
  return io;
};