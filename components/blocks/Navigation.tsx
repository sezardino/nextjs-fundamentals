import { Link } from "@/types";

interface Props extends React.HTMLProps<HTMLUListElement> {}

export const Navigation: React.FC<Props> = (props) => {
  const navList: Link[] = [
    { href: "#", text: "Profile" },
    { href: "#", text: "Albums" },
    { href: "#", text: "Posts" },
    { href: "#", text: "Todo's" },
    { href: "#", text: "Users" },
  ];

  return (
    <ul
      className={`relative after:w-px after:h-full after:absolute after:top-0 after:right-0 after:bg-blue-400 ${props.className}`}
    >
      {navList.map((link, index) => (
        <li key={`${link.href}-${index}`}>
          <a href={link.href} className="text-blue-400 px-4 py-1 inline-block">
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  );
};
