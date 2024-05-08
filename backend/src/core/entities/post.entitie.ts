
class Post  {
  constructor(
    readonly id: number,
    readonly title: string,
    readonly text: string,
    readonly data: number,
    readonly authorId: number
  ) {}
}

export { Post };
