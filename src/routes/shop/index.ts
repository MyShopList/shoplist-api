import express from 'express';

let router = express.Router();

import { createShop, getShopDetails } from '../../controllers/shop';

router.post('/', createShop);
router.get('/shop/:id', getShopDetails);

export default router;