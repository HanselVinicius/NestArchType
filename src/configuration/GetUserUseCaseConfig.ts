import { Module } from '@nestjs/common'
import { GetUserUseCase } from 'src/core/usecase/GetUserUseCase'
import { UserRepository } from 'src/dataprovider/entity/UserRepository'
import { GetUserGatewayImpl } from 'src/dataprovider/GetUserGatewayImpl'
import { AppController } from 'src/entrypoint/app.controller'

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: 'GetUserGateway',
      useFactory: () => new GetUserGatewayImpl(new UserRepository()),
    },
    {
      provide: GetUserUseCase.GetUserUseCase,
      useFactory: (getUserGateway) =>
        new GetUserUseCase.GetUserUseCase(getUserGateway),
      inject: ['GetUserGateway'],
    },
  ],
  exports: [],
})
export class GetUserUseCaseConfig {}
