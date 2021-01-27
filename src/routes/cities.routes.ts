import { Router } from 'express';
import { getRepository } from 'typeorm';
import Cities from '../models/cities';

const citiesRouter = Router();

/* Rota de Criação */
citiesRouter.post('/', async (request, response) => {
  const statesRepositoy = getRepository(Cities);
  const res = await statesRepositoy.save(request.body);
  return response.status(200).json(res);
});
/* Rota para listar */
citiesRouter.get('/', async (request, response) => {
  return response.json(await getRepository(Cities).find());
});

export default citiesRouter;
