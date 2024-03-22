import React from "react";
import { Link } from "react-router-dom";

const Header3 = () => {
  return (
    <header className="main-header-one main-header-three">
      <div className="main-header-three__nav-box sticky-header">
        <div className="container">
          <div className="main-header-one__logo">
            <Link to="/">
              <img
                src="assets/images/logo-2.png"
                width="106"
                height="36"
                alt="Hostup || Web Hosting HTML Template"
              />
            </Link>
          </div>
          <nav className="main-header-one__nav main-header-three__nav">
            <ul className="main-menu__list">
              <li className="menu-item-has-children">
                <Link to="/">Home</Link>
                <ul>
                  <li>
                    <Link to="/">Home One</Link>
                  </li>
                  <li>
                    <Link to="/index2">Home Two</Link>
                  </li>
                  <li>
                    <Link to="/index3">Home Three</Link>
                  </li>
                  <li>
                    <Link to="/index4">Home Four</Link>
                  </li>
                  <li className="menu-item-has-children">
                    <Link to="/">Header Styles</Link>
                    <ul>
                      <li>
                        <Link to="/">Header One</Link>
                      </li>
                      <li>
                        <Link to="/index2">Header Two</Link>
                      </li>
                      <li>
                        <Link to="/index3">Header Three</Link>
                      </li>
                      <li>
                        <Link to="/index4">Header Four</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li className="menu-item-has-children">
                <Link to="/">Hosting</Link>
                <ul>
                  <li>
                    <Link to="/shared-hosting">Shared Hosting</Link>
                  </li>
                  <li>
                    <Link to="/wordpress-hosting">WordPress Hosting</Link>
                  </li>
                  <li>
                    <Link to="/vps-hosting">VPS Hosting</Link>
                  </li>
                  <li>
                    <Link to="/cloud-hosting">Cloud Hosting</Link>
                  </li>
                  <li>
                    <Link to="/game-hosting">Game Hosting</Link>
                  </li>
                  <li>
                    <Link to="/reseller-hosting">Reseller Hosting</Link>
                  </li>
                  <li>
                    <Link to="/dedicated-hosting">Dedicated Hosting</Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children megamenu">
                <Link to="/domain">Domain</Link>
                <ul>
                  <li>
                    <section className="domain-showcase">
                      <div className="container">
                        <div className="domain-showcase__inner">
                          <div className="row">
                            <div className="col-lg-3">
                              <div className="domain-showcase__item">
                                <div className="domain-showcase__icon">
                                  <i className="fa fa-check"></i>
                                </div>
                                <div className="domain-showcase__title">
                                  Easy domain management
                                </div>

                                <div className="domain-showcase__tagline">
                                  The point of using Lorem Ipsum is that it has
                                  more normal distribution of letters, as
                                  opposed.
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="domain-showcase__item">
                                <div className="domain-showcase__icon">
                                  <i className="fa fa-check"></i>
                                </div>
                                <div className="domain-showcase__title">
                                  Auto-renewal
                                </div>

                                <div className="domain-showcase__tagline">
                                  The point of using Lorem Ipsum is that it has
                                  more normal distribution of letters, as
                                  opposed.
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="domain-showcase__item">
                                <div className="domain-showcase__icon">
                                  <i className="fa fa-check"></i>
                                </div>
                                <div className="domain-showcase__title">
                                  Domain lock
                                </div>

                                <div className="domain-showcase__tagline">
                                  The point of using Lorem Ipsum is that it has
                                  more normal distribution of letters, as
                                  opposed.
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="domain-showcase__item">
                                <div className="domain-showcase__icon">
                                  <i className="fa fa-check"></i>
                                </div>
                                <div className="domain-showcase__title">
                                  Domain forwarding
                                </div>

                                <div className="domain-showcase__tagline">
                                  The point of using Lorem Ipsum is that it has
                                  more normal distribution of letters, as
                                  opposed.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <Link to="/">Pages</Link>
                <ul>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/blog-details">Blog Details</Link>
                  </li>
                  <li>
                    <Link to="/ssl-certificate">SSL Certificate</Link>
                  </li>
                  <li>
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    <Link to="/pricing">Pricing</Link>
                  </li>
                  <li>
                    <Link to="/compare-pricing">Compare Pricing</Link>
                  </li>
                  <li>
                    <Link to="/data-center">Data Center</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                  <li>
                    <Link to="/under-construction">Under Construction</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <div className="main-header-one__right">
            <Link to="/" className="mobile-nav__toggler">
              <span></span>
              <span></span>
              <span></span>
            </Link>
            <Link to="/" className="main-header-one__cart">
              <i className="icon-cart"></i>
            </Link>
            <div className="language-switcher">
              <i className="icon-globe"></i>
              <select className="selectpicker">
                <option value="en" selected>
                  English
                </option>
                <option value="fr">French </option>
                <option value="it"> Italian</option>
              </select>
            </div>
            <Link to="/register" className="thm-btn main-header-one__btn">
              <span>
                Register
                <i className="icon-arrow"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header3;
