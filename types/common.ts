export interface Link {
  href: string;
  text: string;
}

export interface CreatePostDto {
  body?: string;
  images?: string[];
}
