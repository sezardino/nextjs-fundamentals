import { Header, Navigation } from "@/components";

interface Props extends React.HTMLProps<HTMLDivElement> {}

export const Layout: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <div className="antialiased sans-serif bg-gray-200 min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-5 gap-8 items-start">
          <Navigation className="hidden md:block" />
          <div className="md:col-span-4 md:col-start-2">{children}</div>
        </div>
      </div>
    </div>
  );
};
