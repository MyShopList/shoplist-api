import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken"
import _ from 'lodash';

import { successRes, failureRes } from '../../helpers/response';

const prisma = new PrismaClient()

// hash the password, create jwt

export const signup = async (req: Request, res: Response) => {
    // take it from the user
    const userBody = {
        firstName: "John",
        lastName: "Doe",
        email: "admin@admin.com",
        password: "admin@123",
        phone: "9873255539"
    }

    const doesUserExist = await prisma.user.findUnique({
        where: {
            email: userBody.email,
        },
    });

    if (!_.isEmpty(doesUserExist)) return res.json(failureRes("Email already exists"));


    userBody.password = await bcrypt.hash(userBody.password, 10);

    console.log(userBody);

    const user = await prisma.user.create({ data: userBody }).catch((err) => {
        console.log(err);
    });

    if (user) {
        // generate jwt
        const token = jwt.sign({}, 'secret', { expiresIn: "7d" });

        res.json(successRes("User created successfully", {
            token: token,
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            isEmailVerified: user.isEmailVerified,
            isPhoneVerified: user.isPhoneVerified,
            phone: user.phone
        }));
    }
}

export const signin = async (req: Request, res: Response) => {
    const requestBody = {
        email: "admin@admin.com",
        password: "admin@123"
    }

    const user = await prisma.user.findUnique({
        where: {
            email: requestBody.email,
        },
    });

    if (_.isEmpty(user)) return res.json(failureRes("No user found with given email id"));

    const validPassword = await bcrypt.compare(requestBody.password, user.password);

    if (!validPassword) return res.json(failureRes("Invalid password"));

    const token = jwt.sign({}, 'secret', { expiresIn: "7d" });

    res.json(successRes("Login successful", {
        token: token,
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        isEmailVerified: user.isEmailVerified,
        isPhoneVerified: user.isPhoneVerified,
        phone: user.phone
    }));
}