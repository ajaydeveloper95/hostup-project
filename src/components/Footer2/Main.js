import React from "react";
import LogoImg from "../../assets/images/logo.png";

function Main() {
  return (
    <>
      <footer className="footer-main footer-main-two">
        <div className="footer-main-two__top">
          <div className="container">
            <div className="footer-main-two__top-inner">
              <p className="footer-main-two__top-text">
                <a href="login.html">Log in</a> to Hostup. Or,{" "}
                <a href="register.html">create an account</a> for $20 off your
                first month of Application Hosting
              </p>
              <div className="language-switcher">
                <i className="icon-globe" />
                <select className="selectpicker">
                  <option value="en" selected="">
                    English
                  </option>
                  <option value="fr">French </option>
                  <option value="it"> Italian</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-main-two__middle">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4">
                <div className="footer-widget footer-widget-two">
                  <div className="footer-widget-two__logo">
                    <a href="index.html">
                      <img src={LogoImg} width={106} height={36} alt="" />
                    </a>
                  </div>
                  <p className="footer-widget-two__text">
                    All the Lorem Ipsum generators on the Internet tend to
                    repeat predefined chunks as necessary, making this the first
                    true generator on the Internet. It uses dictionary of over
                    200 Latin word.
                  </p>
                  <ul className="list-unstyled footer-widget__social">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4">
                <div className="footer-widget footer-widget-two--domain">
                  <h3 className="footer-widget__title">Domain</h3>
                  <ul className="list-unstyled footer-widget__nav">
                    <li>
                      <a href="about.html">Domain Name Search</a>
                    </li>
                    <li>
                      <a href="about.html">Domain Transfer</a>
                    </li>
                    <li>
                      <a href="about.html">New TLDs</a>
                    </li>
                    <li>
                      <a href="about.html">Handshake domains</a>
                    </li>
                    <li>
                      <a href="about.html">Personal Domain</a>
                    </li>
                    <li>
                      <a href="about.html">Marketplace</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4">
                <div className="footer-widget footer-widget-two--services">
                  <h3 className="footer-widget__title">Hosting</h3>
                  <ul className="list-unstyled footer-widget__nav">
                    <li>
                      <a href="shared-hosting.html">Web hosting</a>
                    </li>
                    <li>
                      <a href="cloud-hosting.html">Cloud hosting</a>
                    </li>
                    <li>
                      <a href="wordpress-hosting.html">WordPress hosting</a>
                    </li>
                    <li>
                      <a href="reseller-hosting.html">Reseller hosting</a>
                    </li>
                    <li>
                      <a href="vps-hosting.html">VPS hosting</a>
                    </li>
                    <li>
                      <a href="dedicated-hosting.html">Dedicated hosting</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4">
                <div className="footer-widget footer-widget-two--company">
                  <h3 className="footer-widget__title">Company</h3>
                  <ul className="list-unstyled footer-widget__nav">
                    <li>
                      <a href="about.html">About Hostup</a>
                    </li>
                    <li>
                      <a href="about.html">Reviews</a>
                    </li>
                    <li>
                      <a href="blog.html">Company blog</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact us</a>
                    </li>
                    <li>
                      <a href="contact.html">Careers</a>
                    </li>
                    <li>
                      <a href="about.html">Faqs</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4">
                <div className="footer-widget footer-widget-two--help">
                  <h3 className="footer-widget__title">Help</h3>
                  <ul className="list-unstyled footer-widget__nav">
                    <li>
                      <a href="about.html">Status Updates</a>
                    </li>
                    <li>
                      <a href="about.html">Knowledgebase</a>
                    </li>
                    <li>
                      <a href="about.html">How-To Videos</a>
                    </li>
                    <li>
                      <a href="about.html">Submit Ticket</a>
                    </li>
                    <li>
                      <a href="about.html">Live Chat</a>
                    </li>
                    <li>
                      <a href="about.html">Report Abuse</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-main-two__contact-and-newsletter">
              <div className="row">
                <div className="col-xl-6">
                  <div className="footer-main-two__contact">
                    <ul className="list-unstyled footer-main-two__contact-list">
                      <li>
                        <div className="icon">
                          <span className="icon-phone" />
                        </div>
                        <div className="content">
                          <span>Sale Helpline</span>
                          <p>
                            <a href="tel:19200252500">(+1)92 0025 2500</a>
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="icon-support-icon-2" />
                        </div>
                        <div className="content">
                          <span>Support</span>
                          <p>
                            <a href="tel:19200252500">(+1)92 0025 2500</a>
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="footer-main-two__newsletter">
                    <h4 className="footer-main-two__newsletter-title">
                      Newsletter
                    </h4>
                    <div
                      className="footer-main-two__newsletter-form mc-form"
                      data-url="MC_FORM_URL"
                    >
                      <input
                        type="email"
                        name="EMAIL"
                        placeholder="Enter your email address"
                      />
                      <button
                        type="submit"
                        className="thm-btn footer-main-two__newsletter-btn"
                      >
                        <span>
                          Subscribe
                          <i className="icon-arrow" />
                        </span>
                      </button>
                    </div>
                    <div className="mc-form__response" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-bottom footer-bottom-two">
        <div className="container">
          <div className="footer-bottom__inner">
            <p>
              <i className="far fa-copyright" /> Copyright{" "}
              <span className="dynamic-year" />
              Hostup. All Rights Reserved
            </p>
            <ul className="list-unstyled footer-bottom__links">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms &amp; Conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
