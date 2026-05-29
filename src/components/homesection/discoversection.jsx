import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import discoverLeft from "../../assets/img/homeimg/discoverleft.png";

import firstIcon from "../../assets/img/homeimg/discover-firsticon.svg";
import secondIcon from "../../assets/img/homeimg/discover-second.svg";
import thirdIcon from "../../assets/img/homeimg/discover-third.svg";
import fouthIcon from "../../assets/img/homeimg/discover-fouthicon.svg";

import arrowIcon from "../../assets/img/homeimg/discover-arrow.svg";

const DiscoverSection = () => {

  useEffect(() => {

    AOS.init({
      duration: 800,
      once: true,
    });

  }, []);

  return (
    <section className="bg-[#F5F5F5] py-16 sm:py-20 lg:py-28 overflow-hidden">

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">

          {/* Left Image */}
          <div
            data-aos="fade-right"
            data-aos-duration="700"
            className="relative"
          >

            <img
              src={discoverLeft}
              alt="discover"
              className="
                w-full
                max-w-[700px]
                mx-auto
                transition-all
                duration-500
                hover:scale-[1.03]
              "
            />

          </div>

          {/* Right Content */}
          <div
            data-aos="fade-left"
            data-aos-duration="700"
            className="flex flex-col"
          >

            {/* Heading */}
            <h2 className="
              text-[34px]
              leading-[44px]
              sm:text-[45px]
              sm:leading-[55px]
              lg:text-[52px]
              lg:leading-[62px]
              font-normal
              text-[#1F1F1F]
              font-[Pochaevsk]
            ">

            Luxury Living With Complete Guidance

            </h2>

            {/* Description */}
            <p className="
              text-[#666666]
              text-[16px]
              leading-[30px]
              sm:text-[18px]
              sm:leading-[34px]
              mt-4
              sm:mt-4
              max-w-[650px]
              font-[Poppins]
            ">

             From finding the perfect property to legal support and investment assistance, Benzies Real Estate delivers a seamless buying experience in Spain.
            </p>

            {/* Features */}
           {/* Features */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mt-6 sm:mt-8">

  {/* Item 1 */}
  <div
    data-aos="zoom-in"
    data-aos-delay="100"
    data-aos-duration="400"
    className="flex items-center gap-4"
  >

    <img
      src={firstIcon}
      alt="nie applications"
      className="w-10 h-10"
    />

    <p className="text-[#5E5E5E] text-[16px] sm:text-[18px] font-medium font-[Poppins]">
      NIE Applications
    </p>

  </div>

  {/* Item 2 */}
  <div
    data-aos="zoom-in"
    data-aos-delay="200"
    data-aos-duration="400"
    className="flex items-center gap-4"
  >

    <img
      src={secondIcon}
      alt="bank assistance"
      className="w-10 h-10"
    />

    <p className="text-[#5E5E5E] text-[16px] sm:text-[18px] font-medium font-[Poppins]">
      Bank Account Assistance
    </p>

  </div>

  {/* Item 3 */}
  <div
    data-aos="zoom-in"
    data-aos-delay="300"
    data-aos-duration="400"
    className="flex items-center gap-4"
  >

    <img
      src={thirdIcon}
      alt="legal support"
      className="w-10 h-10"
    />

    <p className="text-[#5E5E5E] text-[16px] sm:text-[18px] font-medium font-[Poppins]">
      Legal & Notary Support
    </p>

  </div>

  {/* Item 4 */}
  <div
    data-aos="zoom-in"
    data-aos-delay="400"
    data-aos-duration="400"
    className="flex items-center gap-4"
  >

    <img
      src={fouthIcon}
      alt="investment guidance"
      className="w-10 h-10"
    />

    <p className="text-[#5E5E5E] text-[16px] sm:text-[18px] font-medium font-[Poppins]">
      Utility setup
    </p>

  </div>

</div>

            {/* Buttons */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="600"
              className="
                flex
                flex-col
                sm:flex-row
                gap-4
                sm:gap-5
                mt-10
                sm:mt-14
                w-full
                justify-start
              "
            >

              {/* Browse Button */}
              <button className="
                bg-[#183346]
                text-white
                px-8
                sm:px-10
                py-4
                sm:py-5
                flex
                items-center
                justify-center
                gap-4
                text-[16px]
                sm:text-[18px]
                font-medium
                font-[Poppins]
                hover:bg-black
                transition-all
                duration-300
                hover:scale-[1.03]
              ">

                Browse Properties

                <img
                  src={arrowIcon}
                  alt="arrow"
                  className="w-5"
                />

              </button>

              {/* Experience Button */}
              <button className="
                border
                border-[#183346]
                text-[#183346]
                px-8
                sm:px-10
                py-4
                sm:py-5
                text-[16px]
                sm:text-[18px]
                font-medium
                font-[Poppins]
                hover:bg-[#183346]
                hover:text-white
                transition-all
                duration-300
                hover:scale-[1.03]
              ">

                Schedule Consultation

              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default DiscoverSection;