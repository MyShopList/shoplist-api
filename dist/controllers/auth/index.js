"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signin = exports.signup = void 0;
const client_1 = require("@prisma/client");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const lodash_1 = __importDefault(require("lodash"));
const response_1 = require("../../helpers/response");
const prisma = new client_1.PrismaClient();
// hash the password, create jwt
const signup = async (req, res) => {
    // take it from the user
    const userBody = {
        firstName: "John",
        lastName: "Doe",
        email: "admin@admin.com",
        password: "admin@123",
        phone: "9873255539"
    };
    const doesUserExist = await prisma.user.findUnique({
        where: {
            email: userBody.email,
        },
    });
    if (!lodash_1.default.isEmpty(doesUserExist))
        return res.json((0, response_1.failureRes)("Email already exists"));
    userBody.password = await bcrypt_1.default.hash(userBody.password, 10);
    console.log(userBody);
    const user = await prisma.user.create({ data: userBody }).catch((err) => {
        console.log(err);
    });
    if (user) {
        // generate jwt
        const token = jsonwebtoken_1.default.sign({}, 'secret', { expiresIn: "7d" });
        res.json((0, response_1.successRes)("User created successfully", {
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
};
exports.signup = signup;
const signin = async (req, res) => {
    const requestBody = {
        email: "admin@admin.com",
        password: "admin@123"
    };
    const user = await prisma.user.findUnique({
        where: {
            email: requestBody.email,
        },
    });
    if (lodash_1.default.isEmpty(user))
        return res.json((0, response_1.failureRes)("No user found with given email id"));
    const validPassword = await bcrypt_1.default.compare(requestBody.password, user.password);
    if (!validPassword)
        return res.json((0, response_1.failureRes)("Invalid password"));
    const token = jsonwebtoken_1.default.sign({}, 'secret', { expiresIn: "7d" });
    res.json((0, response_1.successRes)("Login successful", {
        token: token,
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        isEmailVerified: user.isEmailVerified,
        isPhoneVerified: user.isPhoneVerified,
        phone: user.phone
    }));
};
exports.signin = signin;
//# sourceMappingURL=index.js.map