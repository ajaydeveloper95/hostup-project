import React from "react";

function MobileNavAndScroll() {
  return (
    <>
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
              <img src={LogoImg} width={106} height={36} alt="Hostup" />
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
      <a href="#" data-target="html" className="scroll-to-target scroll-to-top">
        <i className="fa fa-angle-up" />
      </a>
    </>
  );
}

export default MobileNavAndScroll;
