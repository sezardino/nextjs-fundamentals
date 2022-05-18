import { Post } from "@/types";

import CommentsIcon from "@/assets/icons/message.svg";
import { Avatar, UserData } from "@/components";
import Link from "next/link";

interface Props extends React.HTMLProps<HTMLUListElement> {
  posts: Post[];
}

export const PostsList: React.FC<Props> = (props) => {
  const { posts } = props;

  return (
    <ul className="bg-white rounded-lg shadow mb-8">
      {posts.map((post) => (
        <li key={post.id} className="px-6 py-5 grid gap-3 border-b">
          <header className="flex gap-2">
            <Avatar
              name={post.user.name}
              userId={post.user.id}
              className="flex-shrink-0 mr-5"
            />
            <UserData
              isBold
              name={post.user.name}
              userId={post.user.id}
              username={post.user.username}
            />
          </header>
          <div className="flex-1">
            <p className="text-gray-700">{post.body}</p>
            {post.images ? (
              <div
                className="relative w-auto mb-2 border rounded-lg bg-gray-100 lg:mb-4 shadow-inset overflow-hidden"
                x-show="tweet.tweet_images.length > 0"
              >
                {post.images.map((image, index) => (
                  <img
                    key={index}
                    className="object-cover w-full"
                    src={image}
                  />
                ))}
              </div>
            ) : null}
            <footer className="flex w-full mt-4 items-center">
              <Link href={`/${post.id}`}>
                <a
                  aria-label="open comments in another page"
                  className="flex items-center gap-2"
                >
                  <span className="cursor-pointer hover:bg-gray-200 inline-flex p-2 rounded-full duration-200 transition-all ease-in-out">
                    <CommentsIcon className="h-6 w-6 text-gray-500" />
                  </span>
                  <small className="text-sm ml-1 leading-none inline-flex">
                    {post.commentsCount}
                  </small>
                </a>
              </Link>
            </footer>
          </div>
        </li>
      ))}
    </ul>
  );
};
