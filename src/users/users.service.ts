import { Injectable } from '@nestjs/common';
import { users } from './users.mock';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  users: User[];
  constructor(private jwtService: JwtService) {
    this.users = users;
  }

  async getProfile(payload: UserPayload) {
    const user =
      this.users.find((user) => user.email === payload.email) || null;

    return { user };
  }

  async signinUser(body: { email: string; password: string }) {
    const { email, password } = body;
    const user =
      this.users.find(
        (user) => user.email === email && user.password === password,
      ) || null;

    const payload = {
      username: user.username,
      email: user.email,
      type: user.type,
    };
    const accessToken = await this.jwtService.signAsync(payload);
    console.log(accessToken);
    return { accessToken };
  }
}
