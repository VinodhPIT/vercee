import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import type { AppProps } from "next/app";
 

import "@/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname !== "/404") {
      router.replace(`/${router.locale}${router.asPath}`);
    }
  }, []);

  return (
    <>
      <Head>
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </Head>

      <div>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
