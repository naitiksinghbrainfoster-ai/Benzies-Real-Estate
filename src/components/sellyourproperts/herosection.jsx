import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import banner from "../../assets/img/whybuyproperty/herosection.png";

const HeroSection = () => {

  useEffect(() => {

    AOS.init({
      duration: 1200,
      once: true,
    });

  }, []);

  return (
    <section className="relative w-full px-4 sm:px-6 pt-4 sm:pt-6">

      {/* Banner Image */}
      <div className="relative rounded-[12px] overflow-hidden">

        <img
          src={banner}
          alt="banner"
          className="
            w-full
            h-[520px]
            sm:h-[650px]
            lg:h-[550px]
            object-cover
            scale-105
            animate-[slowZoom_12s_ease-in-out_infinite_alternate]
          "
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/35"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-5">

          {/* Heading */}
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="
              text-white
              text-[42px]
              leading-[60px]
              sm:text-[72px]
              sm:leading-[90px]
              lg:text-[52px]
              lg:leading-[90px]
              font-medium
              max-w-[1100px]
              font-[Pochaevsk]
            "
          >
          Sell Your Property
          </h1>

          {/* Paragraph */}
      

        </div>

      </div>

      {/* Background Zoom Animation */}
      <style>
        {`
          @keyframes slowZoom {
            0% {
              transform: scale(1);
            }
            100% {
              transform: scale(1.08);
            }
          }
        `}
      </style>

    </section>
  );
};

export default HeroSection;