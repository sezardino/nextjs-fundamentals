import Link from "next/link";

interface Props extends React.HTMLProps<HTMLAnchorElement> {
  userId: number;
  name: string;
  href?: string;
}

export const Avatar: React.FC<Props> = (props) => {
  const { name, userId, className, href, ...rest } = props;

  const generateAvatar = (name: string): string => {
    return name.split(" ")[0].slice(0, 1) + "" + name.split(" ")[1].slice(0, 1);
  };

  return (
    <Link href={href ? href : `/users/${userId}`}>
      <a
        {...rest}
        className={`font-bold w-12 h-12 bg-gray-300 flex items-center justify-center rounded-full ${className}`}
      >
        <span className="uppercase text-gray-700">{generateAvatar(name)}</span>
      </a>
    </Link>
  );
};
