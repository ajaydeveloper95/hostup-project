import React,{useState} from "react";
import TopOffer from "../TopOffer/TopOffer";
import Header from "../Header/Main";
import Banner from "./Banner";
import Maps from "./Maps";
import ContactInfo from "./ContactInfo";
import ContactOne from "./ContactOne";
import Footer from "../Footer/Main";
import MobileHeader from "../MobileHeader/Main";

function Main() {
  const [active, setactive] = useState(false);
  return (
    <>
      <TopOffer />
      <div className="page-wrapper">
        <Header setactive={setactive} />
        <Banner />
        <Maps />
        <ContactInfo />
        <ContactOne />
        <Footer />
      </div>
      <MobileHeader setactive={setactive} active={active} />
    </>
  );
}

export default Main;
