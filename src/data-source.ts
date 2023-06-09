import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Customer } from "./entity/Customer"
import { Order } from "./entity/Order"
import { Shop } from "./entity/Shop"
import { Product } from "./entity/Product"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin",
    database: "shoplist",
    synchronize: true,
    logging: false,
    entities: [User, Customer, Order, Shop, Product],
    migrations: [],
    subscribers: [],
});

AppDataSource.initialize().catch((error) => console.log(error));

export const userRepository = AppDataSource.getRepository(User);