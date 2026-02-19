// app.ts
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDatabase from './config/database';
import { errorHandler } from './middleware/errorhandler';
import { limiter } from './middleware/ratelimiter';

// Import routes
import apiRoutes from './routes/api';
import authRoutes from './routes/authroutes';
import contactRoutes from './routes/contactroutes';
import insightRoutes from './routes/insightroutes';
import investmentRoutes from './routes/investmentroutes';
import jobRoutes from './routes/jobroutes';
import adminRoutes from './routes/adminroutes';
import websocketRoutes from './routes/websocketroutes';
import blogRoutes from './routes/blogroutes';
import newsletterRoutes from './routes/newsletterroutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(limiter);

// Database connection
connectDatabase();

// Routes
app.use('/api', apiRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/insights', insightRoutes);
app.use('/api/investments', investmentRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/websocket', websocketRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/newsletter', newsletterRoutes);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Error handling middleware (should be last)
app.use(errorHandler);

// Socket.io setup
import { initializeSocket } from './config/socket.io';
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
initializeSocket(server);

export default app;