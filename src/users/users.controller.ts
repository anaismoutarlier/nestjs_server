import { Controller, Post, Body, Get, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { Request as ExpressRequest } from 'express';
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('profile')
  async getProfile(@Request() req: ExpressRequest & { user?: UserPayload }) {
    console.log(req.user);
    return await this.usersService.getProfile(req.user);
  }

  @Post('signin')
  async signinUser(@Body() body: { password: string; email: string }) {
    return await this.usersService.signinUser(body);
  }
}
