"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authenticateUserService_1 = __importDefault(require("../services/authenticateUserService"));
const sessionsRouter = express_1.default();
sessionsRouter.post('/', async (request, response) => {
    const { username, password } = request.body;
    const authenticateUserService = new authenticateUserService_1.default();
    const { user, token } = await authenticateUserService.execute({
        username,
        password,
    });
    delete user.password;
    return response.status(200).json({ user, token });
});
exports.default = sessionsRouter;
