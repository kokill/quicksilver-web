import {
  faAddressCard,
  faArrowRight,
  faCalendarCheck,
  faClipboard,
  faMoneyCheckAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Consultation() {
  return (
    <>
      <header>
        <div className="page-header section-height-100 mt-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 my-auto">
                <h1 className="text-gradient text-primary mb-0">
                  Online Consultation
                </h1>
                <h1 className="mb-4">& Therapy Assistance</h1>
                <p className="lead">Affordable & Assistance at your comfort</p>
              </div>
              <div className="col-lg-8 ps-5 pe-0">
                <div className="row">
                  <div className="col-lg-3 col-6">
                    <img
                      className="w-100 border-radius-lg shadow mt-0 mt-lg-7"
                      src="/images/consultation/consultation-section-cover-1.webp"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-3 col-6">
                    <img
                      className="w-100 border-radius-lg shadow"
                      src="images/consultation/consultation-section-cover-2.webp"
                      alt=""
                    />
                    <img
                      className="w-100 border-radius-lg shadow mt-4"
                      src="/images/consultation/consultation-section-cover-3.webp"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-3 col-6">
                    <img
                      className="w-100 border-radius-lg shadow mt-0 mt-lg-5"
                      src="/images/consultation/consultation-section-cover-4.webp"
                      alt=""
                    />
                    <img
                      className="w-100 border-radius-lg shadow mt-4"
                      src="/images/consultation/consultation-section-cover-5.webp"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-3 col-6">
                    <img
                      className="w-100 border-radius-lg shadow mt-3"
                      src="/images/consultation/consultation-section-cover-6.webp"
                      alt=""
                    />
                    <img
                      className="w-100 border-radius-lg shadow mt-4"
                      src="/images/consultation/consultation-section-cover-7.webp"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Header section */}
      <section className="py-5">
        {/* Item */}
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-6 justify-content-center d-flex flex-column">
                  <div className="card rounded-3">
                    <div className="d-block blur-shadow-image">
                      <img
                        src="/images/consultation/consultation-content-section-1.webp"
                        alt="family in a therapist session"
                        className="img-fluid shadow rounded-3"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 justify-content-center d-flex flex-column ps-lg-5 pt-lg-0 pt-3">
                  <h3>Finding you Therapist for your special one.</h3>
                  <p>
                    We are a secure online therapy platform for Paediatric
                    therapy services like Child Psychology, Clinical Psychology,
                    Speech Therapy, Occupational Therapy, Behaviour Therapy,
                    Physiotherapy and Therapy programs for ASD, ADHD etc..
                  </p>
                  <p>
                    Our network of Therapists are qualified and experienced with
                    Professional Degrees in their respective fields. While their
                    experience, expertise and backgrounds vary, they all possess
                    at least 4 years and 3,000 hours of hands-on specialist
                    therapy experience.
                  </p>
                  <button
                    type="button"
                    className="btn bg-gradient-primary mt-4 col-6"
                  >
                    Book your consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Item */}

        {/* Session section */}
        <div className="container pt-5 mt-5 mb-5 text-center">
          <h2 className="text-primary mt-5 mb-3">Available Sessions</h2>
          <p className="lead mb-5">
            Have a look at our available session types and choose the one that
            interests you.
          </p>
          <div className="row">
            <div className="col-lg-12 col-md-12 ms-lg-auto me-lg-auto">
              <div className="tab-content tab-space">
                <div className="tab-pane active" id="personal">
                  <div className="row">
                    {/* Item */}
                    <div className="col-md-4">
                      <div className="card card-pricing bg-white border-0 text-center mb-4 shadow-xl">
                        <div className="card-header bg-transparent">
                          <h6 className="text-uppercase ls-1 py-3 mb-0">
                            Starter
                          </h6>
                        </div>
                        <div className="card-body text-dark">
                          <p className="display-2 font-weight-bold mb-0">
                            ₹999
                          </p>
                          {/* <span>per month</span> */}
                          <ul className="list-unstyled my-4">
                            <li className="align-items-center">
                              <b>1 Session</b> <span>per Month</span>
                            </li>
                            <li className="align-items-center my-2">
                              <b>2 Hrs</b> <span>Session Duration</span>
                            </li>
                            <li className="align-items-center">
                              <span>Common Session</span>
                            </li>
                            <li className="align-items-center">
                              <span>
                                {" "}
                                <br />{" "}
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="card-footer bg-transparent">
                          <button className="btn btn-outline-primary">
                            Request a demo
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* Item */}
                    {/* Item */}
                    <div className="col-md-4">
                      <div className="card card-pricing bg-white border-0 text-center mb-4 shadow-xl">
                        <div className="card-header bg-transparent">
                          <h6 className="text-uppercase ls-1 py-3 mb-0">
                            Essentail
                          </h6>
                        </div>
                        <div className="card-body text-dark">
                          <p className="display-2 font-weight-bold mb-0">
                            ₹4999
                          </p>
                          {/* <span>per month</span> */}
                          <ul className="list-unstyled my-4">
                            <li className="align-items-center">
                              <b>5 Sessions</b> <span>per Month</span>
                            </li>
                            <li className="align-items-center my-2">
                              <b>2 Hrs</b> <span>Session Duration</span>
                            </li>
                            <li className="align-items-center">
                              <span>Dedicated Therapist</span>
                            </li>
                            <li className="align-items-center">
                              <span>
                                {" "}
                                <br />{" "}
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="card-footer bg-transparent">
                          <button className="btn btn-outline-primary">
                            Request a demo
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* Item */}
                    {/* Item */}
                    <div className="col-md-4">
                      <div className="card card-pricing bg-gradient-primary border-0 text-center mb-4 overflow-hidden shadow-xl">
                        <img
                          src="https://appsrv1-147a1.kxcdn.com/soft-ui-pro/img/shapes/waves-white.svg"
                          alt="pattern-lines"
                          className="position-absolute opacity-8"
                        />
                        <div className="card-header bg-transparent">
                          <h6 className="text-uppercase text-white ls-1 py-3 mb-0">
                            Professional
                          </h6>
                        </div>
                        <div className="card-body text-white position-relative">
                          <p className="display-2 font-weight-bold mb-0">
                            ₹9999
                          </p>
                          {/* <span>per month</span> */}
                          <ul className="list-unstyled my-4">
                            <li className="align-items-center">
                              <b>12 Sessions</b> <span>per Month</span>
                            </li>
                            <li className="align-items-center my-2">
                              <b>2 Hrs</b> <span>Session Duration</span>
                            </li>
                            <li className="align-items-center">
                              <span>Pre-Booking Facility</span>
                            </li>
                            <li className="align-items-center">
                              <span>Dedicated Therapist</span>
                            </li>
                          </ul>
                        </div>
                        <div className="card-footer bg-transparent position-relative">
                          <button className="btn btn-outline-white">
                            Request a demo
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* Item */}
                  </div>
                </div>
                <div className="tab-pane" id="commercial">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="card card-pricing bg-white border-0 text-center mb-4">
                        <div className="card-header bg-transparent">
                          <h6 className="text-uppercase ls-1 py-3 mb-0">
                            Gold
                          </h6>
                        </div>
                        <div className="card-body text-dark">
                          <p className="display-2 font-weight-bold mb-0">
                            $100
                          </p>
                          <span>per month</span>
                          <ul className="list-unstyled my-4">
                            <li className="align-items-center">
                              <b>200GB</b> <span>File Storage</span>
                            </li>
                            <li className="align-items-center my-2">
                              <b>Unlimited</b> <span>Users</span>
                            </li>
                            <li className="align-items-center">
                              <b>Premium</b> <span>Support</span>
                            </li>
                          </ul>
                        </div>
                        <div className="card-footer bg-transparent">
                          <button className="btn btn-outline-primary">
                            Request a demo
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card card-pricing bg-gradient-primary border-0 text-center mb-4 overflow-hidden">
                        <img
                          src="https://appsrv1-147a1.kxcdn.com/soft-ui-pro/img/shapes/waves-white.svg"
                          alt="pattern-lines"
                          className="position-absolute opacity-8"
                        />
                        <div className="card-header bg-transparent">
                          <h6 className="text-uppercase text-white ls-1 py-3 mb-0">
                            Platinum
                          </h6>
                        </div>
                        <div className="card-body text-white position-relative">
                          <p className="display-2 font-weight-bold mb-0">
                            $135
                          </p>
                          <span>per month</span>
                          <ul className="list-unstyled my-4">
                            <li className="align-items-center">
                              <b>500GB</b> <span>File Storage</span>
                            </li>
                            <li className="align-items-center my-2">
                              <b>Unlimited</b> <span>Users</span>
                            </li>
                            <li className="align-items-center">
                              <b>No time</b> <span>Tracking</span>
                            </li>
                          </ul>
                        </div>
                        <div className="card-footer bg-transparent position-relative">
                          <button className="btn btn-outline-white">
                            Request a demo
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Session section */}

        {/* Item */}
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mt-5">
              <div className="row flex-row-reverse">
                <div className="col-lg-6 justify-content-center d-flex flex-column">
                  <div className="card rounded-3">
                    <div className="blur-shadow-image">
                      <img
                        src="/images/consultation/consultation-content-section-2.webp"
                        alt="online consultation through laptop"
                        className="img-fluid shadow rounded-3"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 pe-lg-5 justify-content-center d-flex flex-column pt-lg-0 pt-3">
                  <h3>Online Consultation</h3>
                  <p>
                    We offer a wide range of Online Consultation with different
                    expertised faculties. Please book a Consultation to talk to
                    our specialist who will advice you about the Assessments
                    required, based on your child's needs.
                  </p>
                  <button
                    type="button"
                    className="btn bg-gradient-primary mt-4 col-6"
                  >
                    Book your Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Item */}
      </section>

      {/* Steps Section */}
      <section className="py-6">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto text-center pb-4">
              <h2>How to get Started ?</h2>
              <p className="lead">Follow these steps</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-md-3">
              <div className="p-3 text-center">
                <div className="icon icon-shape bg-gradient-primary shadow mx-auto">
                  <FontAwesomeIcon
                    className="fa fas text-sm"
                    icon={faMoneyCheckAlt}
                  />
                </div>
                <a>
                  <h5 className="mt-4">
                    Understand plan
                    <br />& pricing
                  </h5>
                  <FontAwesomeIcon
                    className="arrow-right"
                    icon={faArrowRight}
                  />
                </a>
              </div>
            </div>
            <div className="col-md-3 col-md-3">
              <div className="p-3 text-center">
                <div className="icon icon-shape bg-gradient-primary shadow mx-auto">
                  <FontAwesomeIcon
                    className="fa fas text-sm"
                    icon={faClipboard}
                  />
                </div>
                <a>
                  <h5 className="mt-4">
                    Book your
                    <br />
                    Consultation
                  </h5>
                  <FontAwesomeIcon
                    className="arrow-right"
                    icon={faArrowRight}
                  />
                </a>
              </div>
            </div>
            <div className="col-md-3 col-md-3">
              <div className="p-3 text-center">
                <div className="icon icon-shape bg-gradient-primary shadow mx-auto">
                  <FontAwesomeIcon
                    className="fa fas text-sm"
                    icon={faCalendarCheck}
                  />
                </div>
                <a>
                  <h5 className="mt-4">
                    Schedule the
                    <br />
                    Session
                  </h5>
                  <FontAwesomeIcon
                    className="arrow-right"
                    icon={faArrowRight}
                  />
                </a>
              </div>
            </div>
            <div className="col-md-3 col-md-3">
              <div className="p-3 text-center">
                <div className="icon icon-shape bg-gradient-primary shadow mx-auto">
                  <FontAwesomeIcon
                    className="fa fas text-sm"
                    icon={faAddressCard}
                  />
                </div>
                <a>
                  <h5 className="mt-4">
                    Get your session with<br />required therapist
                  </h5>
                  <FontAwesomeIcon
                    className="arrow-right"
                    icon={faArrowRight}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Steps Section */}
    </>
  );
}
