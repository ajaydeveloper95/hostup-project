import React,{useState} from "react";
import TopOffer from "../TopOffer/TopOffer";
import Header from "../Header/Main";
import PageBannerTwo from "./PageBannerTwo";
import Footer from "../Footer/Main";
import PricingOne from "./PricingOne";
import PricingTwo from "./PricingTwo";
import Faq from "./Faq";
import MobileHeader from "../MobileHeader/Main";

function Main() {
  const [active, setactive] = useState(false);
  return (
    <>
      <TopOffer />
      <div className="page-wrapper">
        <Header setactive={setactive}/>
        <PageBannerTwo />
        <PricingOne />
        <PricingTwo />
        <Faq />
        <Footer />
      </div>
      <MobileHeader setactive={setactive} active={active} />
    </>
  );
}

export default Main;
