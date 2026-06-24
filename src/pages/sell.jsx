import React from "react";

import Header from "../components/header";
import HeroSection from "../components/sellproperty/buyherosection";
import SellformSection from "../components/sellproperty/sellformsection";
import ExperienceSection from "../components/homesection/experiencesection";
import HowwehelpSection from "../components/homesection/howwehelp";
import FAQSection from "../components/sellproperty/faqsection";



import Footer from "../components/footer";

const Home = () => {
  return (
    <>
      <Header />
     <HeroSection />
    <SellformSection />
    <ExperienceSection />
    <HowwehelpSection />
    <FAQSection />
      <Footer />
    </>
  );
};

export default Home;