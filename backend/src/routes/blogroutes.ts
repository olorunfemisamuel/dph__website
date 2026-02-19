import { Router } from 'express';
import {
  getBlogPosts,
  getBlogPost,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost
} from '../controllers/blogcontroller';
import { protect, authorize } from '../middleware/auth';

const router = Router();

// Public routes
router.get('/', getBlogPosts);
router.get('/:id', getBlogPost);

// Admin only routes
router.post('/', protect, authorize('admin'), createBlogPost);
router.put('/:id', protect, authorize('admin'), updateBlogPost);
router.delete('/:id', protect, authorize('admin'), deleteBlogPost);

export default router;