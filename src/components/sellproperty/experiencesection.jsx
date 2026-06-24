import React from "react";

import BannerImage from "../../assets/img/sellpropertyimg/Group 46887.png";

const ExperienceSection = () => {
  return (
    <section className="w-full py-20 lg:py-20 bg-[#F7F7F7]">

      <div className="relative w-full overflow-hidden">

        {/* Background Image */}
        <img
          src={BannerImage}
          alt="Experience"
          className="w-full h-[350px] md:h-[550px] lg:h-[520px] object-cover "
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45"></div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">

          <div className="max-w-[1200px]">

            <h2 className="text-white text-[26px] sm:text-[30px] md:text-[52px] lg:text-[32px] leading-[1.4] font-normal">

              Find Out What Your Property Could Be Worth
              With A Free Valuation Request From A Member
              Of Our Experienced Property Advisory Team.

            </h2>

            {/* Button */}
            <div className="mt-12">

              <button className="border border-white text-white px-10 md:px-16 py-4 md:py-5 text-[16px] md:text-[20px] font-medium hover:bg-white hover:text-black transition duration-300">

                Start the experience

              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ExperienceSection;