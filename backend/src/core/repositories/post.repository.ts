import { Post } from "../entities/post.entitie";
import { CreatePostDto, UpdatePostDto } from "./dto/post.dto";

interface PostRepository {
  create(dto: CreatePostDto): Post;
  update(dto: UpdatePostDto): Post;
  delete(id: number): void;
  getAll(): Post[];
}

export { PostRepository };
