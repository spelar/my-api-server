import { Router } from 'express';
import { register } from '../controllers/userController';

const router = Router();

// 회원가입 라우트
router.post('/register', register);

export default router;
