"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getShopDetails = exports.createShop = void 0;
const client_1 = require("@prisma/client");
const response_1 = require("../../helpers/response");
const prisma = new client_1.PrismaClient();
const createShop = async (req, res) => {
    const requestBody = {
        name: "My Shoe Store",
        logo: "https://logo.png",
        description: "jkl",
        userId: 13
    };
    const shop = await prisma.shop.create({
        data: requestBody
    }).catch(err => {
        console.log(err);
    });
    if (shop) {
        res.json((0, response_1.successRes)("Shop created successfully", shop));
    }
};
exports.createShop = createShop;
const getShopDetails = async () => {
};
exports.getShopDetails = getShopDetails;
//# sourceMappingURL=index.js.map