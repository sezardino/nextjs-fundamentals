import { client } from "@/client";
import { PostsList, Tabs, UserProfile } from "@/components";
import { TodoList } from "@/components/blocks/TodoList";
import { ShortPostData, Todo, User } from "@/types";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

interface Props {
  user: User;
  posts: ShortPostData[];
  todos: Todo[];
}

const UserID: NextPage<Props> = (props) => {
  const { user, posts, todos } = props;

  return (
    <>
      <UserProfile user={user} />
      <Tabs labels={["posts", "todos"]}>
        <PostsList posts={posts} />
        <TodoList todoList={todos} />
      </Tabs>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const users = await client.getUsers();

  return {
    paths: users.map((user) => ({ params: { id: user.id.toString() } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, { id: string }> = async (
  context
) => {
  const { params } = context;

  if (!params || !params.id) {
    return {
      props: { user: {} as User, posts: [], todos: [] },
      redirect: { destination: "/404" },
    };
  }

  const user = await client.getUser(new Number(params.id).valueOf());
  const posts = await client.getPostsByUserId(user.id);
  const todos = await client.getUserTodos(user.id);

  return { props: { user, posts, todos } };
};

export default UserID;
