"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const denunciations_routes_1 = __importDefault(require("./denunciations.routes"));
const states_routes_1 = __importDefault(require("./states.routes"));
const cities_routes_1 = __importDefault(require("./cities.routes"));
const usersCreate_routes_1 = __importDefault(require("./usersCreate.routes"));
const sessions_routes_1 = __importDefault(require("./sessions.routes"));
const routes = express_1.Router();
routes.use('/denunciations', denunciations_routes_1.default);
routes.use('/states', states_routes_1.default);
routes.use('/cities', cities_routes_1.default);
routes.use('/usersCreate', usersCreate_routes_1.default);
routes.use('/sessions', sessions_routes_1.default);
exports.default = routes;
