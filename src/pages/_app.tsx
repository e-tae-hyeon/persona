import "commons/styles/global-style.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { wrapper } from "store";
import { Reset } from "styled-reset";
import * as GA from "utils/gaTag";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      GA.pageView(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Persona</title>
      </Head>
      <Reset />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
