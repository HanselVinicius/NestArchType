import { Controller, Get, Inject } from '@nestjs/common'
import { User } from 'src/core/entity/User'
import { GetUserUseCase } from 'src/core/usecase/GetUserUseCase'

@Controller()
export class AppController {
  constructor(
    @Inject(GetUserUseCase.GetUserUseCase)
    private readonly getUserUseCase: GetUserUseCase.GetUserUseCase,
  ) {}

  @Get()
  getHello(): User {
    return this.getUserUseCase.execute()
  }
}
