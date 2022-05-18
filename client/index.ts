import {
  Album,
  Photo,
  Post,
  PostInDB,
  ShortPostData,
  ShortUserData,
  Todo,
  User,
  Comment,
} from "@/types";

export class Client {
  constructor(private readonly clientURL: string) {}

  private async get<T>(url: string): Promise<T> {
    const response = await fetch(`${this.clientURL}/${url}`);
    return await response.json();
  }

  public async getPosts(): Promise<ShortPostData[]> {
    const data = await Promise.all([
      this.getUsers(),
      this.get<PostInDB[]>("posts"),
      this.getComments(),
    ]);

    const users = data[0];
    const posts = data[1];
    const comments = data[2];

    const mappedPosts = posts.map((post) => {
      const user = users.find((user) => user.id === post.userId);

      return {
        ...post,
        user: {
          id: user!.id,
          name: user!.name,
          username: user!.username,
        },
        commentsCount: comments.filter((comment) => comment.postId === post.id)
          .length,
      };
    });

    return mappedPosts;
  }

  public async getUsers(limit?: number): Promise<User[]> {
    const limitString = `?_limit=${limit}`;

    return await this.get<User[]>(`users${limit ? limitString : ""}`);
  }

  public async getAlbums(): Promise<Album[]> {
    return await this.get<Album[]>("albums");
  }

  public async getPhotos(): Promise<Photo[]> {
    return await this.get<Photo[]>("photos");
  }

  public async getComments(): Promise<Comment[]> {
    return await this.get<Comment[]>("comments");
  }

  public async getTodos(): Promise<Todo[]> {
    return await this.get<Todo[]>("todos");
  }

  public async getCommentsForPost(postId: number): Promise<Comment[]> {
    return await this.get<Comment[]>(`comments?postId=${postId}`);
  }

  public async getPostsByUserId(userId: number): Promise<ShortPostData[]> {
    const posts = await this.get<PostInDB[]>(`posts?userId=${userId}`);

    const mappedPosts = await Promise.all(
      posts.map(async (post) => {
        const comments = await this.getCommentsForPost(post.id);
        const { id, username, name } = await this.getUser(post.userId);

        return {
          ...post,
          commentsCount: comments.length,
          user: { name, username, id },
        };
      })
    );

    return mappedPosts;
  }

  public async getUser(id: number): Promise<User> {
    return await this.get<User>(`users/${id}`);
  }

  public async getPost(id: number): Promise<Post> {
    const post = await this.get<PostInDB>(`posts/${id}`);
    const userData = await this.getUser(post.userId);
    const comments = await this.getCommentsForPost(id);

    const user: ShortUserData = {
      id: userData.id,
      name: userData.name,
      username: userData.username,
    };

    return { ...post, user, comments };
  }

  public async getUserTodos(id: number): Promise<Todo[]> {
    return await this.get<Todo[]>(`todos?userId=${id}`);
  }
}

export const client = new Client(process.env.NEXT_PUBLIC_API_URL || "");
