export default function Coaching() {
  return (
    <>
      <header>
        <div className="page-header section-height-85">
          <div className="oblique position-absolute top-0 h-100 d-md-block d-none">
            <div
              className="
              oblique-image
              bg-cover
              position-absolute
              fixed-top
              ms-auto
              h-100
              z-index-0
              ms-n6
            "
              style={{
                backgroundImage: "url(/images/home-hero-section-cover.jpg)",
              }}
            ></div>
          </div>
          <div className="container">
            <div className="row">
              <div
                className="
                col-lg-6 col-md-7
                d-flex
                justify-content-center
                text-md-left text-center
                flex-column
              "
              >
                <h1 className="text-gradient text-primary">Coaching</h1>
                <h1 className="mb-4">Empowering Independence</h1>
                <p className="lead pe-md-5 me-md-5">
                  Auticare is an XR-AI based Assistive Technology learning
                  platform for Autism Spectrum Disorder(ASD) and special
                  education.
                </p>
                <div className="buttons">
                  <button
                    type="button"
                    className="btn bg-gradient-primary mt-4"
                  >
                    Get Started
                  </button>
                  <button
                    type="button"
                    className="btn text-primary shadow-none mt-4"
                  >
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
