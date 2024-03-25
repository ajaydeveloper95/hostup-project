import React,{useState} from "react";
import { Link } from "react-router-dom";
import TopOffer from "../TopOffer/TopOffer";
import Header from "../Header/Main";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import ComparisionTwo from "./ComparisionTwo";
import Comparision from "./Comparision";
import Faq from "./Faq";
import Footer from "../Footer/Main";
import MobileHeader from "../MobileHeader/Main";

function Main() {
  const [active, setactive] = useState(false);
  return (
    <>
      <TopOffer />
      {/* /.top-offer */}
      <div className="page-wrapper">
        <Header setactive={setactive}/>
        <Breadcrumb />
        <ComparisionTwo />
        <Comparision />
        <Faq />
        <Footer />
      </div>
      <MobileHeader setactive={setactive} active={active} />
    </>
  );
}

export default Main;
