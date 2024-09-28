import { User } from '../entity/User'

export interface GetUserGateway {
  getUser(): User
}
