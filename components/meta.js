import Head from "next/head";
import { useRouter } from "next/router";
import { SEO } from "../config";

export default function Meta() {

  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no"
      />
      <title key="title">{SEO.Home.title}</title>
      <meta name="description" content={SEO.Home.description} />
      <meta name="og:title" content={SEO.Home.openGraph.title} />
      <meta name="og:type" content={SEO.Home.openGraph.type} />
      <meta name="keywords" content={SEO.Home.openGraph.keywords} />
      <meta name="og:url" content={SEO.Home.openGraph.url} />
      <meta name="og:description" content={SEO.Home.openGraph.description} />
      <meta name="og:image" content={SEO.Home.openGraph.image} />
    </Head>
  );
}
