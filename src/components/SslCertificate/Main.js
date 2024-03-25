import React,{useState} from "react";
import TopOffer from "../TopOffer/TopOffer";
import Header from "../Header/Main";
import Footer from "../Footer/Main";
import PageBanner from "./PageBanner";
import SslCertificate from "./SslCertificate";
import SslSolution from "./SslSolution";
import Testimonial from "./Testimonial";
import HowItWork from "./HowItWork";
import WhyUsThree from "./WhyUsThree";
import Https from "./Https";
import SslFaq from "./SslFaq";
import MobileHeader from "../MobileHeader/Main";

function Main() {
  const [active, setactive] = useState(false);
  return (
    <>
      <TopOffer />
      <div className="page-wrapper">
        <Header setactive={setactive}/>
        <PageBanner />
        <SslCertificate />
        <SslSolution />
        <Testimonial />
        <HowItWork />
        <WhyUsThree />
        <Https />
        <SslFaq />
        <Footer />
      </div>
      <MobileHeader setactive={setactive} active={active} />
    </>
  );
}

export default Main;
