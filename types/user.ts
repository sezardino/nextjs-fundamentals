import { Post } from "./post";

export interface Geolocation {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geolocation;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export type UserData = User & {
  follows: number[];
  posts: Post[];
};

export type ShortUserData = Pick<User, "name" | "username" | "id">;
