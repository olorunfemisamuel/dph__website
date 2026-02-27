import { Router } from 'express';
import {
  getInvestments,
  getInvestment,
  createInvestment,
  updateInvestment,
  deleteInvestment
} from '../controllers/investmentcontroller';
import { protect } from '../middleware/auth';

const router = Router();

router.use(protect); // All investment routes require authentication

router
  .route('/')
  .get(getInvestments)
  .post(createInvestment);

router
  .route('/:id')
  .get(getInvestment)
  .put(updateInvestment)
  .delete(deleteInvestment);

export default router;