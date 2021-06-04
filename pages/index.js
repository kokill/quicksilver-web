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
                  <i className="fas fa-ship opacity-10"></i>
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
                  <i className="fas fa-handshake opacity-10"></i>
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
                  <i className="fas fa-hourglass opacity-10"></i>
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

      <section className="py-md-7 mt-md-5">
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-md-6">
              <div className="primary text-left border-radius-lg">
                <div className="icon">
                  <svg
                    className="text-primary"
                    width="25px"
                    height="25px"
                    viewBox="0 0 43 36"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    className="mt-3"
                  >
                    <title>credit-card</title>
                    <g
                      id="Basic-Elements"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        id="Rounded-Icons"
                        transform="translate(-2169.000000, -745.000000)"
                        fill="#FFFFFF"
                        fillRule="nonzero"
                      >
                        <g
                          id="Icons-with-opacity"
                          transform="translate(1716.000000, 291.000000)"
                        >
                          <g
                            id="credit-card"
                            transform="translate(453.000000, 454.000000)"
                          >
                            <path
                              className="color-background"
                              d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"
                              id="Path"
                              opacity="0.593633743"
                            ></path>
                            <path
                              className="color-foreground"
                              d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"
                              id="Shape"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <h5 className="mt-3">Modular Components</h5>
                <p>
                  The Arctic Ocean freezes every winter and much of the sea-ice
                  then thaws every summer, and that process will continue
                  whatever.
                </p>
              </div>
              <div className="primary text-left border-radius-lg mt-6">
                <div className="icon">
                  <svg
                    className="text-primary"
                    width="25px"
                    height="25px"
                    viewBox="0 0 40 40"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    className="mt-3"
                  >
                    <title>chart-pie-35</title>
                    <g
                      id="Basic-Elements"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        id="Rounded-Icons"
                        transform="translate(-1720.000000, -742.000000)"
                        fill="#FFFFFF"
                        fillRule="nonzero"
                      >
                        <g
                          id="Icons-with-opacity"
                          transform="translate(1716.000000, 291.000000)"
                        >
                          <g
                            id="chart-pie-35"
                            transform="translate(4.000000, 451.000000)"
                          >
                            <path
                              className="color-background"
                              d="M21.6666667,18.3333333 L39.915,18.3333333 C39.11,8.635 31.365,0.89 21.6666667,0.085 L21.6666667,18.3333333 Z"
                              id="Path"
                              opacity="0.602864583"
                            ></path>
                            <path
                              className="color-foreground"
                              d="M20.69,21.6666667 L7.09833333,35.2583333 C10.585,38.21 15.085,40 20,40 C30.465,40 39.0633333,31.915 39.915,21.6666667 L20.69,21.6666667 Z"
                              id="Path"
                            ></path>
                            <path
                              className="color-foreground"
                              d="M18.3333333,19.31 L18.3333333,0.085 C8.085,0.936666667 0,9.535 0,20 C0,24.915 1.79,29.415 4.74166667,32.9016667 L18.3333333,19.31 Z"
                              id="Path"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <h5 className="mt-3">Great Features</h5>
                <p>
                  People are so scared to lose that they don't even try. Like,
                  one thing people can't say is that I'm not trying, and I'm not
                  trying my hardest.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="primary text-left border-radius-lg">
                <div className="icon">
                  <svg
                    className="text-primary"
                    width="25px"
                    height="25px"
                    viewBox="0 0 42 44"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    className="mt-3"
                  >
                    <title>time-alarm</title>
                    <g
                      id="Basic-Elements"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        id="Rounded-Icons"
                        transform="translate(-2319.000000, -440.000000)"
                        fill="#FFFFFF"
                        fillRule="nonzero"
                      >
                        <g
                          id="Icons-with-opacity"
                          transform="translate(1716.000000, 291.000000)"
                        >
                          <g
                            id="time-alarm"
                            transform="translate(603.000000, 149.000000)"
                          >
                            <path
                              className="color-background"
                              d="M18.8086957,4.70034783 C15.3814926,0.343541521 9.0713063,-0.410050841 4.7145,3.01715217 C0.357693695,6.44435519 -0.395898667,12.7545415 3.03130435,17.1113478 C5.53738466,10.3360568 11.6337901,5.54042955 18.8086957,4.70034783 L18.8086957,4.70034783 Z"
                              id="Path"
                              opacity="0.6"
                            ></path>
                            <path
                              className="color-background"
                              d="M38.9686957,17.1113478 C42.3958987,12.7545415 41.6423063,6.44435519 37.2855,3.01715217 C32.9286937,-0.410050841 26.6185074,0.343541521 23.1913043,4.70034783 C30.3662099,5.54042955 36.4626153,10.3360568 38.9686957,17.1113478 Z"
                              id="Path"
                              opacity="0.6"
                            ></path>
                            <path
                              className="color-foreground"
                              d="M34.3815652,34.7668696 C40.2057958,27.7073059 39.5440671,17.3375603 32.869743,11.0755718 C26.1954189,4.81358341 15.8045811,4.81358341 9.13025701,11.0755718 C2.45593289,17.3375603 1.79420418,27.7073059 7.61843478,34.7668696 L3.9753913,40.0506522 C3.58549114,40.5871271 3.51710058,41.2928217 3.79673036,41.8941824 C4.07636014,42.4955431 4.66004722,42.8980248 5.32153275,42.9456105 C5.98301828,42.9931963 6.61830436,42.6784048 6.98113043,42.1232609 L10.2744783,37.3434783 C16.5555112,42.3298213 25.4444888,42.3298213 31.7255217,37.3434783 L35.0188696,42.1196087 C35.6014207,42.9211577 36.7169135,43.1118605 37.53266,42.5493622 C38.3484064,41.9868639 38.5667083,40.8764423 38.0246087,40.047 L34.3815652,34.7668696 Z M30.1304348,25.5652174 L21,25.5652174 C20.49574,25.5652174 20.0869565,25.1564339 20.0869565,24.6521739 L20.0869565,15.5217391 C20.0869565,15.0174791 20.49574,14.6086957 21,14.6086957 C21.50426,14.6086957 21.9130435,15.0174791 21.9130435,15.5217391 L21.9130435,23.7391304 L30.1304348,23.7391304 C30.6346948,23.7391304 31.0434783,24.1479139 31.0434783,24.6521739 C31.0434783,25.1564339 30.6346948,25.5652174 30.1304348,25.5652174 Z"
                              id="Shape"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <h5 className="mt-3">Awesome Support</h5>
                <p>
                  The time is now for it to be okay to be great. People in this
                  world shun people for being great. For being a bright color.
                </p>
              </div>
              <div className="primary text-left border-radius-lg mt-6">
                <div className="icon">
                  <svg
                    className="text-primary"
                    width="25px"
                    height="25px"
                    viewBox="0 0 52 35"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    className="mt-3"
                  >
                    <title>sound-wave</title>
                    <g
                      id="Basic-Elements"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        id="Rounded-Icons"
                        transform="translate(-2015.000000, -596.000000)"
                        fill="#FFFFFF"
                        fillRule="nonzero"
                      >
                        <g
                          id="Icons-with-opacity"
                          transform="translate(1716.000000, 291.000000)"
                        >
                          <g
                            id="sound-wave"
                            transform="translate(299.000000, 305.000000)"
                          >
                            <path
                              className="color-foreground"
                              d="M15.2941176,30.5882353 C14.6024837,30.5882353 13.9754248,30.1667974 13.7154248,29.5210458 L8.11777778,15.5269281 L6.51189542,17.9366013 C6.19581699,18.4090196 5.66562092,18.6928105 5.09803922,18.6928105 L0,18.6928105 L0,15.2941176 L4.18888889,15.2941176 L7.08287582,10.9522876 C7.43294118,10.4288889 8.03281046,10.1467974 8.67346405,10.2045752 C9.30052288,10.2708497 9.84261438,10.6769935 10.0754248,11.263268 L15.0969935,23.8214379 L22.1696732,1.19294118 C22.3905882,0.482614379 23.0465359,0 23.7908497,0 C23.792549,0 23.792549,0 23.7942484,0 C24.5385621,0.00169934641 25.1962092,0.487712418 25.4154248,1.19973856 L31.2305882,20.1015686 L34.3267974,15.9738562 C34.6462745,15.5456209 35.1509804,15.2941176 35.6862745,15.2941176 L40.7843137,15.2941176 L40.7843137,18.6928105 L36.5359477,18.6928105 L31.9477124,24.8104575 C31.5653595,25.3202614 30.9298039,25.5717647 30.2959477,25.4647059 C29.6671895,25.3542484 29.1522876,24.9005229 28.9636601,24.2904575 L23.7772549,7.43803922 L16.9152941,29.3952941 C16.7011765,30.0818301 16.0792157,30.5593464 15.3603922,30.5865359 C15.3366013,30.5882353 15.3162092,30.5882353 15.2941176,30.5882353 Z"
                              id="Path"
                            ></path>
                            <path
                              className="color-background"
                              d="M26.5098039,34.6666667 C25.8181699,34.6666667 25.1911111,34.2452288 24.9311111,33.5994771 L19.3334641,19.6053595 L17.7275817,22.0150327 C17.4115033,22.487451 16.8813072,22.7712418 16.3137255,22.7712418 L11.2156863,22.7712418 L11.2156863,19.372549 L15.4045752,19.372549 L18.2985621,15.030719 C18.6486275,14.5073203 19.2484967,14.2252288 19.8891503,14.2830065 C20.5162092,14.349281 21.0583007,14.7554248 21.2911111,15.3416993 L26.3126797,27.8998693 L33.3853595,5.27137255 C33.6062745,4.56104575 34.2622222,4.07843137 35.0065359,4.07843137 C35.0082353,4.07843137 35.0082353,4.07843137 35.0099346,4.07843137 C35.7542484,4.08013072 36.4118954,4.56614379 36.6311111,5.27816993 L42.4462745,24.18 L45.5424837,20.0522876 C45.8619608,19.6240523 46.3666667,19.372549 46.9019608,19.372549 L52,19.372549 L52,22.7712418 L47.751634,22.7712418 L43.1633987,28.8888889 C42.7810458,29.3986928 42.1454902,29.6501961 41.511634,29.5431373 C40.8828758,29.4326797 40.3679739,28.9789542 40.1793464,28.3688889 L34.9929412,11.5164706 L28.1309804,33.4737255 C27.9168627,34.1602614 27.294902,34.6377778 26.5760784,34.6649673 C26.5522876,34.6666667 26.5318954,34.6666667 26.5098039,34.6666667 Z"
                              id="Path-Copy"
                              opacity="0.604957217"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <h5 className="mt-3">Modern Interface</h5>
                <p>
                  If everything I did failed - which it doesn't, it actually
                  succeeds - just the fact that I'm willing to fail is an
                  inspiration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-4 position-relative overflow-hidden">
        <img
          src="https://appsrv1-147a1.kxcdn.com/soft-ui-pro/img/shapes/waves-white.svg"
          alt="pattern-lines"
          className="position-absolute top-0 opacity-6"
        />
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto bg-gradient-dark border-radius-lg">
              <div className="row py-5">
                <div className="col-xl-4 col-md-6 px-5 position-relative">
                  <img
                    className="
                    img
                    border-radius-md
                    max-width-300
                    w-100
                    position-relative
                    z-index-2
                  "
                    src="https://appsrv1-147a1.kxcdn.com/soft-ui-pro/img/jordan.jpg"
                  />
                </div>
                <div
                  className="
                  col-xl-4 col-md-5
                  z-index-2
                  position-relative
                  px-md-3 px-5
                  my-md-auto
                  mt-4
                "
                >
                  <div>
                    <svg
                      className="text-primary"
                      width="35px"
                      height="35px"
                      viewBox="0 0 270 270"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <title>quote-down</title>
                      <g
                        id="quote-down"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <path
                          d="M107.000381,49.033238 C111.792099,48.01429 115.761022,48.6892564 116.625294,50.9407629 C117.72393,53.8028077 113.174473,58.3219079 107.017635,60.982801 C107.011653,60.9853863 107.00567,60.9879683 106.999688,60.990547 C106.939902,61.0219589 106.879913,61.0439426 106.820031,61.0659514 C106.355389,61.2618887 105.888177,61.4371549 105.421944,61.5929594 C88.3985192,68.1467602 80.3242628,76.9161885 70.3525495,90.6906738 C60.0774843,104.884196 54.9399518,119.643717 54.9399518,134.969238 C54.9399518,138.278158 55.4624127,140.716309 56.5073346,142.283691 C57.2039492,143.328613 57.9876406,143.851074 58.8584088,143.851074 C59.7291771,143.851074 61.0353294,143.241536 62.7768659,142.022461 C68.3497825,138.016927 75.4030052,136.01416 83.9365338,136.01416 C93.8632916,136.01416 102.658051,140.063232 110.320811,148.161377 C117.983572,156.259521 121.814952,165.88151 121.814952,177.027344 C121.814952,188.695638 117.417572,198.970703 108.622813,207.852539 C99.828054,216.734375 89.1611432,221.175293 76.6220807,221.175293 C61.9931745,221.175293 49.3670351,215.166992 38.7436627,203.150391 C28.1202903,191.133789 22.8086041,175.024577 22.8086041,154.822754 C22.8086041,131.312012 30.0359804,110.239421 44.490733,91.6049805 C58.2196377,73.906272 74.3541002,59.8074126 102.443135,50.4450748 C102.615406,50.3748509 102.790055,50.3058192 102.966282,50.2381719 C104.199241,49.7648833 105.420135,49.3936487 106.596148,49.1227802 L107,49 Z M233.000381,49.033238 C237.792099,48.01429 241.761022,48.6892564 242.625294,50.9407629 C243.72393,53.8028077 239.174473,58.3219079 233.017635,60.982801 C233.011653,60.9853863 233.00567,60.9879683 232.999688,60.990547 C232.939902,61.0219589 232.879913,61.0439426 232.820031,61.0659514 C232.355389,61.2618887 231.888177,61.4371549 231.421944,61.5929594 C214.398519,68.1467602 206.324263,76.9161885 196.352549,90.6906738 C186.077484,104.884196 180.939952,119.643717 180.939952,134.969238 C180.939952,138.278158 181.462413,140.716309 182.507335,142.283691 C183.203949,143.328613 183.987641,143.851074 184.858409,143.851074 C185.729177,143.851074 187.035329,143.241536 188.776866,142.022461 C194.349783,138.016927 201.403005,136.01416 209.936534,136.01416 C219.863292,136.01416 228.658051,140.063232 236.320811,148.161377 C243.983572,156.259521 247.814952,165.88151 247.814952,177.027344 C247.814952,188.695638 243.417572,198.970703 234.622813,207.852539 C225.828054,216.734375 215.161143,221.175293 202.622081,221.175293 C187.993174,221.175293 175.367035,215.166992 164.743663,203.150391 C154.12029,191.133789 148.808604,175.024577 148.808604,154.822754 C148.808604,131.312012 156.03598,110.239421 170.490733,91.6049805 C184.219638,73.906272 200.3541,59.8074126 228.443135,50.4450748 C228.615406,50.3748509 228.790055,50.3058192 228.966282,50.2381719 C230.199241,49.7648833 231.420135,49.3936487 232.596148,49.1227802 L233,49 Z"
                          id="quote-up"
                          fill="#cb0c9f"
                          fillRule="nonzero"
                          transform="translate(135.311778, 134.872794) scale(-1, -1) translate(-135.311778, -134.872794) "
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <p className="text-lg text-white">
                    Decisions: If you can’t decide, the answer is no. If two
                    equally difficult paths, choose the one more painful in the
                    short term (pain avoidance is creating an illusion of
                    equality). Choose the path that leaves you more equanimous
                    in the long term.
                  </p>
                  <p className="text-white font-weight-bold text-sm">
                    Michael -
                    <span className="text-xs font-weight-normal">Writter</span>
                  </p>
                  <hr className="vertical start-100 ms-n5 d-xl-block d-none" />
                </div>
                <div className="col-1"></div>
                <div className="col-xl-2 col-12 px-xl-0 px-5 my-xl-auto">
                  <h3 className="text-white mt-xl-0 mt-5">1,340,000 +</h3>
                  <p className="text-sm text-white opacity-8">
                    Developers and Companies around the world using our
                    products.
                  </p>
                  <a
                    href="javascript:;"
                    className="text-primary icon-move-right text-sm"
                  >
                    See all products{" "}
                    <i className="fas fa-arrow-right text-xs"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-3 mt-n10 py-7">
        <div className="container">
          <div className="row text-center justify-content-center pt-10">
            <div className="col-lg-6">
              <span className="badge rounded-pill badge-primary mb-2">
                Co-working
              </span>
              <h2>Explore our places in London</h2>
              <p>
                If you can’t decide, the answer is no. If two equally difficult
                paths, choose the one more painful in the short term (pain
                avoidance is creating an illusion of equality).
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-4 mb-lg-0 mb-4">
              <a href="javascript:;">
                <div className="card card-background move-on-hover mb-4">
                  <div
                    className="full-background"
                    style={{
                      backgroundImage:
                        "url(https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2389&q=80)",
                    }}
                  ></div>
                  <div className="card-body pt-12">
                    <h4 className="text-white">Campus 6</h4>
                    <p>
                      Website visitors today demand a frictionless user
                      expericence.
                    </p>
                  </div>
                </div>
              </a>
              <a href="javascript:;">
                <div className="card card-background move-on-hover">
                  <div
                    className="full-background"
                    style={{
                      backgroundImage:
                        "url(https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1398&q=80)",
                    }}
                  ></div>
                  <div className="card-body pt-12">
                    <h4 className="text-white">Virtual Office</h4>
                    <p>
                      If you’re more passionate about founding a business than
                      the business itself, you can fall into a ten year trap.
                      Better to stay emotionally unattached and select the best
                      opportunity that arises. Applies to relationships too.
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 mb-lg-0 mb-4">
              <a href="javascript:;">
                <div className="card card-background move-on-hover mb-4">
                  <div
                    className="full-background"
                    style={{
                      backgroundImage:
                        "url(https://images.unsplash.com/photo-1533327325824-76bc4e62d560?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80)",
                    }}
                  ></div>
                  <div className="card-body pt-12">
                    <h4 className="text-white">Cozy Spots</h4>
                    <p>
                      If you’re more passionate about founding a business than
                      the business itself, you can fall into a ten year trap.
                      Better to stay emotionally unattached and select the best
                      opportunity that arises. Applies to relationships too.
                    </p>
                  </div>
                </div>
              </a>
              <a href="javascript:;">
                <div className="card card-background move-on-hover">
                  <div
                    className="full-background"
                    style={{
                      backgroundImage:
                        "url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2126&q=80)",
                    }}
                  ></div>
                  <div className="card-body pt-12">
                    <h4 className="text-white">Co-working Spaces</h4>
                    <p>
                      Smart money is just dumb money that’s been through a
                      crash.
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4">
              <a href="javascript:;">
                <div className="card card-background move-on-hover mb-4">
                  <div
                    className="full-background"
                    style={{
                      backgroundImage:
                        "url(https://images.unsplash.com/photo-1517701221265-7da25447217b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2106&q=80)",
                    }}
                  ></div>
                  <div className="card-body pt-12">
                    <h4 className="text-white">Home Office</h4>
                    <p>
                      Website visitors today demand a frictionless user
                      expericence — especially when using search. Because of the
                      hight standards.
                    </p>
                  </div>
                </div>
              </a>
              <a href="javascript:;">
                <div className="card card-background move-on-hover">
                  <div
                    className="full-background"
                    style={{
                      backgroundImage:
                        "url(https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80)",
                    }}
                  ></div>
                  <div className="card-body pt-12">
                    <h4 className="text-white">Private Space</h4>
                    <p>
                      Technology is not only the thing that moves the human race
                      forward, but it’s the only thing that ever has. Without
                      technology, we’re just monkeys playing in the dirt.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
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
      </section>
      <footer className="footer pt-5 mt-5">
        <hr className="horizontal dark mb-5" />
        <div className="container">
          <div className="row">
            <div className="col-md-3 mb-4 ms-auto">
              <div>
                <h6 className="text-gradient text-primary font-weight-bolder">
                  Soft UI Design System
                </h6>
              </div>
              <div>
                <h6 className="mt-3 mb-2 opacity-8">Social</h6>
                <ul className="d-flex flex-row ms-n3 nav">
                  <li className="nav-item">
                    <a
                      className="nav-link pe-1"
                      href="https://www.facebook.com/CreativeTim/"
                      target="_blank"
                    >
                      <i className="fab fa-facebook text-lg opacity-8"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link pe-1"
                      href="https://twitter.com/creativetim"
                      target="_blank"
                    >
                      <i className="fab fa-twitter text-lg opacity-8"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link pe-1"
                      href="https://dribbble.com/creativetim"
                      target="_blank"
                    >
                      <i className="fab fa-dribbble text-lg opacity-8"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link pe-1"
                      href="https://github.com/creativetimofficial"
                      target="_blank"
                    >
                      <i className="fab fa-github text-lg opacity-8"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link pe-1"
                      href="https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w"
                      target="_blank"
                    >
                      <i className="fab fa-youtube text-lg opacity-8"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 col-sm-6 col-6 mb-4">
              <div>
                <h6 className="text-gradient text-primary text-sm">Company</h6>
                <ul className="flex-column ms-n3 nav">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://www.creative-tim.com/presentation"
                      target="_blank"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://www.creative-tim.com/templates/free"
                      target="_blank"
                    >
                      Freebies
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://www.creative-tim.com/templates/premium"
                      target="_blank"
                    >
                      Premium Tools
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://www.creative-tim.com/blog"
                      target="_blank"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 col-sm-6 col-6 mb-4">
              <div>
                <h6 className="text-gradient text-primary text-sm">
                  Resources
                </h6>
                <ul className="flex-column ms-n3 nav">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://iradesign.io/"
                      target="_blank"
                    >
                      Illustrations
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://www.creative-tim.com/bits"
                      target="_blank"
                    >
                      Bits & Snippets
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://www.creative-tim.com/affiliates/new"
                      target="_blank"
                    >
                      Affiliate Program
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 col-sm-6 col-6 mb-4">
              <div>
                <h6 className="text-gradient text-primary text-sm">
                  Help & Support
                </h6>
                <ul className="flex-column ms-n3 nav">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://www.creative-tim.com/contact-us"
                      target="_blank"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://www.creative-tim.com/knowledge-center"
                      target="_blank"
                    >
                      Knowledge Center
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://services.creative-tim.com/?ref=ct-soft-ui-footer"
                      target="_blank"
                    >
                      Custom Development
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://www.creative-tim.com/sponsorships"
                      target="_blank"
                    >
                      Sponsorships
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 col-sm-6 col-6 mb-4 me-auto">
              <div>
                <h6 className="text-gradient text-primary text-sm">Legal</h6>
                <ul className="flex-column ms-n3 nav">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://www.creative-tim.com/terms"
                      target="_blank"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://www.creative-tim.com/privacy"
                      target="_blank"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://www.creative-tim.com/license"
                      target="_blank"
                    >
                      Licenses (EULA)
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12">
              <div className="text-center">
                <p className="my-4 text-sm">
                  &copy;
                  <script>document.write(new Date().getFullYear());</script>
                  Soft UI Design System by
                  <a href="https://bit.ly/3fKQZaL" target="_blank">
                    Creative Tim
                  </a>
                  - coded by
                  <a href="https://appseed.us" target="_blank">
                    AppSeed
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
