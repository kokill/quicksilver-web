import { STRAPI_URL } from "../../utils/next.config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Link from "next/link";

export default function Blogs({ blogList }) {
  return (
    <>
      <header>
        <div
          className="page-header section-height-100"
          style={{
            backgroundImage: "url(/images/blog/blog-section-cover.webp)",
          }}
        >
          <span className="mask bg-gradient-dark opacity-4"></span>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-sm-9 text-center mx-auto">
                <h1 className="text-white mb-4">Our Blogs</h1>
                <p className="lead text-white mb-sm-6 mb-4">
                  We’re constantly trying to express ourselves and actualize our
                  dreams. If you would like to know more about our works and the
                  fields of study we are in have a read of our blogs to get an
                  understanding.
                </p>
                <p className="text-white h6 text-uppercase mb-4">
                  connect with us on:
                </p>

                <div className="d-flex justify-content-center">
                  <a
                    href="https://www.facebook.com/MyAuticare"
                    target="_blank"
                    rel="noopener"
                  >
                    <FontAwesomeIcon
                      className="fab fa-2x text-white me-5"
                      icon={faFacebook}
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/my_auticare/"
                    target="_blank"
                    rel="noopener"
                  >
                    <FontAwesomeIcon
                      className="fab fa-2x text-white me-5"
                      icon={faInstagram}
                    />
                  </a>
                  <a
                    href="https://twitter.com/embrightinfotec"
                    target="_blank"
                    rel="noopener"
                  >
                    <FontAwesomeIcon
                      className="fab fa-2x text-white me-5"
                      icon={faTwitter}
                    />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCarMIgou5Ia5hlgyij69nCQ/videos"
                    target="_blank"
                    rel="noopener"
                  >
                    <FontAwesomeIcon
                      className="fab fa-2x text-white me-5"
                      icon={faYoutube}
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/mwlite/company/embrightinfotech"
                    target="_blank"
                    rel="noopener"
                  >
                    <FontAwesomeIcon
                      className="fab fa-2x text-white me-5"
                      icon={faLinkedinIn}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="relative"
          style={{
            height: "36px",
            overflow: "hidden",
            marginTop: "-36px",
            zIndex: "2",
          }}
        >
          <div
            className="w-full absolute bottom-0 start-0 end-0"
            style={{
              transform: "scale(2)",
              transformOrigin: "top center",
              color: "#fbfbfb",
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

      {/* Blog list section */}
      <section class="py-6 bg-gray-100">
        <div class="container">
          <div class="row">
            {blogList.map((item) => (
              <div class="col-lg-4 mb-lg-0 mb-4 mt-3" key={item.id}>
                <div class="card">
                  <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1">
                    <Link href={`/blogs/${String(item.id)}`}>
                      <a class="d-block">
                        <Image
                          className="img-fluid border-radius-lg"
                          src={item.CoverImage.url}
                          height={300}
                          width={400}
                          layout="responsive"
                        />
                      </a>
                    </Link>
                  </div>

                  <div class="card-body pt-3">
                    <span class="text-gradient text-warning text-uppercase text-xs font-weight-bold my-2">
                      Blog
                    </span>
                    <Link href={`/blogs/${item.id}`}>
                      <a class="card-title h5 d-block text-darker">
                        {item.Title}
                      </a>
                    </Link>
                    <p class="card-description mb-4">
                      Use border utilities to quickly style the border and
                      border-radius of an element. Great for images, buttons.
                    </p>
                    <div class="author align-items-center">
                      <div class="stats">
                        <small>Posted on {item.PublishDate}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Blog list section */}
    </>
  );
}

export const getStaticProps = async () => {
  const data = await fetch(`${STRAPI_URL}/articles`);
  const blogList = await data.json();

  return {
    props: {
      blogList,
    },
    revalidate: 60,
  };
};
