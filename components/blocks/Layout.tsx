import { Header } from "./Header";

interface Props extends React.HTMLProps<HTMLDivElement> {}

export const Layout: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <div className="antialiased sans-serif bg-gray-200">
      <Header />
      <div className="container mx-auto px-4 py-10">
        <div className="md:flex justify-between">
          {children}
          <div className="md:w-1/3 lg:px-4">aside</div>
        </div>
      </div>
    </div>
  );
};
