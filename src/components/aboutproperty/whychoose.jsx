import React from "react";

import whyIcon1 from "../../assets/img/aboutimg/abouticon-why1.svg";
import whyIcon2 from "../../assets/img/aboutimg/abouticon-why2.svg";
import whyIcon3 from "../../assets/img/aboutimg/abouticon-why3.svg";
import whyIcon4 from "../../assets/img/aboutimg/abouticon-why4.svg";

import aboutVideo from "../../assets/img/video/aboutwhychooseus.mp4";

const whyChooseData = [
  {
    icon: whyIcon1,
    title: "International Guidance",
    description:
      "Tailored support for overseas buyers relocating to Spain.",
  },
  {
    icon: whyIcon2,
    title: "Legal & Financial Support",
    description:
      "Assistance with NIE numbers, banking, legal checks, and contracts.",
  },
  {
    icon: whyIcon3,
    title: "Full Aftercare",
    description:
      "Ongoing support even after the purchase is complete.",
  },
  {
    icon: whyIcon4,
    title: "Trusted Partner Network",
    description:
      "Access to lawyers, mortgage advisors, developers, and relocation experts.",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="w-full bg-[#F5F5F5] py-20 lg:py-28 px-5">

      <div className="max-w-[1550px] mx-auto">

        {/* Heading */}
        <div className="max-w-[820px] mx-auto text-center">

          <h2 className="text-[#111111] text-[34px] sm:text-[46px] lg:text-[64px] leading-[1.2] font-[Pochaevsk]">

            Why Choose Benzies

          </h2>

          <p className="text-[#6D6D6D] text-[18px] lg:text-[24px] leading-[1.5] font-[Poppins] mt-5">

            Trusted advisors dedicated to helping international clients buy,
            invest, and settle in Spain with confidence.

          </p>

        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-14 max-w-[1220px] mx-auto mt-20">

          {whyChooseData.map((item, index) => (

            <div
              key={index}
              className="flex items-start gap-6"
            >

              {/* Icon */}
              <img
                src={item.icon}
                alt={item.title}
                className="w-[56px] h-[56px] object-contain mt-1"
              />

              {/* Content */}
              <div>

                <h3 className="text-[#111111] text-[26px] leading-[1.3] font-medium font-[Poppins]">

                  {item.title}

                </h3>

                <p className="text-[#6F6F6F] text-[18px] lg:text-[20px] leading-[1.6] font-[Poppins] mt-3 max-w-[430px]">

                  {item.description}

                </p>

              </div>

            </div>

          ))}

        </div>

        {/* Video Section */}
        <div className="mt-20">

         {/* Video Section */}
<div className="mt-20 flex flex-col items-center">

  <div className="overflow-hidden rounded-[40px] w-full max-w-[1350px]">

    <video
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-[320px] md:h-[520px] object-cover"
    >
      <source src={aboutVideo} type="video/mp4" />
    </video>

  </div>

  {/* Button */}
  <button className="mt-14 bg-[#13283B] hover:bg-[#0F1F2E] transition-all duration-300 text-white text-[18px] font-[Poppins] font-medium px-10 py-5 rounded-[4px] flex items-center gap-3">

    Contact Us

    <span className="text-[22px]">→</span>

  </button>

</div>

        </div>

      </div>

    </section>
  );
};

export default WhyChooseSection;