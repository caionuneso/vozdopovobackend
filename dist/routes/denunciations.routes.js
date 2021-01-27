"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const typeorm_1 = require("typeorm");
const upload_1 = __importDefault(require("../config/upload"));
const denunciation_1 = __importDefault(require("../models/denunciation"));
const ensureAuthenticated_1 = __importDefault(require("../middlewares/ensureAuthenticated"));
// http//:localhost:3333/denunciations
const denunciationsRouter = express_1.Router();
const upload = multer_1.default(upload_1.default);
/* listar Denuncias */
denunciationsRouter.get('/', ensureAuthenticated_1.default, async (request, response) => {
    return response.json(await typeorm_1.getRepository(denunciation_1.default).find());
});
/* Criar Denuncias */
denunciationsRouter.post('/', upload.array('file', 12), async (request, response) => {
    console.log(request.files);
    const images_url = [];
    const files = JSON.parse(JSON.stringify(request.files));
    files.forEach((file) => {
        images_url.push(file.path);
    });
    const denunciationRepository = typeorm_1.getRepository(denunciation_1.default);
    const denunciation = {
        city_id: request.body.city_id,
        description: request.body.description,
        images_url,
    };
    const res = await denunciationRepository.save(denunciation);
    return response.status(201).json(res);
});
/* Deletar Denuncias */
denunciationsRouter.delete('/id', async (request, response) => {
    console.log('hello');
});
/* Alterar Denuncias */
exports.default = denunciationsRouter;
