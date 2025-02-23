import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;
  let usersService: UsersService;

  const mockUsersService = {
    getUser: jest.fn(),
    createUser: jest.fn(),
    putUser: jest.fn(),
    patchUser: jest.fn(),
    deleteUser: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: mockUsersService,
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    usersService = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be defined', () => {
    mockUsersService.getUser.mockResolvedValue('attaphol');

    const result = controller.getUser('attaphol');

    expect(usersService.getUser('aasd')).toHaveBeenCalled();
    expect(result).toEqual('attaphol');
  });

  it('should be post', () => {
    // const mockData = {
    //   id: '6b41d5a4-e9e2-4f1e-bb0f-38c6610c5a42',
    //   fname: 'kuy',
    //   lname: 'B',
    //   age: 9,
    // };
    mockUsersService.createUser.mockResolvedValue({ id: 1 });

    const result = controller.postUser({
      id: '6b41d5a4-e9e2-4f1e-bb0f-38c6610c5a42',
      fname: 'kuy',
      lname: 'B',
      age: 9,
    });

    expect(usersService.createUser).toHaveBeenCalled();
    expect(result).toEqual({ id: 1 });
  });

  it('should be put', () => {
    const obj = {
      id: '1',
    };
    mockUsersService.putUser.mockResolvedValue(obj);

    const result = controller.putUser(obj);

    expect(usersService.putUser).toHaveBeenCalled();
    expect(result).toEqual(obj);
  });

  it('should be patch', () => {
    const obj = {
      id: '1',
    };
    mockUsersService.patchUser.mockResolvedValue(obj);

    const result = controller.patchUser(obj);

    expect(usersService.patchUser).toHaveBeenCalled();
    expect(result).toEqual(obj);
  });

  it('should be del', () => {
    const obj = {
      id: '1',
    };
    mockUsersService.deleteUser.mockResolvedValue(obj);

    const result = controller.deleteUser(obj);

    expect(usersService.deleteUser).toHaveBeenCalled();
    expect(result).toEqual(obj);
  });
});
