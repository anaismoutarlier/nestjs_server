import { Request, Response, NextFunction } from 'express';
import {
  UnauthorizedException,
  NestMiddleware,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private jwtService: JwtService) {}

  async use(
    req: Request & { user?: UserPayload },
    _: Response,
    next: NextFunction,
  ) {
    const authHeader = req.headers['authorization'];
    const [type, token] = authHeader?.split(' ') || [];
    if (type !== 'Token' || !token) throw new UnauthorizedException();

    try {
      const payload = await this.jwtService.verifyAsync(token);
      console.log(payload);
      req.user = payload;
      next();
    } catch (error) {
      console.error(error);
      throw new UnauthorizedException();
    }
  }
}

/* export function getAuth(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization'];
    const [type, token] = authHeader?.split(' ');
    if (type !== 'Token' || !token) throw new UnauthorizedException();

    try {
      const payload = await this.jwtService.verifyAsync(token);
      console.log(payload);
      req.user = payload;
      next();
    } catch (error) {
      console.error(error);
      throw new UnauthorizedException();
    }
}*/
