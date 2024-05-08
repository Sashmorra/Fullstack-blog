import { CreateUserDto } from "../repositories/dto/user.dto";
import { UserService } from "./user.service";

class AuthService {
  constructor(readonly userService: UserService) {}

  registration(dto: CreateUserDto) {
    const candidate = this.userService.findByEmail(dto.email);
    if (candidate) {

    }
  }
}

export { AuthService }
