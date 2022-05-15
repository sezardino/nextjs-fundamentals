import type { NextPage } from "next";
import { AddDreamForm } from "@/components";

const Home: NextPage = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-8">
      <AddDreamForm className="lg:col-span-2" />
      <div className="-order-1 lg:order-1">aside</div>
    </div>
  );
};

export default Home;
