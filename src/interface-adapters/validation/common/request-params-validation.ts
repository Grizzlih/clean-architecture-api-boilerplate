import { RequestValidationError } from '~/application/errors/request-validation-error';
import { RequestModel } from '~/application/ports/request/request-model';
import { ValidationComposite } from '~/application/ports/validators/validation-composite';

export class RequestParamsValidation extends ValidationComposite {
  async validate(request: RequestModel): Promise<void | never> {
    if (!request.params) {
      throw new RequestValidationError('Missing params');
    }
  }
}
