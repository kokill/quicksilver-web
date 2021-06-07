import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faTwitter,
    faYoutube,
  } from "@fortawesome/free-brands-svg-icons";

export default function FooterComponent() {
    return (
        <>
        {/* Footer section */}
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
                      <FontAwesomeIcon
                        className="social text-lg opacity-8"
                        icon={faFacebook}
                      />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link pe-1"
                      href="https://twitter.com/creativetim"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        className="social text-lg opacity-8"
                        icon={faTwitter}
                      />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link pe-1"
                      href="https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        className="social text-lg opacity-8"
                        icon={faYoutube}
                      />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link pe-1"
                      href="https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        className="social text-lg opacity-8"
                        icon={faInstagram}
                      />
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
                    <Link href="/">
                      <a className="nav-link">Home</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/consultation">
                      <a className="nav-link">Consultation</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/coaching">
                      <a className="nav-link">Coaching</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/publications">
                      <a
                        className="nav-link"
                      >
                        Publications
                      </a>
                    </Link>
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
                  &copy; Auticare assistive technology platform by
                  <a href="https://bit.ly/3fKQZaL" target="_blank">
                    &#160;Embright Infotech.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer section */}
      </>
    )
}