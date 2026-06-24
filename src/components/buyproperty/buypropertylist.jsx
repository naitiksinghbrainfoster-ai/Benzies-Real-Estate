import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Property1 from "../../assets/img/homeimg/propertylistings1.png";
import Property2 from "../../assets/img/homeimg/propertylistings2.png";
import Property3 from "../../assets/img/homeimg/propertylistings3.png";

import BedIcon from "../../assets/img/homeimg/propertylistings-bedicon.svg";
import PersonIcon from "../../assets/img/homeimg/propertylistings-personicon.svg";
import BatIcon from "../../assets/img/homeimg/propertylistings-bat.svg";

import StarColor from "../../assets/img/homeimg/propertylistings-starwithcolor.svg";
import StarWhite from "../../assets/img/homeimg/propertylistings-starwithoutcolor.svg";

import VrIcon from "../../assets/img/homeimg/discover-firsticon2.svg";

const PropertyListings = () => {

  useEffect(() => {

    AOS.init({
      duration: 800,
      once: true,
    });

  }, []);

  const properties = [
    {
      image: Property1,
      price: "€2,400",
      title: "Luxury Villa With Panoramic Sea Views",
      location: "Marbella, Costa del Sol",
    },
    {
      image: Property2,
      price: "€4,800",
      title: "Exclusive Investment Apartment in Spain",
      location: "Puerto Banús, Marbella",
    },
    {
      image: Property3,
      price: "€6,500",
      title: "Modern Luxury Residence Golf Resorts",
      location: "Benahavís, Costa del Sol",
    },
  ];

  return (

    <section className="bg-[#F7F7F7] py-16 sm:py-20 lg:py-28 overflow-hidden">

      <div className="max-w-[1480px] mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div
          data-aos="fade-up"
          className="text-center mb-16"
        >

          <h2 className="
            text-[34px]
            leading-[44px]
            sm:text-[50px]
            sm:leading-[60px]
            lg:text-[58px]
            lg:leading-[68px]
            font-normal
            text-[#1F1F1F]
            font-[Pochaevsk]
          ">

            Discover Exceptional Luxury Properties in Spain

          </h2>

          <p className="
            text-[#6F6F6F]
            text-[16px]
            leading-[30px]
            sm:text-[20px]
            sm:leading-[38px]
            max-w-[850px]
            mx-auto
            mt-5
            sm:mt-6
            font-[Poppins]
          ">

           Explore luxury villas, beachfront residences, golf properties, and premium investment opportunities with trusted guidance from Benzies Real Estate.

          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">

          {properties.map((property, index) => (

            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="
                bg-white
                border
                border-[#E4E4E4]
                rounded-[6px]
                overflow-hidden
                transition-all
                duration-500
                group
                hover:bg-[#181A20]
              "
            >

              {/* Image */}
              <div className="relative overflow-hidden">

                <img
                  src={property.image}
                  alt="property"
                  className="
                    w-full
                    h-[320px]
                    sm:h-[360px]
                    object-cover
                    transition-all
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* Top Icons */}
                <div className="absolute top-6 left-5 flex items-center gap-2">

                  <img
                    src={StarColor}
                    alt=""
                    className="w-[22px] h-[22px] sm:w-[24px] sm:h-[24px]"
                  />

                  <img
                    src={StarColor}
                    alt=""
                    className="w-[22px] h-[22px] sm:w-[24px] sm:h-[24px]"
                  />

                  <img
                    src={StarColor}
                    alt=""
                    className="w-[22px] h-[22px] sm:w-[24px] sm:h-[24px]"
                  />

                  <img
                    src={StarWhite}
                    alt=""
                    className="w-[22px] h-[22px] sm:w-[24px] sm:h-[24px]"
                  />

                  <img
                    src={StarWhite}
                    alt=""
                    className="w-[22px] h-[22px] sm:w-[24px] sm:h-[24px]"
                  />

                </div>

                {/* VR Icon */}
                <div className="absolute top-5 right-5">

                  <img
                    src={VrIcon}
                    alt=""
                    className="
                      w-[34px]
                      h-[34px]
                      sm:w-[38px]
                      sm:h-[38px]
                      transition-all
                      duration-500
                      group-hover:brightness-0
                      group-hover:invert
                    "
                  />

                </div>

              </div>

              {/* Content */}
              <div className="p-6 sm:p-7 transition-all duration-500">

                {/* Price */}
                <div className="flex items-end gap-2 mb-4 sm:mb-5">

                  <h3 className="
                    text-[28px]
                    sm:text-[30px]
                    font-normal
                    text-[#183346]
                    leading-none
                    font-[Pochaevsk]
                    transition-all
                    duration-500
                    group-hover:text-white
                  ">

                    {property.price}

                  </h3>

                  <span className="
                    text-[#A1A1A1]
                    text-[15px]
                    sm:text-[18px]
                    mb-[2px]
                    font-[Poppins]
                    transition-all
                    duration-500
                    group-hover:text-white/70
                  ">

                    /month

                  </span>

                </div>

                {/* Title */}
                <h4 className="
                  text-[18px]
                  sm:text-[22px]
                  leading-[32px]
                  sm:leading-[38px]
                  font-normal
                  text-[#1F1F1F]
                  mb-4
                  font-[Pochaevsk]
                  transition-all
                  duration-500
                  group-hover:text-white
                ">

                  {property.title}

                </h4>

                {/* Location */}
                <p className="
                  text-[#A5A5A5]
                  text-[15px]
                  sm:text-[18px]
                  mb-5
                  font-[Poppins]
                  transition-all
                  duration-500
                  group-hover:text-white/70
                ">

                  {property.location}

                </p>

                {/* Bottom Icons */}
                <div className="grid grid-cols-2 gap-5 mt-6">

                  {/* Feature 1 */}
                  <div className="flex items-center gap-3 sm:gap-4">

                    <img
                      src={BedIcon}
                      alt=""
                      className="
                        w-[22px]
                        h-[22px]
                        sm:w-[24px]
                        sm:h-[24px]
                        transition-all
                        duration-500
                        group-hover:brightness-0
                        group-hover:invert
                      "
                    />

                    <span className="
                      text-[14px]
                      sm:text-[16px]
                      text-[#4A4A4A]
                      font-[Poppins]
                      transition-all
                      duration-500
                      group-hover:text-white
                    ">

                      Luxury Bedrooms

                    </span>

                  </div>

                  {/* Feature 2 */}
                  <div className="flex items-center gap-3 sm:gap-4">

                    <img
                      src={PersonIcon}
                      alt=""
                      className="
                        w-[22px]
                        h-[22px]
                        sm:w-[24px]
                        sm:h-[24px]
                        transition-all
                        duration-500
                        group-hover:brightness-0
                        group-hover:invert
                      "
                    />

                    <span className="
                      text-[14px]
                      sm:text-[16px]
                      text-[#4A4A4A]
                      font-[Poppins]
                      transition-all
                      duration-500
                      group-hover:text-white
                    ">

                      International Buyers

                    </span>

                  </div>

                  {/* Feature 3 */}
                  <div className="flex items-center gap-3 sm:gap-4">

                    <img
                      src={BatIcon}
                      alt=""
                      className="
                        w-[22px]
                        h-[22px]
                        sm:w-[24px]
                        sm:h-[24px]
                        transition-all
                        duration-500
                        group-hover:brightness-0
                        group-hover:invert
                      "
                    />

                    <span className="
                      text-[14px]
                      sm:text-[16px]
                      text-[#4A4A4A]
                      font-[Poppins]
                      transition-all
                      duration-500
                      group-hover:text-white
                    ">

                      Premium Features

                    </span>

                  </div>

                  {/* Feature 4 */}
                  <div className="flex items-center gap-3 sm:gap-4">

                    <img
                      src={VrIcon}
                      alt=""
                      className="
                        w-[22px]
                        h-[22px]
                        sm:w-[24px]
                        sm:h-[24px]
                        transition-all
                        duration-500
                        group-hover:brightness-0
                        group-hover:invert
                      "
                    />

                    <span className="
                      text-[14px]
                      sm:text-[16px]
                      text-[#4A4A4A]
                      font-[Poppins]
                      transition-all
                      duration-500
                      group-hover:text-white
                    ">

                      Investment Potential

                    </span>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
};

export default PropertyListings;