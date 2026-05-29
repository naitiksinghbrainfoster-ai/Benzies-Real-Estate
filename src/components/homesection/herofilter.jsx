import React from "react";
import searchIcon from "../../assets/img/homeimg/searchicon.svg";

const HeroFilter = () => {
  return (
    <section className="relative z-20 px-4 sm:px-6 lg:px-8 -mt-[40px] lg:-mt-[78px]">

      <div className="max-w-[1280px] mx-auto">

        {/* Top Tabs */}
        <div className="flex items-end overflow-x-auto">

          <button className="bg-white text-black px-6 sm:px-10 py-4 sm:py-5 text-[15px] sm:text-[18px] font-semibold rounded-tl-[18px] border-b-[3px] border-black font-[Poppins] whitespace-nowrap">
            All
          </button>

          <button className="bg-[#0B122B] text-white px-6 sm:px-10 py-4 sm:py-5 text-[15px] sm:text-[18px] font-semibold font-[Poppins] whitespace-nowrap">
            For Sale
          </button>

          <button className="bg-[#0B122B] text-white px-6 sm:px-10 py-4 sm:py-5 text-[15px] sm:text-[18px] font-semibold rounded-tr-[18px] font-[Poppins] whitespace-nowrap">
            For Rent
          </button>

        </div>

        {/* Filter Box */}
        <div className="bg-white rounded-br-[22px] rounded-bl-[22px] rounded-tr-[22px] shadow-2xl overflow-hidden">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 items-center">

            {/* Search */}
            <div className="px-6 sm:px-8 py-6 sm:py-8 border-b lg:border-b-0 lg:border-r border-gray-200">

              <h3 className="text-[20px] sm:text-[22px] font-normal mb-3 font-[Pochaevsk] text-[#0B122B]">
                Search
              </h3>

              <input
                type="text"
                placeholder="Enter Keywords"
                className="outline-none text-[15px] sm:text-[16px] text-gray-500 w-full font-[Poppins]"
              />

            </div>

            {/* Looking For */}
            <div className="px-6 sm:px-8 py-6 sm:py-8 border-b lg:border-b-0 lg:border-r border-gray-200">

              <h3 className="text-[20px] sm:text-[22px] font-normal mb-3 font-[Pochaevsk] text-[#0B122B]">
                Looking For
              </h3>

              <select className="outline-none text-[15px] sm:text-[16px] text-gray-500 w-full bg-transparent font-[Poppins]">

                <option>Type</option>
                <option>Apartment</option>
                <option>Villa</option>
                <option>Office</option>

              </select>

            </div>

            {/* Location */}
            <div className="px-6 sm:px-8 py-6 sm:py-8 border-b lg:border-b-0 lg:border-r border-gray-200">

              <h3 className="text-[20px] sm:text-[22px] font-normal mb-3 font-[Pochaevsk] text-[#0B122B]">
                Location
              </h3>

              <select className="outline-none text-[15px] sm:text-[16px] text-gray-500 w-full bg-transparent font-[Poppins]">

                <option>Location</option>
                <option>Spain</option>
                <option>Netherlands</option>
                <option>Dubai</option>

              </select>

            </div>

            {/* Price */}
            <div className="px-6 sm:px-8 py-6 sm:py-8 border-b lg:border-b-0 lg:border-r border-gray-200">

              <h3 className="text-[20px] sm:text-[22px] font-normal mb-3 font-[Pochaevsk] text-[#0B122B]">
                Price
              </h3>

              <p className="text-[15px] sm:text-[16px] text-gray-500 font-[Poppins]">
                $0 - $5,800
              </p>

            </div>

            {/* Search Button */}
            <div className="px-6 py-6">

              <button className="w-full bg-[#0B122B] text-white rounded-2xl py-4 sm:py-5 flex items-center justify-center gap-3 text-[17px] sm:text-[20px] font-medium hover:bg-black transition font-[Poppins]">

                <img
                  src={searchIcon}
                  alt="search"
                  className="w-5 h-5"
                />

                Search

              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroFilter;