import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function NavbarComponent() {
  const [collapsed, setCollapsed] = useState(false);
  const handleNavClick = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      {/* Navbar blur light */}
      <div className="container position-sticky z-index-sticky top-0">
        <div className="row">
          <div className="col-12">
            <nav
              className="
              navbar navbar-expand-lg
              blur blur-rounded
              top-0
              z-index-3
              shadow
              position-absolute
              mt-4
              my-3
              py-2
              start-0
              end-0
              mx-4
            "
            >
              <div className="container-fluid">
                <Link href="/">
                  <a
                    className="navbar-brand font-weight-bolder ms-sm-3"
                    data-placement="bottom"
                  >
                    <Image
                      src="/images/common/Auticare Logo.webp"
                      alt="Auticare Logo"
                      priority="true"
                      width={50}
                      height={50}
                    ></Image>
                  </a>
                </Link>
                <Link href="/contact">
                  <a
                    className="
                  btn btn-md
                  bg-gradient-primary
                  btn-round
                  mb-0
                  ms-auto
                  d-lg-none d-block
                "
                    onClick={() => setCollapsed(false)}
                  >
                    Contact Us
                  </a>
                </Link>
                <button
                  className={`navbar-toggler shadow-none ms-2 ${
                    collapsed ? "collapsed" : ""
                  }`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navigation"
                  aria-controls="navigation"
                  aria-expanded={collapsed}
                  aria-label="Toggle navigation"
                  onClick={() => handleNavClick()}
                >
                  <span className="navbar-toggler-icon mt-2">
                    <span className="navbar-toggler-bar bar1"></span>
                    <span className="navbar-toggler-bar bar2"></span>
                    <span className="navbar-toggler-bar bar3"></span>
                  </span>
                </button>
                <div
                  className={`navbar-collapse pt-3 pb-2 py-lg-0 collapse ${
                    !collapsed ? "" : "show"
                  }`}
                  id="navigation"
                >
                  <ul className="navbar-nav navbar-nav-hover mx-auto">
                    <li className="nav-item dropdown dropdown-hover mx-2">
                      <Link href="/">
                        <a
                          className="
                        nav-link
                        ps-2
                        d-flex
                        justify-content-between
                        cursor-pointer
                        align-items-center
                      "
                          id="dropdownMenuPages"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          onClick={() => setCollapsed(false)}
                        >
                          Home
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item dropdown dropdown-hover mx-2">
                      <Link href="/consultation">
                        <a
                          className="
                        nav-link
                        ps-2
                        d-flex
                        justify-content-between
                        cursor-pointer
                        align-items-center
                      "
                          id="dropdownMenuAccount"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          onClick={() => setCollapsed(false)}
                        >
                          Consultation
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item dropdown dropdown-hover mx-2">
                      <Link href="/coaching">
                        <a
                          className="
                        nav-link
                        ps-2
                        d-flex
                        justify-content-between
                        cursor-pointer
                        align-items-center
                      "
                          id="dropdownMenuBlocks"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          onClick={() => setCollapsed(false)}
                        >
                          Coaching
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item dropdown dropdown-hover mx-2">
                      <Link href="/blogs">
                        <a
                          className="
                        nav-link
                        ps-2
                        d-flex
                        justify-content-between
                        cursor-pointer
                        align-items-center
                      "
                          id="dropdownMenuDocs"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          onClick={() => setCollapsed(false)}
                        >
                          Blogs
                        </a>
                      </Link>
                    </li>
                  </ul>
                  <ul className="navbar-nav d-lg-block d-none">
                    <li className="nav-item">
                      <Link href="/contact">
                        <a className="btn btn-md bg-gradient-primary btn-round mb-0 me-1">
                          Contact US
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      {/* Navbar blur light */}
    </>
  );
}
