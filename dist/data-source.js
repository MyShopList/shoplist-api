"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepository = exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const User_1 = require("./entity/User");
const Customer_1 = require("./entity/Customer");
const Order_1 = require("./entity/Order");
const Shop_1 = require("./entity/Shop");
const Product_1 = require("./entity/Product");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin",
    database: "shoplist",
    synchronize: true,
    logging: false,
    entities: [User_1.User, Customer_1.Customer, Order_1.Order, Shop_1.Shop, Product_1.Product],
    migrations: [],
    subscribers: [],
});
exports.AppDataSource.initialize().catch((error) => console.log(error));
exports.userRepository = exports.AppDataSource.getRepository(User_1.User);
//# sourceMappingURL=data-source.js.map