import { ShortUserData } from "./user";
import { Comment } from "./comment";

export interface PostInDB {
  userId: number;
  id: number;
  title: string;
  body: string;
  images?: string[];
}

export type Post = Omit<PostInDB, "userId"> & {
  user: ShortUserData;
  comments: Comment[];
};

export type ShortPostData = Omit<PostInDB, "userId"> & {
  user: ShortUserData;
  commentsCount: number;
};
