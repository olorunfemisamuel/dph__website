import { Router } from 'express';
import { register, login, getMe, refreshToken } from '../controllers/authController';
import { protect } from '../middleware/auth';
import { validate, registerValidation } from '../middleware/validation';
import { authLimiter } from '../middleware/ratelimiter';

const router = Router();

router.post('/register', authLimiter, validate(registerValidation), register);
router.post('/login', authLimiter, login);
router.post('/refresh-token', refreshToken);
router.get('/me', protect, getMe);

export default router;