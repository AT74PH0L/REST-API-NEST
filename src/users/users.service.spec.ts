import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '../database/database.module';
import { Users } from './entities/users.entity';
import { createUser } from './dto/createUser.dto';
import { SequelizeModule } from '@nestjs/sequelize';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        DatabaseModule,
        SequelizeModule.forFeature([Users]),
      ],
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getUsers', () => {
    it('should return all users', async () => {
      const result = await service.getUsers();
      console.log(result);
      expect(Array.isArray(result)).toBe(true);
      expect(result.every((user) => user instanceof Users)).toBe(true);
    });
  });

  describe('createUser', () => {
    it('should return the user after create user', async () => {
      const mockUser: createUser = {
        fname: 'mock',
        lname: 'mock',
        age: 1,
      };

      const expectUser = {
        id: expect.any(String) as string,
        fname: 'mock',
        lname: 'mock',
        age: 1,
      };
      const result = await service.createUser(mockUser);
      expect(result).toMatchObject(expectUser);
    });
  });

  describe('putUser', () => {
    it('should update user', async () => {
      const mockUser: createUser = {
        fname: 'mock',
        lname: 'mock',
        age: 1,
      };

      const mockUpdateUser: createUser = {
        fname: 'mockkkk',
        lname: 'mockkkk',
        age: 2,
      };

      const result = await service.createUser(mockUser);
      const update = await service.putUser(mockUpdateUser, result.id);
      expect(update).toMatchObject(mockUpdateUser);
    });
  });
});
