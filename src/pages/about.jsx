import React from "react";

import Header from "../components/header";
import HeroSection from "../components/aboutproperty/aboutherosection";
import SecondSection from "../components/aboutproperty/secondsection";
import TeamSection from "../components/aboutproperty/aboutteam";
import Whysection from "../components/aboutproperty/whychoose";

import ServiceSection from "../components/aboutproperty/servicesection";
import HowwehelpSection from "../components/homesection/howwehelp";
import TestimonialsSection from "../components/homesection/testimonialsSection";
import Latestoffersection from "../components/homesection/LatestUpdatesOffers";
import Footer from "../components/footer";

const Home = () => {
  return (
    <>
      <Header />

      <HeroSection />
      <SecondSection />
      <TeamSection />
      <ServiceSection />
      <Whysection />
      <HowwehelpSection />
    <TestimonialsSection />
    <Latestoffersection />
      <Footer />
    </>
  );
};

export default Home;