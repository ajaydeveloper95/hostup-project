import React, { useState } from "react";
import TopOffer from "../TopOffer/TopOffer";
import Header from "../Header/Main";
import PageBanner from "./PageBanner";
import PricingSeven from "./PricingSeven";
import DataCenter from "./DataCenter";
import FasterOneStart from "./FasterOneStart";
import FeatureSix from "./FeatureSix";
import Testimonial from "./Testimonial";
import GetFasterOne from "./GetFasterOne";
import Faq from "./Faq";
import Footer from "../Footer/Main";
import MobileHeader from "../MobileHeader/Main";

function Main() {
  const [active, setactive] = useState(false);
  return (
    <>
      <TopOffer />
      <div class="page-wrapper">
        <Header setactive={setactive} />
        <PageBanner />
        <PricingSeven />
        <DataCenter />
        <FasterOneStart />
        <FeatureSix />
        <Testimonial />
        <GetFasterOne />
        <Faq />
        <Footer />
      </div>
      <MobileHeader setactive={setactive} active={active} />
    </>
  );
}

export default Main;
