import Link from "next/link";
import Image from "next/image";

export default function Error500() {
  return (
    <>
      <section className="h-100-vh d-flex align-items-center">
        <div className="container">
          <div className="row mt-lg-0 mt-8">
            <div className="col-lg-5 my-auto">
              <h1
                className="
                display-1
                text-bolder text-gradient text-primary
                fadeIn1
                fadeInBottom
                mt-5
              "
              >
                Error 500
              </h1>
              <h2 className="fadeIn3 fadeInBottom opacity-8">
                Something went wrong
              </h2>
              <p className="lead opacity-6 fadeIn2 fadeInBottom">
                We suggest you to go to the homepage while we solve this issue.
              </p>
              <Link href="/">
                <button
                  type="button"
                  className="btn bg-gradient-primary mt-4 fadeIn2 fadeInBottom"
                >
                  Go to Homepage
                </button>
              </Link>
            </div>
            <div className="col-lg-7 my-auto">
              <Image
                src="/images/error/error-500.webp"
                alt="Error 500"
                className="w-100 fadeIn1 fadeInBottom"
                width={792}
                height={742}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
