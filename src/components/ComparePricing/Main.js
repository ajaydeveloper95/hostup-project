import React from "react";
import { Link } from "react-router-dom";
import TopOffer from "../TopOffer/TopOffer";
import Header from "../Header/Main";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import ComparisionTwo from "./ComparisionTwo";
import Comparision from "./Comparision";
import Faq from "./Faq";
import Footer from "../Footer/Main";
import loog1 from "../../assets/images/logo.png"

function Main() {
  return (
    <>
      <div className="custom-cursor__cursor" />
      <div className="custom-cursor__cursor-two" />
      <TopOffer />
      {/* /.top-offer */}
      <div className="page-wrapper">
        <Header />
        <Breadcrumb />
        <ComparisionTwo />
        <Comparision />
        <Faq />
        <Footer />
      </div>
      {/* /.page-wrapper */}
      <div className="mobile-nav__wrapper">
        <div className="mobile-nav__overlay mobile-nav__toggler" />
        {/* /.mobile-nav__overlay */}
        <div className="mobile-nav__content">
          <Link to="/#" className="mobile-nav__close mobile-nav__toggler">
            <span />
            <span />
          </Link>
          <div className="logo-box">
            <Link to="/index" aria-label="logo image">
              <img
                src={loog1}
                width={106}
                height={36}
                alt="Hostup"
              />
            </Link>
          </div>
          {/* /.logo-box */}
          <div className="mobile-nav__container" />
          {/* /.mobile-nav__container */}
          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-phone" />
              <Link to="/tel:+8898006802">+ 88 ( 9800 ) 6802</Link>
            </li>
            <li>
              <i className="fa fa-envelope" />
              <Link to="/mailto:needhelp@company.com">
                needhelp@company.com
              </Link>
            </li>
            <li>
              <i className="fa fa-map-marker-alt" />
              88 Broklyn Golden Road Street <br /> New York. USA
            </li>
          </ul>
          {/* /.mobile-nav__contact */}
          <ul className="mobile-nav__social">
            <li>
              <Link to="/#">
                <i className="fab fa-twitter" />
              </Link>
            </li>
            <li>
              <Link to="/#">
                <i className="fab fa-facebook-f" />
              </Link>
            </li>
            <li>
              <Link to="/#">
                <i className="fab fa-pinterest-p" />
              </Link>
            </li>
            <li>
              <Link to="/#">
                <i className="fab fa-instagram" />
              </Link>
            </li>
          </ul>
          {/* /.mobile-nav__social */}
        </div>
        {/* /.mobile-nav__content */}
      </div>
      {/* /.mobile-nav__wrapper */}
      <Link
        to="/#"
        data-target="html"
        className="scroll-to-target scroll-to-top"
      >
        <i className="fa fa-angle-up" />
      </Link>
      {/* plugin js */}
      {/* template js */}
    </>
  );
}

export default Main;
