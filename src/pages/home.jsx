import React from "react";

import Header from "../components/header";
import HeroSection from "../components/homesection/herosection";
import HeroFilter from "../components/homesection/herofilter";
import DiscoverSection from "../components/homesection/discoversection";
import TopFeaturedSection from "../components/homesection/topfeatured-section";
import CounterSection from "../components/homesection/countersection";
import PropertyListings from "../components/homesection/propertylistingsection";
import ExperienceSection from "../components/homesection/experiencesection";
import HowwehelpSection from "../components/homesection/howwehelp";

import TestimonialsSection from "../components/homesection/testimonialsSection";
import Latestoffersection from "../components/homesection/LatestUpdatesOffers";
import Footer from "../components/footer";

const Home = () => {
  return (
    <>
      <Header />

      <HeroSection />

      <HeroFilter />
    <DiscoverSection />
    <TopFeaturedSection />
    <CounterSection />
    <PropertyListings />
    <ExperienceSection />
    <HowwehelpSection />
    <TestimonialsSection />
    <Latestoffersection />
      <Footer />
    </>
  );
};

export default Home;