import React from "react";

import Header from "../components/header";
import HeroSection from "../components/Discoverdestinations/herosection";
import SecondSection from "../components/Discoverdestinations/categorydestinations";

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