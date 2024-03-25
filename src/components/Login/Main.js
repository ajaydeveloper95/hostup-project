import React, { useState } from "react";
import TopOffer from "../TopOffer/TopOffer";
import Header from "../Header/Main";
import Footer from "../Footer2/Main";
import MobileHeader from "../MobileHeader/Main";
import RegisterOne from "./RegisterOne";
import PageBanner from "./PageBanner";

function Main() {
  const [active, setactive] = useState(false);
  return (
    <>
      <TopOffer />
      <div className="page-wrapper gray-bg">
        <Header setactive={setactive} />
        <PageBanner />
        <RegisterOne />
        <Footer />
      </div>
      <MobileHeader setactive={setactive} active={active} />
    </>
  );
}

export default Main;
