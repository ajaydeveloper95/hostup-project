import React from "react";
import TopOffer from "../TopOffer/TopOffer";
import Header from "../Header/Main";
import Footer from "../Footer/Main";
import BannerPageThree from "./BannerPageThree";
import FeatureSeven from "./FeatureSeven";
import PopularGames from "./PopularGames";
import WhyChooseFour from "./WhyChooseFour";
import TestimonialFour from "./TestimonialFour";
import GameServer from "./GameServer";
import GetAccess from "./GetAccess";
import GuidesOne from "./GuidesOne";
import Faq from "./Faq";

function Main() {
  return (
    <>
      <div className="custom-cursor__cursor" />
      <div className="custom-cursor__cursor-two" />
      <TopOffer />
      {/* /.top-offer */}
      <div className="page-wrapper">
        <Header />
        <BannerPageThree />
        <FeatureSeven />
        <PopularGames />
        <WhyChooseFour />
        <TestimonialFour />
        <GameServer />
        <GetAccess />
        <GuidesOne />
        <Faq />
        <Footer />
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
