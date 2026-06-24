import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import { useProperties } from "../../hooks/useProperties";

import BedIcon from "../../assets/img/homeimg/propertylistings-bedicon.svg";
import PersonIcon from "../../assets/img/homeimg/propertylistings-personicon.svg";
import BatIcon from "../../assets/img/homeimg/propertylistings-bat.svg";
import StarColor from "../../assets/img/homeimg/propertylistings-starwithcolor.svg";
import StarWhite from "../../assets/img/homeimg/propertylistings-starwithoutcolor.svg";
import VrIcon from "../../assets/img/homeimg/discover-firsticon2.svg";

// ✅ Generates SEO URL: middle-floor-apartment-marbella-R5400709
const makeSlug = (property) => {
  const title = `${property.PropertyType?.NameType || ""} ${property.Location || ""}`
    .toLowerCase().trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
  return `${title}-${property.Reference}`;
};

const PropertyListings = () => {

  const { properties, loading, error } = useProperties();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="bg-[#F7F7F7] py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1480px] mx-auto px-4 sm:px-6">

        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-[34px] leading-[44px] sm:text-[50px] sm:leading-[60px] lg:text-[58px] lg:leading-[68px] font-normal text-[#1F1F1F] font-[Pochaevsk]">
            Benzies Property Listings
          </h2>
          <p className="text-[#6F6F6F] text-[16px] leading-[30px] sm:text-[20px] sm:leading-[38px] max-w-[850px] mx-auto mt-5 sm:mt-6 font-[Poppins]">
            At Benzies we provide our international clients with exceptional real estate in the most exclusive locations in Spain, Andorra, Portugal and France.
          </p>
        </div>

        {loading && <div className="text-center py-20 text-[#6F6F6F] font-[Poppins] text-[18px]">Loading properties...</div>}
        {error && <div className="text-center py-20 text-red-500 font-[Poppins] text-[18px]">Failed to load properties. Please try again.</div>}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {properties.map((property, index) => (
              <Link key={property.Reference} to={`/property/${makeSlug(property)}`} className="group block">
                <div data-aos="fade-up" data-aos-delay={index * 100} className="bg-white border border-[#E4E4E4] rounded-[6px] overflow-hidden transition-all duration-500 group-hover:bg-[#181A20]">

                  <div className="relative overflow-hidden">
                    <img src={property.Pictures?.Picture?.[0]?.PictureURL || ""} alt={property.PropertyType?.NameType || "property"} className="w-full h-[320px] sm:h-[360px] object-cover transition-all duration-700 group-hover:scale-105" />
                    <div className="absolute top-6 left-5 flex items-center gap-2">
                      <img src={StarColor} alt="" className="w-[22px] h-[22px] sm:w-[24px] sm:h-[24px]" />
                      <img src={StarColor} alt="" className="w-[22px] h-[22px] sm:w-[24px] sm:h-[24px]" />
                      <img src={StarColor} alt="" className="w-[22px] h-[22px] sm:w-[24px] sm:h-[24px]" />
                      <img src={StarWhite} alt="" className="w-[22px] h-[22px] sm:w-[24px] sm:h-[24px]" />
                      <img src={StarWhite} alt="" className="w-[22px] h-[22px] sm:w-[24px] sm:h-[24px]" />
                    </div>
                    <div className="absolute top-5 right-5">
                      <img src={VrIcon} alt="" className="w-[34px] h-[34px] sm:w-[38px] sm:h-[38px] transition-all duration-500 group-hover:brightness-0 group-hover:invert" />
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 transition-all duration-500">
                    <div className="flex items-end gap-2 mb-4 sm:mb-5">
                      <h3 className="text-[28px] sm:text-[30px] font-normal text-[#183346] leading-none font-[Pochaevsk] transition-all duration-500 group-hover:text-white">
                        €{Number(property.Price).toLocaleString()}
                      </h3>
                    </div>
                    <h4 className="text-[18px] sm:text-[22px] leading-[32px] sm:leading-[38px] font-normal text-[#1F1F1F] mb-4 font-[Pochaevsk] transition-all duration-500 group-hover:text-white">
                      {property.PropertyType?.NameType}
                    </h4>
                    <p className="text-[#A5A5A5] text-[15px] sm:text-[18px] mb-5 font-[Poppins] transition-all duration-500 group-hover:text-white/70">
                      {property.Location}, {property.Province}
                    </p>
                    <div className="grid grid-cols-2 gap-5 mt-6">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <img src={BedIcon} alt="" className="w-[22px] h-[22px] sm:w-[24px] sm:h-[24px] transition-all duration-500 group-hover:brightness-0 group-hover:invert" />
                        <span className="text-[14px] sm:text-[16px] text-[#4A4A4A] font-[Poppins] transition-all duration-500 group-hover:text-white">{property.Bedrooms} Bedrooms</span>
                      </div>
                      <div className="flex items-center gap-3 sm:gap-4">
                        <img src={PersonIcon} alt="" className="w-[22px] h-[22px] sm:w-[24px] sm:h-[24px] transition-all duration-500 group-hover:brightness-0 group-hover:invert" />
                        <span className="text-[14px] sm:text-[16px] text-[#4A4A4A] font-[Poppins] transition-all duration-500 group-hover:text-white">International Buyers</span>
                      </div>
                      <div className="flex items-center gap-3 sm:gap-4">
                        <img src={BatIcon} alt="" className="w-[22px] h-[22px] sm:w-[24px] sm:h-[24px] transition-all duration-500 group-hover:brightness-0 group-hover:invert" />
                        <span className="text-[14px] sm:text-[16px] text-[#4A4A4A] font-[Poppins] transition-all duration-500 group-hover:text-white">{property.Bathrooms} Bathrooms</span>
                      </div>
                      <div className="flex items-center gap-3 sm:gap-4">
                        <img src={VrIcon} alt="" className="w-[22px] h-[22px] sm:w-[24px] sm:h-[24px] transition-all duration-500 group-hover:brightness-0 group-hover:invert" />
                        <span className="text-[14px] sm:text-[16px] text-[#4A4A4A] font-[Poppins] transition-all duration-500 group-hover:text-white">Investment Potential</span>
                      </div>
                    </div>
                  </div>

                </div>
              </Link>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default PropertyListings;
