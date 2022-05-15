import Link, { LinkProps } from "next/link";

interface CommonButtonProps {
  children: React.ReactNode;
  isPrimary?: boolean;
}
type ILinkProps = LinkProps & React.HTMLProps<HTMLAnchorElement>;
type IButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type ButtonProps = (IButtonProps | ILinkProps) & CommonButtonProps;

export const Button: React.FC<ButtonProps> = (props) => {
  const primaryBtnClasses =
    "shadow cursor-pointer absolute top-0 right-0 p-2 mr-2 mt-2 rounded-full bg-gray-600";
  const secondaryBtnClasses =
    "px-12 focus:outline-none border border-transparent py-2 px-5 rounded-lg shadow text-center text-white bg-blue-500 hover:bg-blue-600 font-medium";
  const classes = `${props.className} ${
    props.isPrimary ? primaryBtnClasses : secondaryBtnClasses
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
