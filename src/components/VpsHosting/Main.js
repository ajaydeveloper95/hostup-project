import React,{useState} from "react";
import TopOffer from "../TopOffer/TopOffer";
import Header from "../Header/Main";
import Footer from "../Footer/Main";
import PageBannerThree from "./PageBannerThree";
import PricingSix from "./PricingSix";
import PayLess from "./PayLess";
import DataBase from "./DataBase";
import FeatureThree from "./FeatureThree";
import Competitors from "./Competitors";
import TestimonialTwo from "./TestimonialTwo";
import DataBaseTwo from "./DataBaseTwo";
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
        <PricingSix />
        <PayLess />
        <DataBase />
        <FeatureThree />
        <Competitors />
        <TestimonialTwo />
        <DataBaseTwo />
        <Faq />
        <Footer />
      </div>
      <MobileHeader setactive={setactive} active={active} />
    </>
  );
}

export default Main;
