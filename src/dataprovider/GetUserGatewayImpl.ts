import { User } from 'src/core/entity/User'
import { GetUserGateway } from 'src/core/gateway/GetUserGateway'

export class GetUserGatewayImpl implements GetUserGateway {
  getUser() {
    return new User(1, 'John Doe')
  }
}
