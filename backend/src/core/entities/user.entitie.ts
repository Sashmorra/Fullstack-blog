
class User {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly email: string,
    readonly password: string,
    readonly token: string,
    readonly roles: string[]
  ) {}
}

export { User };
