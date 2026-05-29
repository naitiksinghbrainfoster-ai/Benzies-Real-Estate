import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import heroVideo from "../../assets/img/video/homehero.mp4";

const HeroSection = () => {

  useEffect(() => {

    AOS.init({
      duration: 1200,
      once: true,
    });

  }, []);

  return (

    <section className="relative w-full px-4 sm:px-6 pt-4 sm:pt-6">

      {/* Video Banner */}
      <div className="relative rounded-[12px] overflow-hidden">

        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="
            w-full
            h-[620px]
            sm:h-[850px]
            lg:h-[75vh]
            object-cover
          "
        >

          <source src={heroVideo} type="video/mp4" />

        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-5">

          {/* Heading */}
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="
              text-white
              text-[32px]
              leading-[42px]
              sm:text-[52px]
              sm:leading-[88px]
              lg:text-[58px]
              lg:leading-[95px]
              font-normal
              tracking-wide
              max-w-[1200px]
              font-[Pochaevsk]
            "
          >

            Luxury Real Estate on the Costa del Sol

          </h1>

          {/* Paragraph */}
          <p
            data-aos="fade-up"
            data-aos-delay="500"
            className="
              text-white
              text-[18px]
              leading-[34px]
              sm:text-[22px]
              sm:leading-[42px]
              mt-6
              max-w-[850px]
              font-[Poppins]
              font-light
            "
          >

            Benzies Real Estate guides international buyers through every step of purchasing property in Spain — from property search to legal support, investment guidance, and aftercare services.

          </p>

          {/* Buttons */}
          <div
            data-aos="fade-up"
            data-aos-delay="800"
            className="mt-10 flex flex-col sm:flex-row gap-5"
          >

            <button className="
              bg-white
              text-[#1E3240]
              px-10
              py-4
              rounded-[6px]
              text-[18px]
              font-medium
              font-[Poppins]
              hover:bg-[#1E3240]
              hover:text-white
              transition-all
              duration-500
            ">

              Explore Properties

            </button>

            <button className="
              border
              border-white
              text-white
              px-10
              py-4
              rounded-[6px]
              text-[18px]
              font-medium
              font-[Poppins]
              hover:bg-white
              hover:text-[#1E3240]
              transition-all
              duration-500
            ">

              Schedule Consultation

            </button>

          </div>

        </div>

      </div>

    </section>

  );
};

export default HeroSection;