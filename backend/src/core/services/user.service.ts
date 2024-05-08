import { CreateUserDto } from "../repositories/dto/user.dto";
import { UserRepository } from "../repositories/user.repository";


class UserService {
  constructor(readonly userRepository: UserRepository) {}

  create(dto: CreateUserDto) {
    return this.userRepository.create(dto);
  }
}

export { UserService };
