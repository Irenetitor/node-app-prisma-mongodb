import { Router } from 'express';
import {
  getUsers,
  createUser,
} from '../controllers/user.controller.js';

const router = Router();

router.get('/', getUsers); // GET /users/
router.post('/', createUser); // POST /users/

export default router;