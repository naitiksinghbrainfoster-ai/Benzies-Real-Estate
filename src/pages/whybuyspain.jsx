import React from "react";

import Header from "../components/header";
import HeroSection from "../components/why-buy-property-in-spain/herosection";
import SecondSection from "../components/why-buy-property-in-spain/secondsection";
import ThirdSection from "../components/why-buy-property-in-spain/thirdsection";
import FouthSection from "../components/why-buy-property-in-spain/fouthsection";
import Contactform from "../components/homesection/contactfrom";

import Footer from "../components/footer";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <FouthSection />
      <Contactform />
      <Footer />
    </>
  );
};

export default Home;