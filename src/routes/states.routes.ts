import { Router } from 'express';
import { getRepository } from 'typeorm';
import State from '../models/states';

const statesRouter = Router();

/* Rota de Criação */
statesRouter.post('/', async (request, response) => {
  const statesRepositoy = getRepository(State);
  const res = await statesRepositoy.save(request.body);
  return response.status(200).json(res);
});
/* Rota para listar */
statesRouter.get('/', async (request, response) => {
  return response.json(await getRepository(State).find());
});

export default statesRouter;
