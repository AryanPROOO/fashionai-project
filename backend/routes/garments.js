import express from 'express';
import { createGarment, getUserGarments } from '../controllers/garments.js';
import { authenticate } from '../middleware/auth.js';
const router = express.Router();

router.use(authenticate);
router.post('/', createGarment);
router.get('/', getUserGarments);

export default router;

