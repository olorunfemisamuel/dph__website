import { Router } from 'express';
import {
  createInsight,
  getInsights,
  getInsightBySlug,
  updateInsight,
  deleteInsight
} from '../controllers/insightController';
import { protect, authorize } from '../middleware/auth';

const router = Router();

// Public routes
router.get('/', getInsights);
router.get('/:slug', getInsightBySlug);

// Admin only routes
router.post('/', protect, authorize('admin'), createInsight);
router.put('/:id', protect, authorize('admin'), updateInsight);
router.delete('/:id', protect, authorize('admin'), deleteInsight);

export default router;