import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVrCardboard,
  faBrain,
  faMicrochip,
  faClipboard,
  faCrown,
  faFeatherAlt,
  faChalkboardTeacher,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
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
                <h1 className="text-gradient text-primary">Auticare</h1>
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

      {/* Read more about us section */}
      <section className="py-sm-7 py-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h3 className="text-gradient text-primary mb-0 mt-2">
                Read More About Auticare
              </h3>
              <h3>The most important</h3>
              <p>
                Auticare uses VR scenarios based on ABA therapy modules for
                skill training and developmental therapy for individuals with
                Autism spectrum disorder. Our platform has more than 35 VR
                interactive scenarios which aims at overall development in
                various aspects like cognitive, social, self care, speech and
                language, vocational, physical, motor, behavioural and sensory
                skills.
              </p>
              <a href="/index" className="text-primary icon-move-right">
                More about us <i className="fas fa-arrow-right text-sm"></i>
              </a>
            </div>
            <div className="col-lg-6 mt-lg-0 mt-5 ps-lg-0 ps-0">
              <div className="p-3 info-horizontal">
                <div
                  className="
                  icon icon-shape
                  rounded-circle
                  bg-gradient-primary
                  shadow
                  text-center
                "
                >
                  <FontAwesomeIcon
                    className="fa fas text-sm"
                    icon={faVrCardboard}
                  />
                </div>
                <div className="description ps-3">
                  <p className="mb-0">
                    VR Interactive Scenarios
                    <br />
                    more than 35 interactive scenarios for various skill
                    development
                  </p>
                </div>
              </div>
              <div className="p-3 info-horizontal">
                <div
                  className="
                  icon icon-shape
                  rounded-circle
                  bg-gradient-primary
                  shadow
                  text-center
                "
                >
                  <FontAwesomeIcon className="fa fas text-sm" icon={faBrain} />
                </div>
                <div className="description ps-3">
                  <p className="mb-0">
                    Data Capturing Module/System
                    <br />
                    capturing attention, concentration, stress, emotions
                  </p>
                </div>
              </div>
              <div className="p-3 info-horizontal">
                <div
                  className="
                  icon icon-shape
                  rounded-circle
                  bg-gradient-primary
                  shadow
                  text-center
                "
                >
                  <FontAwesomeIcon
                    className="fa fas text-sm"
                    icon={faMicrochip}
                  />
                </div>
                <div className="description ps-3">
                  <p className="mb-0">
                    AI Based Behaviour Performance data
                    <br />
                    Each individual can be monitored separately
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Read more about us section */}

      {/* Auticare variants section */}
      <section className="py-7">
        <div className="container">
          {/* Item */}
          <div className="row">
            <div className="col-lg-6 col-md-8 order-2 order-md-2 order-lg-1">
              <div className="position-relative ms-md-5 mb-0 mb-md-7 mb-lg-0 d-none d-md-block d-lg-block d-xl-block h-75">
                <div
                  className="glassmorphic w-100 h-100 border-radius-xl position-absolute"
                  alt=""
                ></div>
                <span className="glassmorphic-circle-helpers bg-gradient-primary top-right gc-sm"></span>
                <span className="glassmorphic-circle-helpers bg-gradient-primary bottom-left gc-bg"></span>
                <img
                  src="/images/autilite-content-cover.jpeg"
                  alt="Autilite home based therapy"
                  className="w-100 border-radius-xl mt-6 ms-5 position-absolute interactive"
                />
              </div>
            </div>
            <div className="col-lg-5 col-md-12 ms-auto order-1 order-md-1 order-lg-1">
              <div className="p-3 pt-0">
                <div className="icon icon-shape bg-gradient-primary rounded-circle shadow text-center mb-4">
                  <FontAwesomeIcon className="ni text-sm" icon={faFeatherAlt} />
                </div>
                <h4 className="text-gradient text-primary mb-0">Autilite</h4>
                <h4 className="mb-4">Home based therapy</h4>
                <p>
                  Autilite can be your perfect home partner which is feasible VR
                  based Assistive Technology, which enhances cognitive, motor,
                  social, self care, speech and language, vocational, sensory,
                  daily life skills of the user. <br />
                  <br /> If you have the opportunity to play this game of life
                  you need to appreciate every moment. A lot of people don’t
                  appreciate the moment until it’s passed.
                </p>
                <a href="#" className="text-dark icon-move-right">
                  More about us
                  <i className="fas fa-arrow-right text-sm ms-1"></i>
                </a>
              </div>
            </div>
          </div>
          {/* Item */}
          {/* Item */}
          <div className="row mt-0 mt-md-5 mt-lg-8">
            <div className="col-lg-5 col-md-12 me-auto">
              <div className="p-3 pt-0">
                <div className="icon icon-shape bg-gradient-primary rounded-circle shadow text-center mb-4">
                  <FontAwesomeIcon className="ni text-sm" icon={faClipboard} />
                </div>
                <h4 className="text-gradient text-primary mb-0">
                  Auticare Standard
                </h4>
                <h4 className="mb-4">Stand up for every move</h4>
                <p>
                  Society has put up so many boundaries, so many limitations on
                  what’s right and wrong that it’s almost impossible to get a
                  pure thought out.It’s like a little kid, a little boy, looking
                  at colors. <br /> <br /> Before somebody tells you you
                  shouldn’t like pink because that’s for girls, or you’d
                  instantly become a gay two-year-old. Why would anyone pick
                  blue over pink? Pink is obviously a better color.
                </p>
                <a href="#" className="text-dark icon-move-right">
                  More about us
                  <i className="fas fa-arrow-right text-sm ms-1"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-8">
              <div className="position-relative ms-md-5 d-none d-md-block d-lg-block d-xl-block h-75">
                <div
                  className="w-100 h-100 glassmorphic border-radius-xl position-absolute"
                  alt=""
                ></div>
                <span className="glassmorphic-circle-helpers bg-gradient-primary top-left gc-sm"></span>
                <span className="glassmorphic-circle-helpers bg-gradient-primary bottom-right gc-bg"></span>
                <img
                  src="/images/auticare-standard-content-cover.jpeg"
                  className="w-100 border-radius-xl mt-6 ms-n5 position-absolute"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* Item */}
          {/* Item */}
          <div className="row mt-lg-8">
            <div className="col-lg-6 col-md-8 order-2 order-md-2 order-lg-1">
              <div className="position-relative ms-md-5 mb-0 mb-md-7 mb-lg-0 d-none d-md-block d-lg-block d-xl-block h-75">
                <div
                  className="glassmorphic w-100 h-100 border-radius-xl position-absolute"
                  alt=""
                ></div>
                <span className="glassmorphic-circle-helpers bg-gradient-primary top-right gc-sm"></span>
                <span className="glassmorphic-circle-helpers bg-gradient-primary bottom-left gc-bg"></span>
                <img
                  src="/images/auticare-premium-content-cover.jpeg"
                  className="w-100 border-radius-xl mt-6 ms-5 position-absolute"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-5 col-md-12 ms-auto order-1 order-md-1 order-lg-1">
              <div className="p-3 pt-0">
                <div className="icon icon-shape bg-gradient-primary rounded-circle shadow text-center mb-4">
                  <FontAwesomeIcon className="ni text-sm" icon={faCrown} />
                </div>
                <h4 className="text-gradient text-primary mb-0">
                  Auticare Premium
                </h4>
                <h4 className="mb-4">Refreshing workspace atmosphere</h4>
                <p>
                  We’re not always in the position that we want to be at. We’re
                  constantly growing. We’re constantly making mistakes. We’re
                  constantly trying to express ourselves and actualize our
                  dreams. <br />
                  <br /> If you have the opportunity to play this game of life
                  you need to appreciate every moment. A lot of people don’t
                  appreciate the moment until it’s passed.
                </p>
                <a href="#" className="text-dark icon-move-right">
                  More about us
                  <i className="fas fa-arrow-right text-sm ms-1"></i>
                </a>
              </div>
            </div>
          </div>
          {/* Item */}
          {/* Item */}
          <div className="row mt-0 mt-md-5 mt-lg-8">
            <div className="col-lg-5 col-md-12 me-auto">
              <div className="p-3 pt-0">
                <div className="icon icon-shape bg-gradient-primary rounded-circle shadow text-center mb-4">
                  <FontAwesomeIcon
                    className="ni text-sm"
                    icon={faChalkboardTeacher}
                  />
                </div>
                <h4 className="text-gradient text-primary mb-0">
                  Auticare Blueroom
                </h4>
                <h4 className="mb-4">Stand up for every move</h4>
                <p>
                  Society has put up so many boundaries, so many limitations on
                  what’s right and wrong that it’s almost impossible to get a
                  pure thought out.It’s like a little kid, a little boy, looking
                  at colors. <br /> <br /> Before somebody tells you you
                  shouldn’t like pink because that’s for girls, or you’d
                  instantly become a gay two-year-old. Why would anyone pick
                  blue over pink? Pink is obviously a better color.
                </p>
                <a href="#" className="text-dark icon-move-right">
                  More about us
                  <i className="fas fa-arrow-right text-sm ms-1"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-8">
              <div className="position-relative ms-md-5 d-none d-md-block d-lg-block d-xl-block h-75">
                <div
                  className="w-100 h-100 glassmorphic border-radius-xl position-absolute"
                  alt=""
                ></div>
                <span className="glassmorphic-circle-helpers bg-gradient-primary top-left gc-sm"></span>
                <span className="glassmorphic-circle-helpers bg-gradient-primary bottom-right gc-bg"></span>
                <img
                  src="/images/auticare-blueroom-content-cover.jpeg"
                  className="w-100 border-radius-xl mt-6 ms-n5 position-absolute"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* Item */}
        </div>
      </section>
      {/* Auticare variants section */}

      {/* <section className="features-3 mt-n10 py-7">
        <div className="container">
          <div className="row text-center justify-content-center pt-10">
            <div className="col-lg-6">
              <span className="badge rounded-pill badge-primary mb-2">
                VR-experience
              </span>
              <h2>Ready for Auticare Demo?</h2>
              <p>
                Use these cards to navigate to and experience different
                scenarios of Auticare
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-4 mb-lg-0 mb-4">
              <Link href="/scenarios/alphabet">
                <a>
                  <div className="card card-background move-on-hover mb-4">
                    <div
                      className="full-background"
                      style={{
                        backgroundImage:
                          "url(https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2389&q=80)",
                      }}
                    ></div>
                    <div className="card-body pt-12">
                      <h4 className="text-white">Scenario</h4>
                      <p>Alphabet teaching scenario</p>
                    </div>
                  </div>
                </a>
              </Link>
              <Link href="/scenarios/ball-picking">
                <a>
                  <div className="card card-background move-on-hover">
                    <div
                      className="full-background"
                      style={{
                        backgroundImage:
                          "url(https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1398&q=80)",
                      }}
                    ></div>
                    <div className="card-body pt-12">
                      <h4 className="text-white">Scenario</h4>
                      <p>Ball picking scenario for hand-eye coordination</p>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="col-lg-4 mb-lg-0 mb-4">
              <Link href="/scenarios/find-me-my-spot">
                <a>
                  <div className="card card-background move-on-hover mb-4">
                    <div
                      className="full-background"
                      style={{
                        backgroundImage:
                          "url(https://images.unsplash.com/photo-1533327325824-76bc4e62d560?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80)",
                      }}
                    ></div>
                    <div className="card-body pt-12">
                      <h4 className="text-white">Scenario</h4>
                      <p>Find me my spot</p>
                    </div>
                  </div>
                </a>
              </Link>
              <Link href="/scenarios/fruit-picking">
                <a>
                  <div className="card card-background move-on-hover">
                    <div
                      className="full-background"
                      style={{
                        backgroundImage:
                          "url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2126&q=80)",
                      }}
                    ></div>
                    <div className="card-body pt-12">
                      <h4 className="text-white">Scenario</h4>
                      <p>Fruit picking scenario for hand-eye coordination</p>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="col-lg-4">
              <Link href="/scenarios/greeting">
                <a>
                  <div className="card card-background move-on-hover mb-4">
                    <div
                      className="full-background"
                      style={{
                        backgroundImage:
                          "url(https://images.unsplash.com/photo-1517701221265-7da25447217b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2106&q=80)",
                      }}
                    ></div>
                    <div className="card-body pt-12">
                      <h4 className="text-white">Scenario</h4>
                      <p>Manners scenario Greeting others</p>
                    </div>
                  </div>
                </a>
              </Link>
              <Link href="/scenarios/strike-while-you-can">
                <a>
                  <div className="card card-background move-on-hover">
                    <div
                      className="full-background"
                      style={{
                        backgroundImage:
                          "url(https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80)",
                      }}
                    ></div>
                    <div className="card-body pt-12">
                      <h4 className="text-white">Aim Sense</h4>
                      <p>Strike objects for hand-eye coordination</p>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section
        className="my-10 py-5 bg-gradient-dark position-relative"
        style={{
          backgroundImage:
            "url(https://appsrv1-147a1.kxcdn.com/soft-ui-pro/img/nastuh.jpg)",
        }}
      >
        <span className="mask bg-gradient-dark opacity-8"></span>
        <div className="container position-relative z-index-2">
          <div className="row">
            <div className="col-lg-5 col-md-8 m-auto text-left">
              <h5 className="text-white mb-lg-0 mb-5">
                For being a bright color. For standing out. But the time is now
                to be okay to be the greatest you.
              </h5>
            </div>
            <div className="col-lg-6 m-auto">
              <div className="row">
                <div className="col-sm-4 col-6 ps-sm-0 ms-auto">
                  <button
                    type="button"
                    className="
                    btn
                    bg-gradient-warning
                    mb-0
                    ms-lg-3 ms-sm-2
                    mb-sm-0 mb-2
                    me-auto
                    w-100
                    d-block
                  "
                  >
                    Start Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      
      {/* Partner logo section */}
      <div className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-8 mx-auto text-center">
              <h6 className="opacity-5"> More than 20+ trusted partners</h6>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-2 col-md-4 col-6 mb-4">
              <img
                className="w-100 opacity-9"
                src="https://appsrv1-147a1.kxcdn.com/soft-ui-pro/img/logos/gray-logos/logo-coinbase.svg"
              />
            </div>
            <div className="col-lg-2 col-md-4 col-6 mb-4">
              <img
                className="w-100 opacity-9"
                src="https://appsrv1-147a1.kxcdn.com/soft-ui-pro/img/logos/gray-logos/logo-nasa.svg"
              />
            </div>
            <div className="col-lg-2 col-md-4 col-6 mb-4">
              <img
                className="w-100 opacity-9"
                src="https://appsrv1-147a1.kxcdn.com/soft-ui-pro/img/logos/gray-logos/logo-netflix.svg"
              />
            </div>
            <div className="col-lg-2 col-md-4 col-6 mb-4">
              <img
                className="w-100 opacity-9"
                src="https://appsrv1-147a1.kxcdn.com/soft-ui-pro/img/logos/gray-logos/logo-pinterest.svg"
              />
            </div>
            <div className="col-lg-2 col-md-4 col-6 mb-4">
              <img
                className="w-100 opacity-9"
                src="https://appsrv1-147a1.kxcdn.com/soft-ui-pro/img/logos/gray-logos/logo-spotify.svg"
              />
            </div>
            <div className="col-lg-2 col-md-4 col-6 mb-4">
              <img
                className="w-100 opacity-9"
                src="https://appsrv1-147a1.kxcdn.com/soft-ui-pro/img/logos/gray-logos/logo-vodafone.svg"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Partner logo section */}
    </>
  );
}
