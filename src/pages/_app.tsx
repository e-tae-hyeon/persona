import GlobalStyle from "commons/styles/global-style";
import type { AppProps } from "next/app";
import { Reset } from "styled-reset";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
