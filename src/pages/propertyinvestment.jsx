import React from "react";

import Header from "../components/header";
import HeroSection from "../components/property-investment-guide/herosection";
import SecondSection from "../components/property-investment-guide/secondsection";
import Investorsection from "../components/property-investment-guide/investorsection";
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