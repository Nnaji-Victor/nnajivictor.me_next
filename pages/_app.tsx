import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import withDarkMode from "next-dark-mode";
import Head from "next/head";
import { LoadingProvider } from "@/_hooks/loadingContext";
import { AnimatingProvider } from "@/_hooks/animatingContext";
import { MenuProvider } from "@/_hooks/menuContext";
import { PageTransition } from "next-page-transitions";
import PageLoading from "@/components/PageLoading";
import { client } from "lib/apollo";
import { ApolloProvider } from "@apollo/client";

function App({ Component, pageProps, router }: AppProps) {
  React.useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <LoadingProvider>
        <AnimatingProvider>
          <MenuProvider>
            <ApolloProvider client={client}>
              <PageTransition
                skipInitialTransition
                timeout={50}
                loadingComponent={<PageLoading />}
                classNames="page-transition"
                loadingTimeout={0}
              >
                <Component {...pageProps} key={router.route} />
              </PageTransition>
            </ApolloProvider>
          </MenuProvider>
        </AnimatingProvider>
      </LoadingProvider>
    </>
  );
}

export default withDarkMode(App);
