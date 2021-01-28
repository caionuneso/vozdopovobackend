import { Router } from 'express';

import multer from 'multer';
import { getRepository } from 'typeorm';
import uploadConfig from '../config/upload';

import Denunciation from '../models/denunciation';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

// http//:localhost:3333/denunciations
const denunciationsRouter = Router();

const upload = multer(uploadConfig);

/* listar Denuncias */
denunciationsRouter.get('/', ensureAuthenticated, async (request, response) => {
  return response.json(await getRepository(Denunciation).find());
});
/* Criar Denuncias */
denunciationsRouter.post(
  '/',
  upload.array('file', 12),
  async (request, response) => {
    console.log(request.files);
    const images_url: string[] = [];
    const files = JSON.parse(JSON.stringify(request.files));
    files.forEach((file: Express.MulterS3.File) => {
      images_url.push(file.location);
    });

    const denunciationRepository = getRepository(Denunciation);

    const denunciation = {
      city_id: request.body.city_id,
      description: request.body.description,
      images_url,
    };

    const res = await denunciationRepository.save(denunciation);

    return response.status(200).json(res);
  },
);
/* Deletar Denuncias */
denunciationsRouter.delete('/id', async (request, response) => {
  console.log('hello');
});
/* Alterar Denuncias */

export default denunciationsRouter;
