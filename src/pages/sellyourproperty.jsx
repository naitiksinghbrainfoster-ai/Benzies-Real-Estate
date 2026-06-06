import React from "react";

import Header from "../components/header";
import HeroSection from "../components/sellyourproperts/herosection";
import SecondSection from "../components/sellyourproperts/secondsection";
import Investorsection from "../components/sellyourproperts/sellingprocesssection";
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