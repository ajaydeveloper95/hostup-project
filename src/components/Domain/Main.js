import React,{useState} from "react";
import TopOffer from "../TopOffer/TopOffer";
import Header from "../Header/Main";
import BannerFour from "./BannerFour";
import BuyDomain from "./BuyDomain";
import BenefitsDomain from "./BenefitsDomain";
import Testimonial from "./Testimonial";
import FeatureNine from "./FeatureNine";
import BuyDomainTwo from "./BuyDomainTwo";
import FaqTwo from "./FaqTwo";
import Footer from "../Footer/Main";
import MobileHeader from "../MobileHeader/Main";

function Main() {
  const [active, setactive] = useState(false);
  return (
    <>
      <TopOffer />
      <div className="page-wrapper">
        <Header setactive={setactive}/>
        <BannerFour />
        <BuyDomain />
        <BenefitsDomain />
        <Testimonial />
        <FeatureNine />
        <BuyDomainTwo />
        <FaqTwo />
        <Footer />
      </div>
      <MobileHeader setactive={setactive} active={active} />
    </>
  );
}

export default Main;
