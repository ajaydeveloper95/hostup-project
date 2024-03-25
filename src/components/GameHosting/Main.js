import React,{useState} from "react";
import TopOffer from "../TopOffer/TopOffer";
import Header from "../Header/Main";
import Footer from "../Footer/Main";
import BannerPageThree from "./BannerPageThree";
import FeatureSeven from "./FeatureSeven";
import PopularGames from "./PopularGames";
import WhyChooseFour from "./WhyChooseFour";
import TestimonialFour from "./TestimonialFour";
import GameServer from "./GameServer";
import GetAccess from "./GetAccess";
import GuidesOne from "./GuidesOne";
import Faq from "./Faq";
import MobileHeader from "../MobileHeader/Main";

function Main() {
  const [active, setactive] = useState(false);
  return (
    <>
      <TopOffer />
      {/* /.top-offer */}
      <div className="page-wrapper">
        <Header setactive={setactive}/>
        <BannerPageThree />
        <FeatureSeven />
        <PopularGames />
        <WhyChooseFour />
        <TestimonialFour />
        <GameServer />
        <GetAccess />
        <GuidesOne />
        <Faq />
        <Footer />
      </div>
      <MobileHeader setactive={setactive} active={active} />
    </>
  );
}

export default Main;
