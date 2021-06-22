import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FONTAWESOMEICON } from "../utils/fontawesome-icons";
import { SOCIAL_LINKS } from "../utils/social-links";

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
                  Auticare Assistive Technology Platform
                </h6>
              </div>
              <div>
                <h6 className="mt-3 mb-2 opacity-8">Social</h6>
                <ul className="d-flex flex-row ms-n3 nav">
                  <li className="nav-item">
                    <a
                      className="nav-link pe-1"
                      href={SOCIAL_LINKS.facebook}
                      target="_blank"
                      rel="noopener"
                    >
                      <FontAwesomeIcon
                        className="social text-lg opacity-8"
                        icon={FONTAWESOMEICON.iconFacebook}
                      />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link pe-1"
                      href={SOCIAL_LINKS.twitter}
                      target="_blank"
                      rel="noopener"
                    >
                      <FontAwesomeIcon
                        className="social text-lg opacity-8"
                        icon={FONTAWESOMEICON.iconTwitter}
                      />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link pe-1"
                      href={SOCIAL_LINKS.youtube}
                      target="_blank"
                      rel="noopener"
                    >
                      <FontAwesomeIcon
                        className="social text-lg opacity-8"
                        icon={FONTAWESOMEICON.iconYoutube}
                      />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link pe-1"
                      href={SOCIAL_LINKS.instagram}
                      target="_blank"
                      rel="noopener"
                    >
                      <FontAwesomeIcon
                        className="social text-lg opacity-8"
                        icon={FONTAWESOMEICON.iconInstagram}
                      />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link pe-1"
                      href={SOCIAL_LINKS.linkedin}
                      target="_blank"
                      rel="noopener"
                    >
                      <FontAwesomeIcon
                        className="social text-lg opacity-8"
                        icon={FONTAWESOMEICON.iconLinkedin}
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
                    <Link href="/blogs">
                      <a className="nav-link">Blogs</a>
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
                      rel="noopener"
                    >
                      Illustrations
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://www.creative-tim.com/bits"
                      target="_blank"
                      rel="noopener"
                    >
                      Bits & Snippets
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://www.creative-tim.com/affiliates/new"
                      target="_blank"
                      rel="noopener"
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
                    <Link href="/contact">
                      <a className="nav-link">Contact Us</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://www.creative-tim.com/knowledge-center"
                      target="_blank"
                      rel="noopener"
                    >
                      Knowledge Center
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://services.creative-tim.com/?ref=ct-soft-ui-footer"
                      target="_blank"
                      rel="noopener"
                    >
                      Custom Development
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://www.creative-tim.com/sponsorships"
                      target="_blank"
                      rel="noopener"
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
                      rel="noopener"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://www.creative-tim.com/privacy"
                      target="_blank"
                      rel="noopener"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="https://www.creative-tim.com/license"
                      target="_blank"
                      rel="noopener"
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
                  <a
                    href={SOCIAL_LINKS.embright}
                    target="_blank"
                    rel="noopener"
                  >
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
  );
}
