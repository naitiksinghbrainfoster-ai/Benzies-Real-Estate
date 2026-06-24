import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import banner from "../../assets/img/aboutimg/heroabout.png";

// ✅ property prop comes from parent page (already fetched)
const HeroSection = ({ property }) => {

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  // ✅ Use first API image, fallback to static banner
  const heroImage = property?.Pictures?.Picture?.[0]?.PictureURL || banner;

  // ✅ Use API title
  const heroTitle = property
    ? `${property.PropertyType?.NameType} in ${property.Location}`
    : "Property Details";

  // ✅ Use API location + description snippet
  const heroDesc = property
    ? `${property.Location}, ${property.Province} — ${property.Country}`
    : "Benzies Real Estate provides premium property guidance, investment expertise, and trusted support for international clients seeking exceptional real estate opportunities.";

  return (
    <section className="relative w-full px-4 sm:px-6 pt-4 sm:pt-6">

      <div className="relative rounded-[12px] overflow-hidden">

        <img
          src={heroImage}
          alt={heroTitle}
          className="
            w-full h-[520px] sm:h-[650px] lg:h-[550px]
            object-cover scale-105
            animate-[slowZoom_12s_ease-in-out_infinite_alternate]
          "
        />

        <div className="absolute inset-0 bg-black/35"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-5">

          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="
              text-white text-[42px] leading-[60px]
              sm:text-[72px] sm:leading-[90px]
              lg:text-[52px] lg:leading-[90px]
              font-medium max-w-[1100px] font-[Pochaevsk]
            "
          >
            {heroTitle}
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="500"
            className="
              text-white text-[18px] leading-[34px]
              sm:text-[22px] sm:leading-[42px]
              mt-5 sm:mt-6 max-w-[600px] font-[Poppins]
            "
          >
            {heroDesc}
          </p>

        </div>

      </div>

      <style>
        {`
          @keyframes slowZoom {
            0% { transform: scale(1); }
            100% { transform: scale(1.08); }
          }
        `}
      </style>

    </section>
  );
};

export default HeroSection;
