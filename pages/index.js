import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVrCardboard,
  faBrain,
  faMicrochip,
  faClipboard,
  faCrown,
  faFeatherAlt,
  faChalkboardTeacher,
  faLaugh,
  faUserFriends,
  faDonate,
  faChartLine,
  faAward,
  faPlayCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faHive } from "@fortawesome/free-brands-svg-icons";
import React, { useEffect, useState } from "react";
import { Entity, Scene } from "aframe-react";
import Image from "next/image";

export default function Home() {
  const [appRendered, setAppRendered] = useState(false);
  useEffect(() => {
    if (typeof window != "undefined") {
      require("aframe");
      setAppRendered(true);
    }
  }, []);
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
                backgroundImage: "url(/images/home-hero-section-cover.webp)",
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
                  src="/images/autilite-content-cover.webp"
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
                  src="/images/auticare-standard-content-cover.webp"
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
                  src="/images/auticare-premium-content-cover.webp"
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
                  src="/images/auticare-blueroom-content-cover.webp"
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

      {/* Why Auticare section */}
      <section className="py-6">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto text-center pb-4">
              <h4 className="text-gradient text-primary">Why</h4>
              <h2>Auticare ?</h2>
              <p className="lead">
                What are the factors that keep us one step ahead of our
                competitors ?
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="p-3 text-center">
                <div className="icon icon-shape bg-gradient-primary shadow mx-auto">
                  <FontAwesomeIcon className="fa fas text-sm" icon={faLaugh} />
                </div>
                <h5 className="mt-4">Safe & Fun</h5>
                <p>
                  Doctors guided modules ensures a safe and fun environment for
                  special children
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="p-3 text-center">
                <div className="icon icon-shape bg-gradient-primary shadow mx-auto">
                  <FontAwesomeIcon
                    className="fa fas text-sm"
                    icon={faUserFriends}
                  />
                </div>
                <h5 className="mt-4">Parental Involvement</h5>
                <p>
                  Home based therapy helps kids to enjoy the learning with
                  support of their parents
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mx-md-auto">
              <div className="p-3 text-center">
                <div className="icon icon-shape bg-gradient-primary shadow mx-auto">
                  <FontAwesomeIcon className="fa fas text-sm" icon={faDonate} />
                </div>
                <h5 className="mt-4">Affordable & Immersive</h5>
                <p>
                  Your special one now can experience an affordable interactive
                  3D virtual scenarios that trains them in skills essential in
                  daily life
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="p-3 text-center">
                <div className="icon icon-shape bg-gradient-primary shadow mx-auto">
                  <FontAwesomeIcon
                    className="fa fas text-sm"
                    icon={faChartLine}
                  />
                </div>
                <h5 className="mt-4">
                  Enhanced Diagnosis & Therapy Productivity
                </h5>
                <p>
                  Doctors and therapists can now get faster response feedback
                  and compare progress levels of children's performance in each
                  session
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="p-3 text-center">
                <div className="icon icon-shape bg-gradient-primary shadow mx-auto">
                  <FontAwesomeIcon className="fa fas text-sm" icon={faAward} />
                </div>
                <h5 className="mt-4">
                  Replayable VR scenarios and level based assessment
                </h5>
                <p>
                  Allows the user to master skills and record the performance
                  based progress in each levels
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mx-md-auto">
              <div className="p-3 text-center">
                <div className="icon icon-shape bg-gradient-primary shadow mx-auto">
                  <FontAwesomeIcon className="fa fas text-sm" icon={faHive} />
                </div>
                <h5 className="mt-4">Customizable contents</h5>
                <p>
                  Provides VR scenarios according to the individual requirements
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Auticare section */}

      {/* Aframe section */}
      <section class="py-4">
        <div class="container py-5">
          <div class="row align-items-center text-center">
            <h4 className="text-gradient text-primary">
              Ready for Auticare Demo ?
            </h4>
            <h2>Try it Out</h2>
            <p className="lead mb-5">
              For your best experience use a device which supports
              <br />
              VR capabilities to experience the demo
            </p>
            <div class="col-md-12">
              <div class="card p-0 rounded-3">
                <div class="blur-shadow-image">
                  <div class="aframe-custom-btn">
                    <img
                      src="/images/scenes/aframe-cover-img.webp"
                      alt="img-blur-shadow"
                      class="img-fluid shadow rounded-3"
                    />
                    <a id="targetVRButton" className="aframe-btn-cursor">
                      <FontAwesomeIcon
                        className="aframe-btn"
                        icon={faPlayCircle}
                      />
                    </a>
                  </div>
                  {appRendered && (
                    <Scene embedded vr-mode-ui="enterVRButton: #targetVRButton">
                      <a-assets>
                        <img
                          id="city"
                          crossorigin="anonymous"
                          src={`/images/scenes/alphabet.png`}
                        />
                      </a-assets>
                      <Entity
                        primitive="a-sky"
                        id="image-360"
                        radius="100"
                        src="#city"
                      />
                      <Entity primitive="a-camera" camera look-controls />
                    </Scene>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Aframe section */}

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
