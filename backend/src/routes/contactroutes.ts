import { Router } from 'express';
import {
  submitContact,
  getContacts,
  updateContactStatus
} from '../controllers/contactcontroller';
import { protect, authorize } from '../middleware/auth';

const router = Router();

// Public
router.post('/', submitContact);

// Admin only
router.use(protect, authorize('admin'));
router.get('/', getContacts);
router.put('/:id/status', updateContactStatus);

export default router;