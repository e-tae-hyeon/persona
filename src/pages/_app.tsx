import "commons/styles/global-style.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { wrapper } from "store";
import { Reset } from "styled-reset";

function MyApp({ Component, pageProps }: AppProps) {
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
