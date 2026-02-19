import { Router } from 'express';
import {
  subscribe,
  unsubscribe,
  getSubscribers,
  deleteSubscriber
} from '../controllers/newslettercontroller';
import { protect, authorize } from '../middleware/auth';

const router = Router();

// Public routes
router.post('/subscribe', subscribe);
router.post('/unsubscribe', unsubscribe);

// Admin only routes
router.get('/subscribers', protect, authorize('admin'), getSubscribers);
router.delete('/:id', protect, authorize('admin'), deleteSubscriber);

export default router;