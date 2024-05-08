import { User } from "../entities/user.entitie"
import { CreateUserDto } from "./dto/user.dto"


interface UserRepository {
  create(dto: CreateUserDto): User;
  delete(id: number): void;
  getAll(): User[];
}

export { UserRepository }
