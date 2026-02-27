import { Router } from 'express';
import {
  submitJobApplication,
  getJobApplications,
  updateApplicationStatus
} from '../controllers/jobcontroller';
import { protect, authorize } from '../middleware/auth';

const router = Router();

router.post('/apply', submitJobApplication);

router.use(protect, authorize('admin')); // Admin only routes below

router.get('/applications', getJobApplications);
router.put('/applications/:id/status', updateApplicationStatus);

export default router;