import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { createUser } from './dto/createUser.dto';
import { updateUser } from './dto/updateUser.dto';

@Controller('/users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Get(':id')
  getUser(@Param('id') userId: string): object {
    return this.userService.getUser(userId);
  }

  @Post('postUser')
  postUser(@Body() userBody: createUser): object {
    return this.userService.createUser(userBody);
  }

  @Put('putUser/:id')
  putUser(@Body() userBody: updateUser, @Param('id') id: string): object {
    return this.userService.putUser(userBody, id);
  }

  @Patch('patchUser')
  patchUser(@Body() userBody: object): object {
    return this.userService.patchUser(userBody);
  }

  @Delete('deleteUser/:id')
  deleteUser(@Param('id') userId: string): object {
    return this.userService.deleteUser(userId);
  }
}
