import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Main";
import AboutOne from "./AboutOne";
import FeatureOne from "./FeatureOne";
import RightHosting from "./RightHosting";
import TestimonialFour from "./TestimonialFour";
import AboutPageImg from "./AboutPageImg";
import Robust from "./Robust";
import AwardedOne from "./AwardedOne";
import Footer from "../Footer/Main";
import TopOffer from "../TopOffer/TopOffer";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import MobileHeader from "../MobileHeader/Main";

function Main() {
  const [active, setactive] = useState(false);

  return (
    <div>
      <TopOffer />
      <div className="page-wrapper">
        <Header setactive={setactive} />
        <Breadcrumb />
        <AboutOne />
        <FeatureOne />
        <AboutPageImg />
        <RightHosting />
        <TestimonialFour />
        <Robust />
        <AwardedOne />
        <Footer />
      </div>
      <MobileHeader setactive={setactive} active={active} />
    </div>
  );
}

export default Main;
