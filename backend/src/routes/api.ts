// routes/api.ts
import express from 'express';
import authRoutes from './authroutes';
import contactRoutes from './contactroutes';
import insightRoutes from './insightroutes';
import investmentRoutes from './investmentroutes';
import jobRoutes from './jobroutes';
import adminRoutes from './adminroutes';
import websocketRoutes from './websocketroutes';

const router = express.Router();

// Mount all routes
router.use('/auth', authRoutes);
router.use('/contacts', contactRoutes);
router.use('/insights', insightRoutes);
router.use('/investments', investmentRoutes);
router.use('/jobs', jobRoutes);
router.use('/admin', adminRoutes);
router.use('/websocket', websocketRoutes);

// API info route
router.get('/', (req, res) => {
  res.json({
    name: 'DPH Website API',
    version: '1.0.0',
    endpoints: {
      auth: '/api/auth',
      contacts: '/api/contacts',
      insights: '/api/insights',
      investments: '/api/investments',
      jobs: '/api/jobs',
      admin: '/api/admin',
      websocket: '/api/websocket'
    }
  });
});

export default router;