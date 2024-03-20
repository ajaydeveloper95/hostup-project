import React from "react";

function Footer() {
  return (
    <div>
      <footer className="footer-main footer-main--normal-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-xl-4 ">
              <div className="footer-widget">
                <div className="footer-widget__logo">
                  <a href="index.html">
                    <img
                      src="assets/images/logo.png"
                      width={106}
                      height={36}
                      alt="img"
                    />
                  </a>
                </div>

                <p className="footer-widget__text">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </p>

                <div className="footer-widget__phone">
                  <i className="icon-phone-1 icon" />
                  <a href="tel:+180090201000">Helpline - (+1) 800 9020 1000</a>
                </div>

                <div className="footer-widget__payment">
                  <a href="#">
                    <img
                      src="assets/images/resources/footer-payment-1.png"
                      alt="footer payment method"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="assets/images/resources/footer-payment-2.png"
                      alt="footer payment method"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="assets/images/resources/footer-payment-3.png"
                      alt="footer payment method"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="assets/images/resources/footer-payment-4.png"
                      alt="footer payment method"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="assets/images/resources/footer-payment-5.png"
                      alt="footer payment method"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-xl-3">
              <div className="footer-widget footer-widget--services">
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

            <div className="col-lg-6 col-xl-2">
              <div className="footer-widget">
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

            <div className="col-lg-6 col-xl-3 footer-widget--contact">
              <div className="footer-widget">
                <h3 className="footer-widget__title">Follow us on</h3>

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
                <h3 className="footer-widget__title">Talk to us</h3>
                <ul className="list-unstyled footer-widget__contact">
                  <li>
                    <a href="#">
                      <i className="icon-chat" />
                      Talk via chat
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-whatsapp" />
                      Whats app
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-bottom">
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
    </div>
  );
}

export default Footer;
