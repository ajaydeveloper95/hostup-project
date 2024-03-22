import React from "react";
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
import Footer from "../Footer/Main"

function Main() {
  return (
    <>
      <div class="custom-cursor__cursor"></div>
      <div class="custom-cursor__cursor-two"></div>
      <TopOffer />
      <div class="page-wrapper">
        <Header />
        <PageBanner/>
        <PricingSeven/>
        <DataCenter/>
        <FasterOneStart/>
        <FeatureSix/>
        <Testimonial/>
        <GetFasterOne/>
        <Faq/>
        <Footer/>
      </div>
    </>
  );
}

export default Main;
