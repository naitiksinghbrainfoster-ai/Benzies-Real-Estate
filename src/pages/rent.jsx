import React from "react";

import Header from "../components/header";
import HeroSection from "../components/rentproperty/buyherosection";
import Buyproperty from "../components/rentproperty/buypropertylist";
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