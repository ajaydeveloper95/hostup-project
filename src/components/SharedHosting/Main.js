import React,{useState} from "react";
import TopOffer from "../TopOffer/TopOffer";
import Header from "../Header/Main";
import Footer from "../Footer/Main";
import PageBannerThree from "./PageBannerThree";
import PricingFour from "./PricingFour";
import AddonsOne from "./AddonsOne";
import FeatureTwo from "./FeatureTwo";
import SharedHosting from "./SharedHosting";
import WhyUs from "./whyUs";
import TestimonialTwo from "./TestimonialTwo";
import CounterOne from "./CounterOne";
import Faq from "./Faq";
import MobileHeader from "../MobileHeader/Main";

function Main() {
  const [active, setactive] = useState(false);
  return (
    <>
      <TopOffer />
      <div className="page-wrapper">
        <Header setactive={setactive}/>
        <PageBannerThree />
        <PricingFour />
        <AddonsOne />
        <FeatureTwo />
        <SharedHosting />
        <WhyUs />
        <TestimonialTwo />
        <CounterOne />
        <Faq />
        <Footer />
      </div>
      <MobileHeader setactive={setactive} active={active} />
    </>
  );
}

export default Main;
