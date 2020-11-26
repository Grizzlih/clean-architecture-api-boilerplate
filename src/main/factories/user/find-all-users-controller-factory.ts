import { FindAllUsers } from '~/application/use-cases/user/find-all-users';
import { UserEntity } from '~/domain/user/entities/user';
import { findAllUsersRepository } from '~/infrastructure/repositories/user/user-default-repository';
import { FindAllUsersController } from '~/interface-adapters/controllers/user/find-all-users-controller';
import { GenericSuccessPresenter } from '~/interface-adapters/presenters/responses/generic/generic-success-presenter';
import { FindAllUsersQueryValidation } from '~/interface-adapters/validation/user/single-validations/find-all-users-query-validation';

export const findAllUsersControllerFactory = () => {
  const findAllUsersUseCase = new FindAllUsers(findAllUsersRepository);
  const findAllUsersValidation = new FindAllUsersQueryValidation();
  const genericSuccessPresenter = new GenericSuccessPresenter<UserEntity[]>();
  const findAllUsersController = new FindAllUsersController(
    findAllUsersUseCase,
    findAllUsersValidation,
    genericSuccessPresenter,
  );

  return {
    findAllUsersController,
    findAllUsersUseCase,
    findAllUsersValidation,
    genericSuccessPresenter,
  };
};
