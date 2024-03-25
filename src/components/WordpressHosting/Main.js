import React,{useState} from "react";
import TopOffer from "../TopOffer/TopOffer";
import Header from "../Header/Main";
import Footer from "../Footer/Main";
import PageBanner from "./PageBanner";
import PricingFive from "./PricingFive";
import GetFaster from "./GetFaster";
import FasterWebHosting from "./FasterWebHosting";
import SupportMe from "./SupportMe";
import TestimonialOne from "./TestimonialOne";
import FeaturesFour from "./FeaturesFour";
import Faq from "./Faq";
import MobileHeader from "../MobileHeader/Main";

function Main() {
  const [active, setactive] = useState(false);
  return (
    <>
      <TopOffer />
      <div className="page-wrapper">
        <Header setactive={setactive}/>
        <PageBanner />
        <PricingFive />
        <GetFaster />
        <FasterWebHosting />
        <SupportMe />
        <TestimonialOne />
        <FeaturesFour />
        <Faq />
        <Footer />
      </div>
      <MobileHeader setactive={setactive} active={active} />
    </>
  );
}

export default Main;
