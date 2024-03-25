import React,{useState} from "react";
import { Link } from "react-router-dom";
import TopOffer from "../TopOffer/TopOffer";
import Header from "../Header/Main";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import BlogSingle from "./BlogSingle";
import Footer from "../Footer/Main";
import MobileHeader from "../MobileHeader/Main";

function Main() {
  const [active, setactive] = useState(false);
  return (
    <>
      <TopOffer />
      <div className="page-wrapper">
        <Header setactive={setactive} />
        <Breadcrumb />
        <BlogSingle />
        <Footer />
      </div>
      <MobileHeader setactive={setactive} active={active} />
    </>
  );
}

export default Main;
