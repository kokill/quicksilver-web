import Link from "next/link";
import Image from "next/image";

export default function Error404() {
  return (
    <>
      <section className="my-10">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 my-auto">
              <h1 className="display-1 text-bolder text-gradient text-primary">
                Error 404
              </h1>
              <h2>Erm. Page not found</h2>
              <p className="lead">
                We suggest you to go to the homepage while we solve this issue.
              </p>
              <Link href="/">
                <button type="button" className="btn bg-gradient-primary mt-4">
                  Go to Homepage
                </button>
              </Link>
            </div>
            <div className="col-lg-6 my-auto position-relative">
              <Image
                src="/images/error/error-404.webp"
                alt="Error 404"
                className="w-100 fadeIn1 fadeInBottom"
                width={800}
                height={600}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
