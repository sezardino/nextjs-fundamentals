import { User } from "@/types";
import { useMemo } from "react";
import { Avatar } from "../UI";

interface Props extends React.HTMLProps<HTMLDivElement> {
  user: User;
}

export const UserProfile: React.FC<Props> = (props) => {
  const { user, className, ...rest } = props;

  const userData = useMemo(() => {
    return [
      { label: "Name", value: user.name },
      { label: "Email", value: user.email },
      { label: "Phone", value: user.phone },
      { label: "Address", value: Object.values(user.address) },
      { label: "Company", value: Object.values(user.company) },
      { label: "Website", value: user.website },
    ];
  }, [user]);

  return (
    <div
      {...rest}
      className={`grid gap-5 md:grid-cols-[auto_1fr] ${className}`}
    >
      <Avatar
        name={user.name}
        href="#"
        userId={user.id}
        variant="large"
        className="hidden md:inline-flex"
      />
      <table className="">
        {userData.map((item) => (
          <tr key={item.label}>
            <th className="capitalize align-top text-left">{item.label}:</th>
            <td>
              {Array.isArray(item.value) ? item.value.join(", ") : item.value}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};
