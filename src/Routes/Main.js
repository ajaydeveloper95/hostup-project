import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Main";
import Home2 from "../components/Home2/Main";
import Home3 from "../components/Home3/Main";
import Home4 from "../components/Home4/Main";
import About from "../components/About/Main";
import Blog from "../components/Blog/Main";
import BlogDetails from "../components/BlogDetails/Main";
import ComparePricing from "../components/ComparePricing/Main";
import Contact from "../components/Contact/Main";
import DataCenter from "../components/DataCenter/Main";
import DedicatedHosting from "../components/DedicatedHosting/Main";
import Domain from "../components/Domain/Main";
import GameHosting from "../components/GameHosting/Main";
import Login from "../components/Login/Main";
import Pricing from "../components/Pricing/Main";
import Register from "../components/Register/Main";
import ResellerHosting from "../components/ResellerHosting/Main";
import Services from "../components/Services/Main";
import SharedHosting from "../components/SharedHosting/Main";
import SslCertificate from "../components/SslCertificate/Main";
import UnderConstruction from "../components/UnderConstruction/Main";
import VpsHosting from "../components/VpsHosting/Main";
import WordpressHosting from "../components/WordpressHosting/Main";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/index2" element={<Home2 />} />
      <Route path="/index3" element={<Home3 />} />
      <Route path="/index4" element={<Home4 />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog-details" element={<BlogDetails />} />
      <Route path="/cloud-hosting" element={<Blog />} />
      <Route path="/compare-pricing" element={<ComparePricing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/data-center" element={<DataCenter />} />
      <Route path="/dedicated-hosting" element={<DedicatedHosting />} />
      <Route path="/domain" element={<Domain />} />
      <Route path="/game-hosting" element={<GameHosting />} />
      <Route path="/login" element={<Login />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/register" element={<Register />} />
      <Route path="/reseller-hosting" element={<ResellerHosting />} />
      <Route path="/services" element={<Services />} />
      <Route path="/shared-hosting" element={<SharedHosting />} />
      <Route path="/ssl-certificate" element={<SslCertificate />} />
      <Route path="/under-construction" element={<UnderConstruction />} />
      <Route path="/vps-hosting" element={<VpsHosting />} />
      <Route path="/wordpress-hosting" element={<WordpressHosting />} />
    </Routes>
  );
};

export default Routing;
