import express from 'express';

let router = express.Router();

import { signup, signin } from '../../controllers/auth';

router.post('/signup', signup);
router.get('/signin', signin);

export default router;