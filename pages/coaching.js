import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { FONTAWESOMEICON } from "../utils/fontawesome-icons";

export default function Coaching() {
  return (
    <>
      {/* Header section */}
      <header>
        <div className="page-header section-height-100">
          <div
            className="position-absolute fixed-top ms-auto w-50 h-100 z-index-0 d-none d-sm-none d-md-block border-radius-xl"
            style={{
              backgroundImage:
                "url(/images/coaching/coaching-section-cover.webp)",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-7 d-flex justify-content-center flex-column">
                <div className="card card-body blur d-flex justify-content-center shadow-lg p-5 mt-5">
                  <h1 className="text-gradient text-primary">
                    Parent Coaching and Support
                  </h1>
                  <p className="pe-5 me-5 mt-3">
                    Our platform is completely judgment-free and provides
                    confidential support for parents of special ones at your
                    best even when things at their worst, all possible at the
                    comfort of your own space. We follow complete positive and
                    practical approach for parents with special children.
                  </p>
                  <p className="pe-5 me-5">
                    This portal will assist in connecting parents with providers
                    in developmental counseling, such as child psychologist,
                    occupational therapists, clinical psychology, speech therapy
                    , cognitive therapy, behavioural therapy, physiotherapy and
                    autism treatment, ADHD therapy, along with finding the right
                    sort of assistive tech that will best suit your child
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Header section */}

      {/* Content section */}
      <section className="py-10">
        <div className="container">
          <div className="row text-center">
            <h4 className="text-gradient text-primary">Why should You</h4>
            <h2 className="mb-5">Choose Us ?</h2>
            <div className="col-lg-4 col-md-6 mt-3">
              <div className="info">
                <div className="icon icon-shape-sm mx-auto">
                  <FontAwesomeIcon
                    className="text-primary"
                    icon={FONTAWESOMEICON.iconUsers}
                  />
                </div>
                <p className="mt-3">
                  Modules and sessions prepared by Experienced Psychologists &
                  Occupational Therapists
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-3">
              <div className="info">
                <div className="icon icon-shape-sm mx-auto">
                  <FontAwesomeIcon
                    className="text-primary"
                    icon={FONTAWESOMEICON.iconDonate}
                  />
                </div>
                <p className="mt-3">Easy and Cost Effective</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-3">
              <div className="info">
                <div className="icon icon-shape-sm mx-auto">
                  <FontAwesomeIcon
                    className="text-primary"
                    icon={FONTAWESOMEICON.iconPaste}
                  />
                </div>
                <p className="mt-3">Evidence Based Practice</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-3">
              <div className="info">
                <div className="icon icon-shape-sm mx-auto">
                  <FontAwesomeIcon
                    className="text-primary"
                    icon={FONTAWESOMEICON.iconHeadset}
                  />
                </div>
                <p className="mt-3">Assistive Tech Orientation & Support</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-3">
              <div className="info">
                <div className="icon icon-shape-sm mx-auto">
                  <FontAwesomeIcon
                    className="text-primary"
                    icon={FONTAWESOMEICON.iconTasks}
                  />
                </div>
                <p className="mt-3">Progress Tracking & Reporting</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-3">
              <div className="info">
                <div className="icon icon-shape-sm mx-auto">
                  <FontAwesomeIcon
                    className="text-primary"
                    icon={FONTAWESOMEICON.iconSecret}
                  />
                </div>
                <p className="mt-3">Ensured Privacy & Confidentiality</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Content section */}

      {/* Cta section */}
      <div className="py-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-left">
              <h4>Is Auticare what you were Looking For</h4>
              <p className="mb-0">Then get in touch with us.</p>
            </div>
            <div className="col-lg-5 ms-auto text-right mt-4 mt-lg-0">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-5 text-left">
                  <Link href="/contact">
                    <button
                      type="button"
                      className="btn bg-gradient-primary mb-0 h-100"
                    >
                      Get in Touch
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Cta section */}
    </>
  );
}
