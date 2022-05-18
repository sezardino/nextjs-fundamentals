import { Comment as IComment } from "@/types";

import QuoteIcon from "@/assets/icons/quote.svg";

interface Props extends React.HTMLProps<HTMLDivElement> {
  comment: IComment;
}

export const Comment: React.FC<Props> = (props) => {
  const { className, comment, ...rest } = props;

  return (
    <div
      {...rest}
      className={`h-full w-full bg-gray-100 p-8 rounded ${className}`}
    >
      <div className="grid gap-5 grid-cols-[auto_auto] justify-start items-center">
        <QuoteIcon class="block w-5 h-5 text-gray-400" />
        <h4 className="text-lg font-semibold capitalize">{comment.name}</h4>
      </div>
      <div className="mt-6">
        <p className="leading-relaxed ">{comment.body}</p>
        <p className="mt-6 title-font font-medium text-gray-900">
          author: {comment.email}
        </p>
      </div>
    </div>
  );
};
