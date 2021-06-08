import Head from "next/head";
import Meta from "./meta";
import { SEO } from "../config";

export default function HeaderComponent() {
  return (
    <>
      <Meta />
      <Head>
        <link rel="icon" href="/favicon.ico" />
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
    </>
  );
}
