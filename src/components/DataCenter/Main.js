import React,{useState} from "react";
import TopOffer from "../TopOffer/TopOffer";
import Header from "../Header/Main";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import BannerTwo from "./BannerTwo";
import HostingOption from "./HostingOption";
import HostingReview from "./HostingReview";
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
        <BannerTwo />
        <HostingOption />
        <HostingReview />
        <Footer />
      </div>
      <MobileHeader setactive={setactive} active={active} />
    </>
  );
}

export default Main;
