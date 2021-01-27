import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import UserCreate from '../models/usersCreate';
import AppError from '../errors/AppError';

interface Request {
  username: string;
  password: string;
  city_id: string;
}

class CreateUserService {
  public async execute({
    username,
    password,
    city_id,
  }: Request): Promise<UserCreate> {
    const usersCreateRepository = getRepository(UserCreate);

    const checkUsersCreateExists = await usersCreateRepository.findOne({
      where: { username },
    });

    if (checkUsersCreateExists) {
      throw new AppError('Username alredy used');
    }

    const hashedPassword = await hash(password, 8);

    const userCreate = usersCreateRepository.create({
      username,
      password: hashedPassword,
      city_id,
    });

    await usersCreateRepository.save(userCreate);

    return userCreate;
  }
}

export default CreateUserService;
