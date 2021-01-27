import { Router } from 'express';
import denunciationsRouter from './denunciations.routes';
import statesRouter from './states.routes';
import citiesRouter from './cities.routes';
import usersCreateRouter from './usersCreate.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();

routes.use('/denunciations', denunciationsRouter);
routes.use('/states', statesRouter);
routes.use('/cities', citiesRouter);
routes.use('/usersCreate', usersCreateRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
