import { client } from "@/client";
import { Comment } from "@/components";
import { Post } from "@/types";
import { GetServerSideProps, GetStaticPaths, NextPage } from "next";

interface Props {
  post: Post;
}

const Placeholder: NextPage<Props> = (props) => {
  const { post } = props;
  return (
    <div>
      <h1 className="text-4xl capitalize">{post.title}</h1>
      <p className="mt-5 text-xl">{post.body}</p>

      {post.comments.length > 0 ? (
        <div className="mt-10">
          <h3 className="text-xl font-medium">Comments:</h3>
          <ul className="mt-3 grid gap-4">
            {post.comments.map((comment) => (
              <li key={comment.id}>
                <Comment comment={comment} />
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id;

  if (!context.params || !id) {
    return { props: { post: null }, redirect: { destination: "/404" } };
  }

  const post = await client.getPost(new Number(id).valueOf());

  if (!post) {
    return {
      props: { post: null },
      redirect: { permanent: true, destination: "/404" },
    };
  }

  return { props: { post } };
};

export default Placeholder;
