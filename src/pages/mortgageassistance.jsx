import React from "react";

import Header from "../components/header";
import HeroSection from "../components/mortgageassistance/herosection";
import SecondSection from "../components/mortgageassistance/secondsection";
import Investorsection from "../components/mortgageassistance/financingbenefits";
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