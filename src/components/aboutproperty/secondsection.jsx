import React from "react";

import AboutImg from "../../assets/img/aboutimg/Frame 345.png";

const AboutExperienceSection = () => {
  return (

    <section className="w-full bg-white py-16 lg:py-24 px-6">

      <div className="max-w-[1700px] mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
         {/* Left Content */}
<div>
  <p className="text-[#6D6D6D] text-[18px] leading-[1.5] font-normal font-[Poppins]">
    At Benzies Real Estate, we specialize in premium property sales,
    rentals, and real estate investment opportunities in Spain and
    abroad. With a professional, transparent, and client-focused
    approach, we guide our clients through every stage of the buying,
    selling, and rental journey. Whether you are searching for a
    luxury villa, holiday apartment, long-term rental, or profitable
    investment property, our experienced team is dedicated to helping
    you find the right opportunity with confidence and ease.
  </p>

  <div className="mt-5">
    <h3 className="text-[#5A5A5A] text-[22px] font-semibold leading-[1.4] font-[Poppins]">
      With Benzies Real Estate, buying property in Spain becomes simple
      and stress-free, with support for:
    </h3>

    <ul className="mt-5 space-y-2 text-[#6D6D6D] text-[18px] leading-[1.4] font-normal font-[Poppins] list-disc pl-8">
      <li>Property search and viewings</li>
      <li>NIE number applications</li>
      <li>Spanish bank account setup</li>
      <li>Legal and notary support</li>
      <li>Mortgage assistance</li>
      <li>Property management and rental services</li>
      <li>Renovation and after-sales support</li>
    </ul>
  </div>

  <p className="text-[#6D6D6D] text-[18px] leading-[1.5] font-normal mt-5 font-[Poppins]">
    Trusted by international clients, we provide expert guidance and
    seamless support throughout the property journey.
  </p>

  {/* Buttons */}
  <div className="flex flex-wrap items-center gap-5 mt-12">
    <button className="bg-[#1F3447] text-white px-10 py-5 text-[20px] font-medium hover:bg-[#162736] transition">
      Browse properties →
    </button>

    <button className="border border-[#1F3447] text-[#1F3447] px-10 py-5 text-[20px] font-medium hover:bg-[#1F3447] hover:text-white transition">
      Start the experience
    </button>
  </div>
</div>


{/* Right Image */}
<div className="flex justify-center lg:justify-end overflow-hidden">

  <img
    src={AboutImg}
    alt="about-property"
    className="w-full max-w-[780px] object-contain transition-all duration-500 ease-in-out hover:scale-105"
  />

</div>

        </div>

      </div>

    </section>

  );
};

export default AboutExperienceSection;