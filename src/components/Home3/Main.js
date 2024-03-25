import React, { useState } from "react";
import Header from "../Header3/Main";
import Banner from "./Banner";
import Whychoose from "./Whychoose";
import Hosting from "./Hosting";
import Comparison from "./Comparison";
import Domain from "./Domain";
import Services from "./Services";
import HowWorks from "./HowWorks";
import Comparison2 from "./Comparison2";
import Award from "./Award";
import Blog from "./Blog";
import MobileHeader from "../MobileHeader/Main";
import Footer from "../Footer/Main";

const Home3 = () => {
  const [active, setactive] = useState(false);

  return (
    <>
      <div class="page-wrapper">
        <Header setactive={setactive} />
        <Banner />
        <Whychoose />
        <Hosting />
        <Comparison />
        <Domain />
        <Services />
        <HowWorks />
        <Comparison2 />
        <Award />
        <Blog />
        <Footer />
      </div>
      <MobileHeader setactive={setactive} active={active} />
    </>
  );
};

export default Home3;
