import { Module } from '@nestjs/common'
import { GetUserUseCaseConfig } from './configuration/GetUserUseCaseConfig'

@Module({
  imports: [GetUserUseCaseConfig],
  controllers: [],
  providers: [],
})
export class AppModule {}
