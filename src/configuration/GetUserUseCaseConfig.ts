import { Module } from '@nestjs/common'
import { AppController } from 'src/app.controller'
import { GetUserUseCase } from 'src/core/usecase/GetUserUseCase'
import { GetUserGatewayImpl } from 'src/dataprovider/GetUserGatewayImpl'

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: 'GetUserGateway',
      useFactory: () => new GetUserGatewayImpl(),
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
