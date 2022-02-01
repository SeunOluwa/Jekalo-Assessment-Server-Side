import express from 'express';

import { createUser, getUsers, deleteUser } from '../controllers/user.js';

const router = express.Router();

router.post('/user', createUser);
router.get('/users', getUsers);
router.delete('/:username', deleteUser);

export default router;
