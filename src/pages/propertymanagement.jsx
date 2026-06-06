import React from "react";

import Header from "../components/header";
import HeroSection from "../components/propertymanagement/herosection";
import SecondSection from "../components/propertymanagement/secondsection";
import Investorsection from "../components/propertymanagement/managementbenefits";
import Contactform from "../components/homesection/contactfrom";

import Footer from "../components/footer";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <SecondSection />
      <Investorsection />
      <Contactform />
      <Footer />
    </>
  );
};

export default Home;