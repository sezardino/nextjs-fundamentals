import { Album, Photo, Post, Todo, User } from "@/types";

export class Client {
  constructor(private readonly clientURL: string) {}

  private async get<T>(url: string): Promise<T> {
    const response = await fetch(`${this.clientURL}/${url}`);
    return await response.json();
  }

  public async getPosts(): Promise<Post[]> {
    return await this.get<Post[]>("posts");
  }

  public async getUsers(): Promise<User[]> {
    return await this.get<User[]>("users");
  }

  public async getAlbums(): Promise<Album[]> {
    return await this.get<Album[]>("albums");
  }

  public async getPhotos(): Promise<Photo[]> {
    return await this.get<Photo[]>("photos");
  }

  public async getTodos(): Promise<Todo[]> {
    return await this.get<Todo[]>("todos");
  }
}

export const client = new Client(process.env.NEXT_PUBLIC_API_URL || "");
