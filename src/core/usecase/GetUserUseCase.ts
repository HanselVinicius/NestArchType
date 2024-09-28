import { User } from '../entity/User'
import { GetUserGateway } from '../gateway/GetUserGateway'

export namespace GetUserUseCase {
  export class GetUserUseCase {
    constructor(private readonly getUserGateway: GetUserGateway) {}

    execute(): User {
      return this.getUserGateway.getUser()
    }
  }
}
