import Link from "next/link";

interface Props extends React.HTMLProps<HTMLAnchorElement> {
  userId: number;
  name: string;
  href?: string;
  variant?: "small" | "medium" | "large";
}

export const Avatar: React.FC<Props> = (props) => {
  const { name, userId, className, href, variant = "small", ...rest } = props;

  const generateAvatar = (name: string): string => {
    return name.split(" ")[0].slice(0, 1) + "" + name.split(" ")[1].slice(0, 1);
  };

  return (
    <Link href={href ? href : `/users/${userId}`}>
      <a
        {...rest}
        className={`font-bold bg-gray-300 flex items-center justify-center rounded-full
        ${variant === "small" ? "w-12 h-12" : null}
        ${variant === "large" ? "w-20 h-20" : null}
        ${variant === "large" ? "w-36 h-36" : null}
        ${className}`}
      >
        <span className="uppercase text-gray-700">{generateAvatar(name)}</span>
      </a>
    </Link>
  );
};
