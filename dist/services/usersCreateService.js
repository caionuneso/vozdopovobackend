"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const bcryptjs_1 = require("bcryptjs");
const usersCreate_1 = __importDefault(require("../models/usersCreate"));
const AppError_1 = __importDefault(require("../errors/AppError"));
class CreateUserService {
    async execute({ username, password, city_id, }) {
        const usersCreateRepository = typeorm_1.getRepository(usersCreate_1.default);
        const checkUsersCreateExists = await usersCreateRepository.findOne({
            where: { username },
        });
        if (checkUsersCreateExists) {
            throw new AppError_1.default('Username alredy used');
        }
        const hashedPassword = await bcryptjs_1.hash(password, 8);
        const userCreate = usersCreateRepository.create({
            username,
            password: hashedPassword,
            city_id,
        });
        await usersCreateRepository.save(userCreate);
        return userCreate;
    }
}
exports.default = CreateUserService;
