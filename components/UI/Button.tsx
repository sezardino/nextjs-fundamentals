import Link, { LinkProps } from "next/link";

interface CommonButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}
type ILinkProps = LinkProps & React.HTMLProps<HTMLAnchorElement>;
type IButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type ButtonProps = (IButtonProps | ILinkProps) & CommonButtonProps;

export const Button: React.FC<ButtonProps> = (props) => {
  const { variant = "primary" } = props;

  const primaryBtnClasses =
    "px-12 focus:outline-none border border-transparent py-2 px-5 rounded-lg shadow text-center text-white bg-blue-500 hover:bg-blue-600 font-medium";
  const secondaryBtnClasses =
    "focus:outline-none py-1 px-4 rounded-full shadow-sm text-center text-blue-600 bg-white hover:bg-blue-100 font-medium border border-blue-200";
  const classes = `${props.className} ${
    variant === "primary" ? primaryBtnClasses : secondaryBtnClasses
  }`;

  if ("href" in props) {
    const { href, ...rest } = props;

    return (
      <Link href={href}>
        <a {...rest} className={classes}>
          {props.children}
        </a>
      </Link>
    );
  }

  return (
    <button {...props} className={classes}>
      {props.children}
    </button>
  );
};
