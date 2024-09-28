import { User } from "src/core/entity/User";
import { UserEntity } from "src/dataprovider/entity/UserEntity";

export class UserMapper{
   static toUserCore(user:UserEntity){
        return new User(user.id, user.name)
    }
}