"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const auth_1 = __importDefault(require("./routes/auth"));
const shop_1 = __importDefault(require("./routes/shop"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)({
    origin: "*"
}));
// Status check
app.get('/api/status', async (req, res) => {
    res.json({
        status: "OK"
    });
});
// Auth routes
app.use('/api/auth', auth_1.default);
app.use('/api/shop', shop_1.default);
app.listen(8000, () => {
    console.log("Now listening on post 8000");
});
//# sourceMappingURL=index.js.map