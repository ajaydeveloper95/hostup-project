import React, { useState } from "react";
import Header from "../Header4/Main";
import Footer from "../Footer/Main";
import MobileHeader from "../MobileHeader/Main";
import Banner from "./Banner";
import Pricing from "./Pricing";
import Faq from "./Faq";
import ComingSoon from "./ComingSoon";
import Nfs from "./Nfs";
import WhyChoose from "./WhyChoose";
import Blog from "./Blog";
import Contact from "./Contact";

const Home4 = () => {
  const [active, setactive] = useState(false);
  return (
    <>
      <div className="page-wrapper">
        <section className="sale-one">
          <div className="container">
            <div className="sale-one__inner">
              <div className="sale-one__shape-1">
                <img
                  src={require("../../assets/images/shapes/sale-one-shape-1.png")}
                  alt="img"
                />
              </div>
              <div className="sale-one__shape-2">
                <img
                  src={require("../../assets/images/shapes/sale-one-shape-2.png")}
                  alt="img"
                />
              </div>
              <p className="sale-one__text-1">Get 4 months free before 2023.</p>
              <div className="sale-one__content-box">
                <div className="timer-box">
                  <div className="countdown-timer">
                    <div className="default-coundown">
                      <div className="box">
                        <div
                          className="countdown time-countdown-two"
                          data-countdown-time="2023/09/01"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="sale-one__text-2">End of year savings are live!</p>
            </div>
          </div>
        </section>
        <Header setactive={setactive} />
        <Banner />
        <Pricing />
        <Faq />
        <ComingSoon />
        <Nfs />
        <WhyChoose />
        <Blog />
        <Contact />
        <Footer />
      </div>
      <MobileHeader setactive={setactive} active={active} />
    </>
  );
};

export default Home4;
