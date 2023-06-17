"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
let router = express_1.default.Router();
const auth_1 = require("../../controllers/auth");
router.post('/signup', auth_1.signup);
router.get('/signin', auth_1.signin);
exports.default = router;
//# sourceMappingURL=index.js.map