import { UserData } from "@/types";
import React, { useDeferredValue, useEffect } from "react";
import { userContext } from "./context";

const initialUser: UserData = {
  id: 11,
  posts: [],
  follows: [],
  email: "",
  username: "",
  name: "User Name",
  phone: "",
  website: "",
  company: {
    name: "",
    bs: "",
    catchPhrase: "",
  },
  address: {
    city: "",
    geo: {
      lat: "",
      lng: "",
    },
    street: "",
    suite: "",
    zipcode: "",
  },
};

interface Props {
  children: React.ReactNode;
}

export const UserProvider: React.FC<Props> = (props) => {
  const [user, setUser] = React.useState<UserData>(initialUser);
  const prevUserData = useDeferredValue(user);

  const updateField = (field: keyof UserData, value: any) => {
    if (!user) {
      return;
    }

    setUser({
      ...user,
      [field]: value,
    });
  };

  useEffect(() => {
    if (!localStorage.user) {
      setUser(initialUser);
      localStorage.user = JSON.stringify(user);
      return;
    }

    setUser(JSON.parse(localStorage.user));
  }, []);

  useEffect(() => {
    if (prevUserData === user) {
      return;
    }

    localStorage.user = JSON.stringify(user);
  }, [user]);

  return (
    <userContext.Provider value={{ user, updateField }}>
      {props.children}
    </userContext.Provider>
  );
};
