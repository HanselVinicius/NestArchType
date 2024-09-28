import { Inject } from '@nestjs/common'
import { GetUserGateway } from 'src/core/gateway/GetUserGateway'
import { UserRepository } from './entity/UserRepository'
import { UserMapper } from 'src/shared/UserMapper'

export class GetUserGatewayImpl implements GetUserGateway {

  constructor(@Inject() private userRepository:UserRepository) {}

  getUser() {
    return UserMapper.toUserCore(this.userRepository.getUser())
  }
}
