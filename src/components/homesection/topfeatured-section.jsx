import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import top1 from "../../assets/img/homeimg/top-featured1.png";
import top2 from "../../assets/img/homeimg/top-featured2.png";
import top3 from "../../assets/img/homeimg/top-featured3.png";
import top4 from "../../assets/img/homeimg/top-featured4.png";
import top5 from "../../assets/img/homeimg/top-featured5.png";
import top6 from "../../assets/img/homeimg/top-featured6.png";

import arrowIcon from "../../assets/img/homeimg/discover-arrow.svg";

const locations = [
  {
    image: top1,
    title: "Marbella",
  },
  {
    image: top2,
    title: "Estepona",
  },
  {
    image: top3,
    title: "Mijas",
  },
  {
    image: top4,
    title: "Benahavís",
  },
  {
    image: top5,
    title: "Fuengirola",
  },
  {
    image: top6,
    title: "Málaga",
  },
];

const TopFeaturedSection = () => {

  useEffect(() => {

    AOS.init({
      duration: 800,
      once: true,
    });

  }, []);

  return (

    <section className="bg-[#F5F5F5] py-16 sm:py-20 lg:py-24 overflow-hidden">

      <div className="max-w-[1480px] mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div
          data-aos="fade-up"
          className="text-center max-w-[1100px] mx-auto"
        >

          <h2 className="
            text-[34px]
            leading-[44px]
            sm:text-[50px]
            sm:leading-[60px]
            lg:text-[64px]
            lg:leading-[74px]
            font-normal
            text-[#1F1F1F]
            font-[Pochaevsk]
          ">

            Explore Luxury Real Estate Destinations

          </h2>

          <p className="
            text-[#6B6B6B]
            text-[16px]
            leading-[30px]
            sm:text-[20px]
            sm:leading-[38px]
            mt-5
            sm:mt-6
            max-w-[950px]
            mx-auto
            font-[Poppins]
          ">

            Benzies Real Estate connects international buyers with exceptional
            properties in the most exclusive destinations across Spain and the
            Costa del Sol lifestyle market.

          </p>

        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-14 sm:mt-20">

          {locations.map((item, index) => (

            <div
              key={index}
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
              className="
                relative
                overflow-hidden
                group
                cursor-pointer
                rounded-[8px]
              "
            >

              {/* Image */}
              <div className="overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full
                    h-[280px]
                    sm:h-[320px]
                    lg:h-[360px]
                    object-cover
                    transition-all
                    duration-700
                    group-hover:scale-110
                  "
                />

              </div>

              {/* Overlay */}
              <div className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/70
                via-black/10
                to-transparent
                opacity-90
                group-hover:opacity-100
                transition-all
                duration-500
              "></div>

              {/* Title */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full px-4 text-center">

                <h3 className="
                  text-white
                  text-[26px]
                  leading-[34px]
                  sm:text-[34px]
                  sm:leading-[42px]
                  font-normal
                  font-[Pochaevsk]
                  tracking-wide
                ">

                  {item.title}

                </h3>

              </div>

            </div>

          ))}

        </div>

        {/* Bottom Button */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-center mt-14 sm:mt-20"
        >

          <p className="
            text-[#6B6B6B]
            text-[16px]
            sm:text-[22px]
            mb-6
            sm:mb-8
            font-[Poppins]
          ">

            Looking for more exclusive destinations?

          </p>

         <Link
  to="/discover-destinations"
  className="
    bg-[#183346]
    text-white
    px-8
    sm:px-10
    py-4
    sm:py-5
    inline-flex
    items-center
    gap-4
    text-[16px]
    sm:text-[20px]
    font-medium
    font-[Poppins]
    hover:bg-black
    transition-all
    duration-300
    hover:scale-[1.03]
  "
>
  View All Locations

  <img
    src={arrowIcon}
    alt="arrow"
    className="w-5"
  />
</Link>

        </div>

      </div>

    </section>

  );
};

export default TopFeaturedSection;