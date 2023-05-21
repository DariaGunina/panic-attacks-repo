import type { AppProps } from "next/app";
import Head from "next/head";

import "../styles/globals.css";
import styles from "../styles/styles.module.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Панические атаки </title>
        <meta name="description" content="Сайт про панические атаки" />
      </Head>

      <main className={styles.container}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
