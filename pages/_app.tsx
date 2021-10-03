import "../styles/globals.css";
import type { AppProps } from "next/app";
import withDarkMode from "next-dark-mode";
import Head from "next/head";
import { LoadingProvider } from "@/_hooks/loadingContext";
import { AnimatingProvider } from "@/_hooks/animatingContext";
import { MenuProvider } from "@/_hooks/menuContext";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <LoadingProvider>
        <AnimatingProvider>
          <MenuProvider>
            <Component {...pageProps} />
          </MenuProvider>
        </AnimatingProvider>
      </LoadingProvider>
    </>
  );
}

export default withDarkMode(App);
