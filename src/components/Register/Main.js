import React, { useState } from "react";
import TopOffer from "../TopOffer/TopOffer";
import Header from "../Header/Main";
import MainBanner from "./MainBanner";
import RegisterOne from "./RegisterOne";
import Footer from "./Footer";
import MobileHeader from "../MobileHeader/Main";

function Main() {
  const [active, setactive] = useState(false);
  return (
    <>
      <TopOffer />
      <div className="page-wrapper gray-bg">
        <Header setactive={setactive} />
        <MainBanner />
        <RegisterOne />
        <Footer />
      </div>
      <MobileHeader setactive={setactive} active={active} />
    </>
  );
}

export default Main;
