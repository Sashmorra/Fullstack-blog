

class CreateUserDto {
  constructor(
    readonly name: string,
    readonly email: string,
    readonly password: string,
    readonly token: string
  ) {}
}

export { CreateUserDto };
