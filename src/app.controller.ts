import { Controller, Get, Inject } from '@nestjs/common'
import { User } from './core/entity/User'
import { GetUserUseCase } from './core/usecase/GetUserUseCase'

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
