import { generateAvatarFromName } from "@/helpers";
import { User } from "../../types";

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
            className="px-6 py-3 border-b border-gray-200 last:border-none"
          >
            <div className="flex w-full">
              <div className="flex-shrink-0 mr-5">
                <div className="cursor-pointer font-bold w-12 h-12 bg-gray-300 flex items-center justify-center rounded-full">
                  <span className="uppercase text-gray-700">
                    {generateAvatarFromName(user.name)}
                  </span>
                </div>
              </div>
              <div className="flex-1 flex flex-row justify-between items-center">
                <div>
                  <p className="text-gray-700">{user.name}</p>
                  <p className="text-gray-500">{user.username}</p>
                </div>
                <div>
                  <button
                    className="focus:outline-none py-1 px-4 rounded-full shadow-sm text-center text-blue-600 bg-white hover:bg-blue-100 font-medium border border-blue-200"
                    onClick={() => handler(user.id)}
                  >
                    {label}
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
