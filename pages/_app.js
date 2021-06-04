import Head from "next/head";
import HeaderComponent from "../components/header";
import NavbarComponent from "../components/navbar";

// Bootstrap 5
import "bootstrap/dist/css/bootstrap.css";
// Custom css
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no"
        />
        <link rel="icon" href="/favicon.ico" />
        <title>Auticare-next</title>
        <link
          rel="preload"
          href="/fonts/OpenSans/OpenSans-Light-300.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/OpenSans/OpenSans-Regular-400.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/OpenSans/OpenSans-SemiBold-600.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/OpenSans/OpenSans-Bold-700.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <HeaderComponent />
      <NavbarComponent />
      <Component {...pageProps} />
    </>
  );
}
