import type { NextPage } from "next";
import { AddPostForm, PostsList, UsersList } from "@/components";
import { useEffect, useMemo, useState } from "react";
import { client } from "@/client";
import { ShortPostData, User } from "@/types";
import { useUser } from "@/context";

const Home: NextPage = () => {
  const { user, addToFollowing, removeFromFollowing, addPost } = useUser();
  const [posts, setPosts] = useState<ShortPostData[]>([]);
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    client.getUsers().then(setUsers);
    client.getPosts().then(setPosts);
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

  return (
    <div className="grid lg:grid-cols-3 gap-8 items-start">
      <div className="lg:col-span-2 grid gap-4">
        <AddPostForm handler={addPost} />
        <PostsList posts={posts} />
      </div>
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
