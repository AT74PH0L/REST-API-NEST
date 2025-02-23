import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Users } from './entities/users.entity';
import { createUser } from './dto/createUser.dto';
import { updateUser } from './dto/updateUser.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users) private readonly userRepository: typeof Users,
  ) {}

  async getUsers() {
    return await this.userRepository.findAll();
  }

  async getUser(userId: string) {
    return await this.userRepository.findOne({ where: { id: userId } });
  }

  createUser = async (userBody: createUser) => {
    return await this.userRepository.create({
      fname: userBody.fname,
      lname: userBody.lname,
      age: userBody.age,
    });
  };

  putUser = async (userBody: updateUser, id: string) => {
    const user = await this.userRepository.findOne({
      where: { id: id },
    });
    if (user != null) {
      return await user.update({
        fname: userBody.fname,
        lname: userBody.lname,
        age: userBody.age,
      });
    } else {
      console.log("Can't find user or the user is not found");
      return "Can't find user or the user is not found";
    }
  };

  patchUser = (userBody: object) => {
    return userBody;
  };

  deleteUser = async (userId: string) => {
    const user = await this.userRepository.findOne({
      where: { id: userId },
    });
    return await user?.destroy();
  };
}
