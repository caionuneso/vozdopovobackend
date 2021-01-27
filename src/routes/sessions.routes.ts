import Router from 'express';
import AuthenticateUserService from '../services/authenticateUserService';
import {} from 'typeorm';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { username, password } = request.body;

  const authenticateUserService = new AuthenticateUserService();

  const { user, token } = await authenticateUserService.execute({
    username,
    password,
  });

  delete user.password;

  return response.status(200).json({ user, token });
});

export default sessionsRouter;
