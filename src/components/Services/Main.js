import React,{useState} from "react";
import TopOffer from "../TopOffer/TopOffer";
import Header from "../Header/Main";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Footer from "../Footer/Main";
import ServiceOne from "./ServiceOne";
import CustomerRating from "./CustomerRating";
import WhyChooseTwo from "./WhyChooseTwo";
import MobileHeader from "../MobileHeader/Main";

function Main() {
  const [active, setactive] = useState(false);
  return (
    <>
      <TopOffer />
      <div className="page-wrapper">
        <Header setactive={setactive}/>
        <Breadcrumb />
        <ServiceOne />
        <CustomerRating />
        <WhyChooseTwo />
        <Footer />
      </div>
      <MobileHeader setactive={setactive} active={active} />
    </>
  );
}

export default Main;
