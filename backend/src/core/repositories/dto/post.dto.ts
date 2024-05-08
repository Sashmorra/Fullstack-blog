
class CreatePostDto {
  constructor(
    readonly title: string,
    readonly text: string,
    readonly data: number,
    readonly authorId: number
  ) {}
}

class UpdatePostDto {
  constructor(
    readonly id: number,
    readonly title: string,
    readonly text: string,
    readonly data: number,
    readonly authorId: number
  ) {}
}
export { CreatePostDto, UpdatePostDto };

