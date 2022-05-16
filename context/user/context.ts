import { UserData } from "@/types";
import { createContext } from "react";

export interface UserContext {
  user: UserData;
  updateField: (field: keyof UserData, value: any) => void;
}

export const userContext = createContext<UserContext>({} as UserContext);
