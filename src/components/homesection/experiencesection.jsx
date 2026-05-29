import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import BannerImage from "../../assets/img/homeimg/Rectangle 1151.png";

const ExperienceSection = () => {

  useEffect(() => {

    AOS.init({
      duration: 1000,
      once: true,
    });

  }, []);

  return (

    <section className="w-full py-16 sm:py-20 lg:py-24 bg-[#F7F7F7] overflow-hidden">

      <div className="relative w-full overflow-hidden">

        {/* Background Image */}
        <div className="overflow-hidden">

          <img
            src={BannerImage}
            alt="Experience"
            className="
              w-full
              h-[500px]
              sm:h-[550px]
              lg:h-[600px]
              object-cover
              scale-105
              animate-[slowZoom_12s_ease-in-out_infinite_alternate]
            "
          />

        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          text-center
          px-5
          sm:px-6
        ">

          <div
            className="max-w-[1100px]"
            data-aos="fade-up"
          >

            {/* Heading */}
            <h2 className="
              text-white
              text-[34px]
              leading-[44px]
              sm:text-[42px]
              sm:leading-[54px]
              lg:text-[52px]
              lg:leading-[82px]
              font-normal
              font-[Pochaevsk]
            ">

              Your Journey To Luxury Living Starts Here

            </h2>

            {/* Paragraph */}
            <p className="
              text-white/80
              text-[16px]
              leading-[30px]
              sm:text-[20px]
              sm:leading-[38px]
              mt-6
              sm:mt-8
              max-w-[850px]
              mx-auto
              font-[Poppins]
            ">

              Benzies Real Estate helps international buyers navigate
              every step of purchasing property in Spain — from
              property search and investment guidance to legal
              support and aftercare services.

            </p>

            {/* Buttons */}
            <div
              className="
                mt-10
                sm:mt-12
                flex
                flex-col
                sm:flex-row
                items-center
                justify-center
                gap-5
              "
              data-aos="fade-up"
              data-aos-delay="300"
            >

              {/* Button 1 */}
              <button className="
                bg-white
                text-[#181A20]
                px-8
                sm:px-12
                py-4
                sm:py-5
                text-[16px]
                sm:text-[18px]
                font-medium
                font-[Poppins]
                hover:bg-[#181A20]
                hover:text-white
                transition-all
                duration-300
                hover:scale-[1.03]
              ">

                Schedule Consultation

              </button>

              {/* Button 2 */}
              <button className="
                border
                border-white
                text-white
                px-8
                sm:px-12
                py-4
                sm:py-5
                text-[16px]
                sm:text-[18px]
                font-medium
                font-[Poppins]
                hover:bg-white
                hover:text-[#181A20]
                transition-all
                duration-300
                hover:scale-[1.03]
              ">

                Explore Properties

              </button>

            </div>

          </div>

        </div>

      </div>

      {/* Custom Animation */}
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

export default ExperienceSection;