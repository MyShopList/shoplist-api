import { PrismaClient } from '@prisma/client';
import { successRes } from '../../helpers/response';

const prisma = new PrismaClient()

export const createShop = async (req, res) => {
    const requestBody = {
        name: "My Shoe Store",
        logo: "https://logo.png",
        description: "jkl",
        userId: 13
    }

    const shop = await prisma.shop.create({
        data: requestBody
    }).catch(err => {
        console.log(err);
    });

    if (shop) {
        res.json(successRes("Shop created successfully", shop));
    }
}

export const getShopDetails = async () => {

}