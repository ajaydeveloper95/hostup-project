import React from "react";

function Main() {
  return (
    <>
      <div className="custom-cursor__cursor" />
      <div className="custom-cursor__cursor-two" />
      <section className="top-offer">
        <div className="container text-center">
          <span
            className="top-offer__dismiss sec-dismiss"
            data-section-class=".top-offer"
          >
            <i className="icon-close" />
          </span>
          {/* /.top-offer__dismiss */}
          <p>
            <i className="icon-stars" />
            Hostup Flash Sale: Starting at $2.59/mo for a limited time{" "}
            <a href="#">
              <span>Read more</span> <i className="icon-arrow" />
            </a>{" "}
            <i className="icon-stars" />
          </p>
        </div>
        {/* /.container */}
      </section>
      {/* /.top-offer */}
      <div className="page-wrapper gray-bg">
        <header className="main-header-one sticky-header">
          <div className="container">
            <div className="main-header-one__logo">
              <a href="index.html">
                <img
                  src="assets/images/logo.png"
                  width={106}
                  height={36}
                  alt="Hostup || Web Hosting HTML Template"
                />
              </a>
            </div>
            {/* /.main-header-one__logo */}
            <nav className="main-header-one__nav">
              <ul className="main-menu__list">
                <li className="menu-item-has-children">
                  <a href="index.html">Home</a>
                  <ul>
                    <li>
                      <a href="index.html">Home One</a>
                    </li>
                    <li>
                      <a href="index-2.html">Home Two</a>
                    </li>
                    <li>
                      <a href="index-3.html">Home Three</a>
                    </li>
                    <li>
                      <a href="index-4.html">Home Four</a>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="index.html">Header Styles</a>
                      <ul>
                        <li>
                          <a href="index.html">Header One</a>
                        </li>
                        <li>
                          <a href="index-2.html">Header Two</a>
                        </li>
                        <li>
                          <a href="index-3.html">Header Three</a>
                        </li>
                        <li>
                          <a href="index-4.html">Header Four</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li className="menu-item-has-children">
                  <a href="#">Hosting</a>
                  <ul>
                    <li>
                      <a href="shared-hosting.html">Shared Hosting</a>
                    </li>
                    <li>
                      <a href="wordpress-hosting.html">WordPress Hosting</a>
                    </li>
                    <li>
                      <a href="vps-hosting.html">VPS Hosting</a>
                    </li>
                    <li>
                      <a href="cloud-hosting.html">Cloud Hosting</a>
                    </li>
                    <li>
                      <a href="game-hosting.html">Game Hosting</a>
                    </li>
                    <li>
                      <a href="reseller-hosting.html">Reseller Hosting</a>
                    </li>
                    <li>
                      <a href="dedicated-hosting.html">Dedicated Hosting</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children megamenu">
                  <a href="domain.html">Domain</a>
                  <ul>
                    <li>
                      <section className="domain-showcase">
                        <div className="container">
                          <div className="domain-showcase__inner">
                            <div className="row">
                              <div className="col-lg-3">
                                <div className="domain-showcase__item">
                                  <div className="domain-showcase__icon">
                                    <i className="fa fa-check" />
                                  </div>
                                  {/* /.domain-showcase__icon */}
                                  <div className="domain-showcase__title">
                                    Easy domain management
                                  </div>
                                  {/* /.domain-showcase__name */}
                                  <div className="domain-showcase__tagline">
                                    The point of using Lorem Ipsum is that it
                                    has more normal distribution of letters, as
                                    opposed.
                                  </div>
                                  {/* /.domain-showcase__tagline */}
                                </div>
                                {/* /.domain-showcase__item */}
                              </div>
                              {/* /.col-lg-3 */}
                              <div className="col-lg-3">
                                <div className="domain-showcase__item">
                                  <div className="domain-showcase__icon">
                                    <i className="fa fa-check" />
                                  </div>
                                  {/* /.domain-showcase__icon */}
                                  <div className="domain-showcase__title">
                                    Auto-renewal
                                  </div>
                                  {/* /.domain-showcase__name */}
                                  <div className="domain-showcase__tagline">
                                    The point of using Lorem Ipsum is that it
                                    has more normal distribution of letters, as
                                    opposed.
                                  </div>
                                  {/* /.domain-showcase__tagline */}
                                </div>
                                {/* /.domain-showcase__item */}
                              </div>
                              {/* /.col-lg-3 */}
                              <div className="col-lg-3">
                                <div className="domain-showcase__item">
                                  <div className="domain-showcase__icon">
                                    <i className="fa fa-check" />
                                  </div>
                                  {/* /.domain-showcase__icon */}
                                  <div className="domain-showcase__title">
                                    Domain lock
                                  </div>
                                  {/* /.domain-showcase__name */}
                                  <div className="domain-showcase__tagline">
                                    The point of using Lorem Ipsum is that it
                                    has more normal distribution of letters, as
                                    opposed.
                                  </div>
                                  {/* /.domain-showcase__tagline */}
                                </div>
                                {/* /.domain-showcase__item */}
                              </div>
                              {/* /.col-lg-3 */}
                              <div className="col-lg-3">
                                <div className="domain-showcase__item">
                                  <div className="domain-showcase__icon">
                                    <i className="fa fa-check" />
                                  </div>
                                  {/* /.domain-showcase__icon */}
                                  <div className="domain-showcase__title">
                                    Domain forwarding
                                  </div>
                                  {/* /.domain-showcase__name */}
                                  <div className="domain-showcase__tagline">
                                    The point of using Lorem Ipsum is that it
                                    has more normal distribution of letters, as
                                    opposed.
                                  </div>
                                  {/* /.domain-showcase__tagline */}
                                </div>
                                {/* /.domain-showcase__item */}
                              </div>
                              {/* /.col-lg-3 */}
                            </div>
                            {/* /.row */}
                          </div>
                          {/* /.domain-showcase__inner */}
                        </div>
                        {/* /.container */}
                      </section>
                      {/* /.domain-showcase */}
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <a href="#">Pages</a>
                  <ul>
                    <li>
                      <a href="blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="blog-details.html">Blog Details</a>
                    </li>
                    <li>
                      <a href="ssl-certificate.html">SSL Certificate</a>
                    </li>
                    <li>
                      <a href="services.html">Services</a>
                    </li>
                    <li>
                      <a href="pricing.html">Pricing</a>
                    </li>
                    <li>
                      <a href="compare-pricing.html">Compare Pricing</a>
                    </li>
                    <li>
                      <a href="data-center.html">Data Center</a>
                    </li>
                    <li>
                      <a href="login.html">Login</a>
                    </li>
                    <li>
                      <a href="register.html">Register</a>
                    </li>
                    <li>
                      <a href="under-construction.html">Under Construction</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </li>
              </ul>
              {/* /.main-menu__list */}
            </nav>
            {/* /.main-header-one__nav */}
            <div className="main-header-one__right">
              <a href="#" className="mobile-nav__toggler">
                <span />
                <span />
                <span />
              </a>
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
              <a href="#" className="main-header-one__cart">
                <i className="icon-cart" />
              </a>
              <a href="login.html" className="thm-btn main-header-one__btn">
                <span>
                  Login
                  <i className="icon-arrow" />
                </span>
              </a>
            </div>
            {/* /.main-header-one__right */}
          </div>
          {/* /.container */}
        </header>
        {/* /.main-header-one */}
        <div className="page-banner-two page-banner-two--has-bottom-padding">
          <div className="container">
            <ul className="thm-breadcrumb list-unstyled">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="#">Pages</a>
              </li>
              <li>
                <span>Login</span>
              </li>
            </ul>
            {/* /.thm-breadcrumb list-unstyled */}
            <h2 className="page-banner-two__title">Login</h2>
            {/* /.page-banner-two__title */}
          </div>
          {/* /.container */}
        </div>
        {/* /.page-banner-two */}
        <section className="register-one">
          <div className="container">
            <div
              className="register-one__inner wow fadeInUp"
              data-wow-duration="1500ms"
            >
              <h3 className="register-one__title">Sign in to Hostup</h3>
              {/* /.register-one__title */}
              <p className="register-one__text">
                The distracted by the readable content of a page when looking at
                its layout
              </p>
              {/* /.register-one__text */}
              <form action="#" className="register-one__form">
                <div className="row">
                  <div className="col-md-12">
                    <input
                      type="text"
                      name="email"
                      placeholder="Enter your email or phone number"
                    />
                  </div>
                  {/* /.col-md-12 */}
                  <div className="col-md-12">
                    <div className="register-one__form__password">
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                      />
                      <i className="icon-password password-toggler" />
                    </div>
                    {/* /.register-one__password */}
                  </div>
                  {/* /.col-md-12 */}
                  <div className="col-md-12">
                    <div className="register-one__form__forgot">
                      <a href="#">Forgot Password?</a>
                    </div>
                    {/* /.register-one__form__forgot */}
                  </div>
                  {/* /.col-md-12 */}
                  <div className="col-md-12">
                    <button type="submit" className="thm-btn register-one__btn">
                      <span>
                        Sign in
                        <i className="icon-arrow" />
                      </span>
                    </button>
                  </div>
                  {/* /.col-md-12 */}
                </div>
                {/* /.row */}
              </form>
              {/* /.register-one__form */}
              <p className="register-one__tagline">or</p>
              <div className="register-one__social">
                <a href="#">
                  <img src="assets/images/resources/login-google.png" alt="img" />
                </a>
                <a href="#">
                  <img
                    src="assets/images/resources/login-linkedin.png"
                    alt="img"
                  />
                </a>
                <a href="#">
                  <img
                    src="assets/images/resources/login-facebook.png"
                    alt="img"
                  />
                </a>
              </div>
              {/* /.register-one__social */}
              <p className="register-one__tagline register-one__tagline--highlight">
                Don’t have an account? <a href="register.html">Sign up</a>
              </p>
            </div>
            {/* /.register-one__inner */}
          </div>
          {/* /.container */}
        </section>
        {/* /.register-one */}
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
                  {/* /.footer-widget__logo */}
                  <p className="footer-widget__text">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </p>
                  {/* /.footer-widget__text */}
                  <div className="footer-widget__phone">
                    <i className="icon-phone-1 icon" />
                    <a href="tel:+180090201000">
                      Helpline - (+1) 800 9020 1000
                    </a>
                  </div>
                  {/* /.footer-widget__phone */}
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
                  {/* /.footer-widget__payment */}
                </div>
                {/* /.footer-widget */}
              </div>
              {/* /.col-xl-4 */}
              <div className="col-lg-6 col-xl-3">
                <div className="footer-widget footer-widget--services">
                  <h3 className="footer-widget__title">Hosting</h3>
                  {/* /.footer-widget__title */}
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
                  {/* /.list-unstyled */}
                </div>
                {/* /.footer-widget */}
              </div>
              {/* /.col-xl-3 */}
              <div className="col-lg-6 col-xl-2">
                <div className="footer-widget">
                  <h3 className="footer-widget__title">Company</h3>
                  {/* /.footer-widget__title */}
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
                      <a href="about.html">Faq’s</a>
                    </li>
                  </ul>
                  {/* /.list-unstyled */}
                </div>
                {/* /.footer-widget */}
              </div>
              {/* /.col-xl-2 */}
              <div className="col-lg-6 col-xl-3 footer-widget--contact">
                <div className="footer-widget">
                  <h3 className="footer-widget__title">Follow us on</h3>
                  {/* /.footer-widget__title */}
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
                  {/* /.list-unstyled */}
                  <h3 className="footer-widget__title">Talk to us</h3>
                  {/* /.footer-widget__title */}
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
                  {/* /.list-unstyled footer-widget__contact */}
                </div>
                {/* /.footer-widget */}
              </div>
              {/* /.col-xl-2 */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </footer>
        {/* /.footer-main */}
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-bottom__inner">
              <p>
                <i className="far fa-copyright" /> Copyright{" "}
                <span className="dynamic-year" />
                {/* /.dynamic-year */}
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
            {/* /.footer-bottom__inner */}
          </div>
          {/* /.container */}
        </div>
        {/* /.footer-bottom */}
      </div>
      {/* /.page-wrapper */}
      <div className="mobile-nav__wrapper">
        <div className="mobile-nav__overlay mobile-nav__toggler" />
        {/* /.mobile-nav__overlay */}
        <div className="mobile-nav__content">
          <a href="#" className="mobile-nav__close mobile-nav__toggler">
            <span />
            <span />
          </a>
          <div className="logo-box">
            <a href="index.html" aria-label="logo image">
              <img
                src="assets/images/logo.png"
                width={106}
                height={36}
                alt="Hostup"
              />
            </a>
          </div>
          {/* /.logo-box */}
          <div className="mobile-nav__container" />
          {/* /.mobile-nav__container */}
          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-phone" />
              <a href="tel:+8898006802">+ 88 ( 9800 ) 6802</a>
            </li>
            <li>
              <i className="fa fa-envelope" />
              <a href="mailto:needhelp@company.com">needhelp@company.com</a>
            </li>
            <li>
              <i className="fa fa-map-marker-alt" />
              88 Broklyn Golden Road Street <br /> New York. USA
            </li>
          </ul>
          {/* /.mobile-nav__contact */}
          <ul className="mobile-nav__social">
            <li>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-pinterest-p" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
            </li>
          </ul>
          {/* /.mobile-nav__social */}
        </div>
        {/* /.mobile-nav__content */}
      </div>
      {/* /.mobile-nav__wrapper */}
      <a href="#" data-target="html" className="scroll-to-target scroll-to-top">
        <i className="fa fa-angle-up" />
      </a>
      {/* plugin js */}
      {/* template js */}
    </>
  );
}

export default Main;
