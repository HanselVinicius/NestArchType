import { UserEntity } from "./UserEntity";

export class UserRepository {
  public  getUser(): UserEntity {
    return new UserEntity(1, 'John Doe');
  }
}