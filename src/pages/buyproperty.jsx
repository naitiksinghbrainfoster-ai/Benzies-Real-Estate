import React from "react";

import Header from "../components/header";
import HeroSection from "../components/buyproperty/buyherosection";
import Buyproperty from "../components/buyproperty/buypropertylist";
import CounterSection from "../components/homesection/countersection";
import HowwehelpSection from "../components/homesection/howwehelp";
import Latestoffersection from "../components/homesection/LatestUpdatesOffers";

import Footer from "../components/footer";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Buyproperty />
      <CounterSection />
      <HowwehelpSection />
      <Latestoffersection />
      <Footer />
    </>
  );
};

export default Home;