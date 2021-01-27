"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usersCreateService_1 = __importDefault(require("../services/usersCreateService"));
const usersCreateRouter = express_1.default();
usersCreateRouter.post('/', async (request, response) => {
    const { username, password, city_id } = request.body;
    const userCreate = new usersCreateService_1.default();
    const user = await userCreate.execute({
        username,
        password,
        city_id,
    });
    delete user.password;
    return response.status(200).json(user);
});
exports.default = usersCreateRouter;
