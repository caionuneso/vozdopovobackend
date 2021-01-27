"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = require("jsonwebtoken");
const auth_1 = __importDefault(require("../config/auth"));
const usersCreate_1 = __importDefault(require("../models/usersCreate"));
const AppError_1 = __importDefault(require("../errors/AppError"));
class AuthenticateUserService {
    async execute({ username, password }) {
        const usersCreatedRepository = typeorm_1.getRepository(usersCreate_1.default);
        const user = await usersCreatedRepository.findOne({ where: { username } });
        if (!user) {
            throw new AppError_1.default('incorrect email/password combination', 401);
        }
        /* user.password = senha criptografada */
        /* password = senha não criptografada */
        const passwordMatched = await bcryptjs_1.compare(password, user.password);
        if (!passwordMatched) {
            throw new AppError_1.default('incorrect email/password combination', 401);
        }
        const { secret, expiresIn } = auth_1.default.jwt;
        const token = jsonwebtoken_1.sign({}, secret, {
            subject: user.id,
            expiresIn,
        });
        return {
            user,
            token,
        };
    }
}
exports.default = AuthenticateUserService;
