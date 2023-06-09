"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// Status check
app.get('/api/status', async (req, res) => {
    res.json({
        status: "OK"
    });
});
app.listen(8000, () => {
    console.log("Now listening on post 8000");
});
//# sourceMappingURL=index.js.map