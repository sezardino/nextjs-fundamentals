import type { AppProps } from "next/app";
import { Layout } from "@/components";
import { UserProvider } from "@/context";
import "../styles/index.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
};

export default MyApp;
