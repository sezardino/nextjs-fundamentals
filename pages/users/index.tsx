import { client } from "@/client";
import { Avatar, Tabs, UserData } from "@/components";
import { useUser } from "@/context";
import { User } from "@/types";
import { GetStaticProps, NextPage } from "next";
import { useMemo } from "react";

interface Props {
  users: User[];
}

const Users: NextPage<Props> = (props) => {
  const { users } = props;
  const { user } = useUser();

  const followingUsers = useMemo<User[]>(() => {
    return users.filter((item) => user.follows.includes(item.id));
  }, [user.follows]);

  return (
    <>
      <h1 className="text-4xl">Users</h1>
      <Tabs labels={["all", "you are follow"]}>
        <ul className="mt-8 grid gap-x-5 gap-y-10 sm:grid-cols-2 md:grid-cols-3">
          {users.map((user) => (
            <li
              key={user.id}
              className="grid gap-2 items-center grid-cols-[auto_1fr]"
            >
              <Avatar name={user.name} userId={user.id} />
              <UserData
                userId={user.id}
                username={user.username}
                name={user.name}
              />
            </li>
          ))}
        </ul>
        <ul className="mt-8 grid gap-x-5 gap-y-10 sm:grid-cols-2 md:grid-cols-3">
          {followingUsers.map((user) => (
            <li
              key={user.id}
              className="grid gap-2 items-center grid-cols-[auto_1fr]"
            >
              <Avatar name={user.name} userId={user.id} />
              <UserData
                userId={user.id}
                username={user.username}
                name={user.name}
              />
            </li>
          ))}
        </ul>
      </Tabs>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props, {}> = async () => {
  const users = await client.getUsers();

  return { props: { users } };
};

export default Users;
