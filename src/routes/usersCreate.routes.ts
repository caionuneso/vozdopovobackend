import Router from 'express';

import UsersCreateService from '../services/usersCreateService';

const usersCreateRouter = Router();

interface User {
  username: string;
  password?: string;
  city_id: string;
  id: string;
  created_at: Date;
  updated_at: Date;
}

usersCreateRouter.post('/', async (request, response) => {
  const { username, password, city_id } = request.body;

  const userCreate = new UsersCreateService();
  const user: User = await userCreate.execute({
    username,
    password,
    city_id,
  });
  delete user.password;
  return response.status(200).json(user);
});

export default usersCreateRouter;
