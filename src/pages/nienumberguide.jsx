import React from "react";

import Header from "../components/header";
import HeroSection from "../components/nienumberguide/herosection";
import SecondSection from "../components/nienumberguide/secondsection";
import Investorsection from "../components/nienumberguide/nieprocesssection";
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