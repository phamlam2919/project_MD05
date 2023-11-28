import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { Role } from '../../enums/role.enum';
import { Roles } from '../../decorators/role.decorator';
import { AuthGuard } from '../../guards/auth.guard';

@Controller('/api/v1/users')
export class UserController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUser(): Promise<any[]> {
    return this.usersService.getAllUser();
  }
  @Get('/:id')
  @Roles(Role.Admin)
  @UseGuards(AuthGuard)
  getUserById(@Param('id') id: string) {
    return this.usersService.getUserByIdService(Number(id));
  }
  @Get('/email/:email')
  getByEmail(@Param('email') email: string) {
    return this.usersService.getByEmail(email);
  }
}
