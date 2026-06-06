import React from "react";

import Header from "../components/header";
import HeroSection from "../components/buyingprocess/herosection";
import SecondSection from "../components/buyingprocess/buysteps";
import Contactform from "../components/homesection/contactfrom";

import Footer from "../components/footer";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <SecondSection />
      <Contactform />
      <Footer />
    </>
  );
};

export default Home;