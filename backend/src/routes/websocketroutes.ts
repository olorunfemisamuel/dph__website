import { Router } from 'express';

const router = Router();

// WebSocket status route
router.get('/status', (req, res) => {
  res.json({ status: 'WebSocket server is running' });
});

export default router;