import type { NextPage } from "next";
import { AddDreamForm, UsersList } from "@/components";
import { useEffect, useMemo, useState } from "react";
import { client } from "@/client";
import { User } from "@/types";
import { useUser } from "@/context";

const Home: NextPage = () => {
  const { user, addToFollowing, removeFromFollowing } = useUser();
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    client.getUsers().then(setUsers);
  }, []);

  const followedUsers = useMemo<User[]>(() => {
    if (!users) {
      return [];
    }

    return users.filter((item) => user.follows.includes(item.id));
  }, [users, user]);

  const notFollowedUsers = useMemo<User[]>(() => {
    if (!users) {
      return [];
    }

    return users.filter((item) => !user.follows.includes(item.id)).slice(0, 5);
  }, [users, user]);

  const h = (id: number) => console.log(id);

  return (
    <div className="grid lg:grid-cols-3 gap-8 items-start">
      <AddDreamForm className="lg:col-span-2" />
      <div className="-order-1 lg:order-1 grid gap-8">
        {followedUsers.length ? (
          <UsersList
            title="Following"
            users={followedUsers}
            label="Unfolow"
            handler={removeFromFollowing}
          />
        ) : null}
        {notFollowedUsers.length ? (
          <UsersList
            title="Who to follow"
            users={notFollowedUsers}
            label="Follow"
            handler={addToFollowing}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Home;
