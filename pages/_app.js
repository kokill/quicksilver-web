import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import * as gtag from '../lib/gtag'

const LayoutModule = dynamic(import("../Layout/layout"));

// Bootstrap 5
import "bootstrap/dist/css/bootstrap.css";
// Custom css
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

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
      <LayoutModule>
        <Component {...pageProps} />
      </LayoutModule>
    </>
  );
}
