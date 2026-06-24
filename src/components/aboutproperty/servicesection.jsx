import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    title: "Property Sales",
    description:
      "Premium properties tailored to your buying and selling needs.",
  },
  {
    title: "Long-Term Rentals",
    description:
      "Comfortable rental homes with flexible long-term living options.",
  },
  {
    title: "Holiday Rentals",
    description:
      "Exclusive vacation stays for memorable holiday experiences worldwide. ",
  },
  {
    title: "Real Estate Investments",
    description:
      "Profitable investment opportunities with trusted market expertise.",
  },
  {
    title: "Property Management",
    description:
      "Reliable property care and complete management solutions provided.",
  },
  {
    title: "International Client Support",
    description:
      "Dedicated multilingual support for clients across different countries.",
  },
];

const OurServicesSection = () => {

  useEffect(() => {

    AOS.init({
      duration: 1000,
      once: true,
    });

  }, []);

  return (

    <section className="w-full bg-[#EEF3FA] py-16 lg:py-24 px-6 overflow-hidden">

      <div className="max-w-[1400px] mx-auto">

        {/* Heading */}
        <div
          data-aos="fade-up"
          className="text-center mb-14"
        >

          <h2 className="text-[#1E1E1E] text-[38px] md:text-[52px] font-serif leading-[1.2] font-[Pochaevsk]">

            Our Services

          </h2>

        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((item, index) => (

            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="
                group
                bg-white
                rounded-[10px]
                min-h-[320px]
                flex
                flex-col
                items-center
                justify-center
                text-center
                px-10
                py-12
                transition-all
                duration-500
                hover:bg-[#1E3240]
                hover:-translate-y-2
                hover:scale-[1.02]
                cursor-pointer
              "
            >

              {/* Title */}
              <h3
                className="
                  text-[22px]
                  font-semibold
                  text-[#1E3240]
                  transition-all
                  duration-500
                  mb-5
                  group-hover:text-white
               font-[Pochaevsk] "
              >

                {item.title}

              </h3>

              {/* Description */}
              <p
                className="
                  text-[18px]
                  leading-[1.7]
                  max-w-[260px]
                  text-[#7B7B7B]
                  transition-all
                  duration-500
                  group-hover:text-[#D6DEE5]
                  font-[Poppins]
                "
              >

                {item.description}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
};

export default OurServicesSection;