// In your app.ts or server.ts
import http from 'http';
import WebSocketController from './controllers/WebSocketController';

// After creating your HTTP server
const server = http.createServer(app);

// Initialize WebSocket controller
const websocketController = new WebSocketController(server);

// Make it available throughout your app
app.set('websocketController', websocketController);

// Handle server shutdown
process.on('SIGTERM', () => {
    websocketController.shutdown();
    server.close();
});