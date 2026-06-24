import React from "react";

import Header from "../components/header";
import HeroSection from "../components/contact/contactherosection";
import ContactformSection from "../components/contact/contactformsection";
import MapSection from "../components/contact/mapsection";
import Footer from "../components/footer";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ContactformSection />
      <MapSection />
      <Footer />
    </>
  );
};

export default Home;