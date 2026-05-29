import React from "react";

import AboutImg from "../../assets/img/aboutimg/Frame 345.png";

const AboutExperienceSection = () => {
  return (

    <section className="w-full bg-white py-16 lg:py-24 px-6">

      <div className="max-w-[1700px] mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>

            <p className="text-[#6D6D6D] text-[20px] leading-[1.7] font-normal font-[Poppins]">

              At Benzies Real Estate, we specialize in premium property sales,
              rentals, and real estate investment opportunities in Spain and
              abroad. With a professional, transparent, and client-focused
              approach, we guide our clients through every stage of the buying,
              selling, and rental journey. Whether you are searching for a
              luxury villa, holiday apartment, long-term rental, or a profitable
              investment property, our experienced team is dedicated to helping
              you find the right opportunity with confidence and ease.

            </p>

            <p className="text-[#6D6D6D] text-[20px] leading-[1.7] font-normal mt-10 font-[Poppins]">

              With a strong international network and extensive experience
              working with clients across Europe, Asia, and North Africa, we
              understand the importance of trust, communication, and local
              expertise. Beyond property listings, we provide complete
              assistance throughout the process, including property viewings,
              legal and administrative guidance, NIE applications, utility
              setup, investment consultancy, and after-sales support. Our
              mission is to make buying or renting property abroad simple,
              secure, and stress-free while delivering high-quality service and
              exclusive real estate opportunities. At Benzies Real Estate, we
              combine professionalism with a modern international vision of real
              estate.

            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-5 mt-12">

              <button className="bg-[#1F3447] text-white px-10 py-5 text-[20px] font-medium hover:bg-[#162736] transition">

                Browse propeties →

              </button>

              <button className="border border-[#1F3447] text-[#1F3447] px-10 py-5 text-[20px] font-medium hover:bg-[#1F3447] hover:text-white transition">

                Start the experience

              </button>

            </div>

          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">

            <img
              src={AboutImg}
              alt="about-property"
              className="w-full max-w-[780px] object-contain"
            />

          </div>

        </div>

      </div>

    </section>

  );
};

export default AboutExperienceSection;