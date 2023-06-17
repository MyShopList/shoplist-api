"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
let router = express_1.default.Router();
const shop_1 = require("../../controllers/shop");
router.post('/', shop_1.createShop);
router.get('/shop/:id', shop_1.getShopDetails);
exports.default = router;
//# sourceMappingURL=index.js.map