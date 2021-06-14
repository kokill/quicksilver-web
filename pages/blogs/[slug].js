import { STRAPI_URL } from "../../utils/next.config";
import Image from "next/image";
import Link from "next/link";

export default function Blog({ blogData }) {
  return (
    <>
      {/* Header section */}
      <header>
        <div
          class="page-header section-height-75"
          style={{
            backgroundImage: "url(/images/blog/blog-section-cover.webp)",
          }}
        >
          <span class="mask bg-gradient-dark"></span>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 mx-auto text-white text-center">
                <h2 class="text-white">{blogData.Title}</h2>
              </div>
            </div>
          </div>
        </div>
        <div
          class="position-relative overflow-hidden"
          style={{ height: "36px", marginTop: "-35px" }}
        >
          <div
            class="w-full absolute bottom-0 start-0 end-0"
            style={{
              transform: "scale(2)",
              transformOrigin: "top center",
              color: "#fff",
            }}
          >
            <svg
              viewBox="0 0 2880 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
      </header>
      {/* Header section */}
      
      {/* Blog body */}
      <section class="py-5 bg-gray-100">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto text-center">
              <div class="card card-blog card-plain">
                <div class="position-relative">
                  <a class="d-block blur-shadow-image">
                    <Image
                      src={blogData.CoverImage.url}
                      alt="img-blur-shadow"
                      class="img-fluid shadow border-radius-lg"
                      width={720}
                      height={540}
                      layout="responsive"
                    />
                  </a>
                </div>
                <div class="card-body px-0 pt-4">
                  <p class="text-gradient text-primary text-gradient font-weight-bold text-sm text-uppercase">
                    {blogData.publishDate}
                  </p>
                  <p>{blogData.Body}</p>
                  <Link href="/blogs">
                    <button type="button" class="btn bg-gradient-primary mt-3">
                      Back to Blogs
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog body */}
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${STRAPI_URL}/articles`);
  const blogList = await res.json();

  return {
    paths: blogList.map((item) => ({
      params: {
        slug: String(item.id),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = await fetch(`${STRAPI_URL}/articles?id=${params.slug}`);
  const blogData = await data.json();

  return {
    props: {
      blogData: blogData[0],
    },
    revalidate: 60,
  };
}
