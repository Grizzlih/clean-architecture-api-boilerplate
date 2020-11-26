import { FindAllUsersRepository } from '~/application/ports/repositories/user/find-all-users-repository';
import { FindAllUsersUseCase } from '~/domain/user/use-cases/find-all-users-use-case';
import { User } from '~/domain/user/entities/user';

export class FindAllUsers implements FindAllUsersUseCase {
  constructor(
    private readonly findAllUsersRepository: FindAllUsersRepository,
  ) {}

  async findAll(
    order: 'desc' | 'asc' = 'desc',
    limit = 100,
    offset = 0,
  ): Promise<User[]> {
    const users = await this.findAllUsersRepository.find(order, limit, offset);
    return users;
  }
}
