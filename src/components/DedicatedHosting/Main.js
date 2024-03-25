import React,{useState} from "react";
import TopOffer from "../TopOffer/TopOffer";
import Header from "../Header/Main";
import DedicatedHostingBanner from "./DedicatedHostingBanner";
import PricingNine from "./PricingNine";
import PowerControl from "./PowerControl";
import ExtremePerformance from "./ExtremePerformance";
import FullLoaded from "./FullLoaded";
import FeatureFive from "./FeatureFive";
import SupportTwo from "./SupportTwo";
import Testimonial from "./Testimonial";
import FaqOne from "./FaqOne";
import Footer from "../Footer/Main";
import MobileHeader from "../MobileHeader/Main";

function Main() {
  const [active, setactive] = useState(false);
  return (
    <>
      <TopOffer />
      <div className="page-wrapper">
        <Header setactive={setactive}/>
        <DedicatedHostingBanner />
        <PricingNine />
        <PowerControl />
        <ExtremePerformance />
        <FullLoaded />
        <FeatureFive />
        <SupportTwo />
        <Testimonial />
        <FaqOne />
        <Footer />
      </div>
      <MobileHeader setactive={setactive} active={active} />
    </>
  );
}

export default Main;
