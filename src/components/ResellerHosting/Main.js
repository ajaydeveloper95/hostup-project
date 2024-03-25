import React,{useState} from "react";
import TopOffer from "../TopOffer/TopOffer";
import Header from "../Header/Main";
import BannerThree from "./BannerThree";
import PricingEight from "./PricingEight";
import FeaturesFive from "./FeaturesFive";
import WhichPlan from "./WhichPlan";
import TestimonialTwo from "./TestimonialTwo";
import WhyUsTwo from "./WhyUsTwo";
import ComparisionThree from "./ComparisionThree";
import AwardedTwo from "./AwardedTwo";
import Faq from "./Faq";
import Footer from "../Footer/Main";
import MobileHeader from "../MobileHeader/Main";

function Main() {
  const [active, setactive] = useState(false);
  return (
    <>
      <TopOffer />
      <div className="page-wrapper">
        <Header setactive={setactive}/>
        <BannerThree />
        <PricingEight />
        <FeaturesFive />
        <WhichPlan />
        <TestimonialTwo />
        <WhyUsTwo />
        <ComparisionThree />
        <AwardedTwo />
        <Faq />
        <Footer />
      </div>
      <MobileHeader setactive={setactive} active={active} />
    </>
  );
}

export default Main;
