import "../styles.css";
import React from "react";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>Tilt Inspector</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Inconsolata:400,700|Montserrat:400,600"
          rel="stylesheet"
        />
      </Head>

      <Component {...pageProps} />
    </React.Fragment>
  );
}
