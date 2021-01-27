"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const typeorm_1 = require("typeorm");
const states_1 = __importDefault(require("../models/states"));
const statesRouter = express_1.Router();
/* Rota de Criação */
statesRouter.post('/', async (request, response) => {
    const statesRepositoy = typeorm_1.getRepository(states_1.default);
    const res = await statesRepositoy.save(request.body);
    return response.status(200).json(res);
});
/* Rota para listar */
statesRouter.get('/', async (request, response) => {
    return response.json(await typeorm_1.getRepository(states_1.default).find());
});
exports.default = statesRouter;
