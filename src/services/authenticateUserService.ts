import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import authConfig from '../config/auth';
import UserCreate from '../models/usersCreate';
import AppError from '../errors/AppError';

interface Request {
  username: string;
  password: string;
}

interface Response {
  user: UserCreate;
  token: string;
}

class AuthenticateUserService {
  public async execute({ username, password }: Request): Promise<Response> {
    const usersCreatedRepository = getRepository(UserCreate);

    const user = await usersCreatedRepository.findOne({ where: { username } });

    if (!user) {
      throw new AppError('incorrect email/password combination', 401);
    }

    /* user.password = senha criptografada */
    /* password = senha não criptografada */

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new AppError('incorrect email/password combination', 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    return {
      user,
      token,
    };
  }
}

export default AuthenticateUserService;
