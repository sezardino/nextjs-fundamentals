import Link from "next/link";

interface Props extends React.HTMLProps<HTMLDivElement> {
  isBold?: boolean;
  name: string;
  username: string;
  userId: number;
}

export const UserData: React.FC<Props> = (props) => {
  const { isBold, name, username, userId, className, ...rest } = props;

  return (
    <div className="grid gap-1">
      <Link href={`/users/${userId}`}>
        <a>
          <span className={`text-gray-800 mr-2 ${isBold ? "font-bold" : ""}`}>
            {name}
          </span>
        </a>
      </Link>
      <small className="text-sm text-gray-600">{username}</small>
    </div>
  );
};
