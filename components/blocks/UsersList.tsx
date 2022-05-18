import { Avatar, UserData, Button } from "@/components";
import { User } from "@/types";

interface Props extends React.HTMLProps<HTMLDivElement> {
  users: User[];
  title: string;
  handler: (id: number) => void;
  label: string;
}

export const UsersList: React.FC<Props> = (props) => {
  const { users, title, className, handler, label, ...rest } = props;

  return (
    <div {...rest} className={`bg-white rounded-lg shadow ${className}`}>
      <h3 className="font-bold text-gray-800 px-6 py-3 border-b border-gray-200">
        {title}
      </h3>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            className="px-6 py-3 border-b border-gray-200 last:border-none flex w-full"
          >
            <Avatar
              name={user.name}
              userId={user.id}
              className="flex-shrink-0 mr-5"
            />
            <div className="flex-1 flex flex-row justify-between items-center">
              <UserData
                name={user.name}
                userId={user.id}
                username={user.username}
              />
              <Button variant="secondary" onClick={() => handler(user.id)}>
                {label}
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
