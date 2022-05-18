import { Link } from "@/types";
import LinkComponent from "next/link";

interface Props extends React.HTMLProps<HTMLUListElement> {}

export const Navigation: React.FC<Props> = (props) => {
  const navList: Link[] = [
    { href: "/profile", text: "Profile" },
    { href: "/albums", text: "Albums" },
    { href: "/", text: "Posts" },
    { href: "/todo", text: "Todo's" },
    { href: "users", text: "Users" },
  ];

  return (
    <ul
      className={`relative after:w-px after:h-full after:absolute after:top-0 after:right-0 after:bg-blue-400 ${props.className}`}
    >
      {navList.map((link, index) => (
        <li key={`${link.href}-${index}`}>
          <LinkComponent href={link.href}>
            <a className="text-blue-400 px-4 py-1 inline-block">{link.text}</a>
          </LinkComponent>
        </li>
      ))}
    </ul>
  );
};
