import { UserData } from "@/types";
import { useContext } from "react";
import { userContext } from "./context";

interface UseUser {
  user: UserData;
  updateField: (field: keyof UserData, value: any) => void;
  addToFollowing: (id: number) => void;
  removeFromFollowing: (id: number) => void;
}

export const useUser = (): UseUser => {
  const { updateField, user } = useContext(userContext);

  const addToFollowing = (id: number) => {
    console.log(id);
    updateField("follows", [...user.follows, id]);
  };
  const removeFromFollowing = (id: number) => {
    updateField(
      "follows",
      user.follows.filter((follow) => follow !== id)
    );
  };

  return { user, updateField, addToFollowing, removeFromFollowing };
};
