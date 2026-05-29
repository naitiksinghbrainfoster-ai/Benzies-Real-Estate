import React from "react";

import team1 from "../../assets/img/aboutimg/team1.png";
import team2 from "../../assets/img/aboutimg/team2.png";
import team3 from "../../assets/img/aboutimg/Team3.png";
import team4 from "../../assets/img/aboutimg/team4.png";
import team5 from "../../assets/img/aboutimg/team5.png";
import team6 from "../../assets/img/aboutimg/team6.png";

import facebookIcon from "../../assets/img/aboutimg/teamicon-facebook.svg";
import linkedinIcon from "../../assets/img/aboutimg/teamicon-linkedin.svg";

const teamData = [
  {
    image: team1,
    name: "Zane Sorell",
    role: "CEO",
    description:
      "Enjoys adventurous travel, seeks new cultures and offbeat destinations",
  },
  {
    image: team2,
    name: "Maya Mathy",
    role: "Founder",
    description:
      "Pop music lover, seeks joy and exciting pop concerts",
  },
  {
    image: team3,
    name: "Alexis Jensen",
    role: "CTO",
    description:
      "Bookworm, creative software developer with precision",
  },
  {
    image: team4,
    name: "Keira Battye",
    role: "Product Designer",
    description:
      "Creative painter capturing beauty with imaginative artwork",
  },
  {
    image: team5,
    name: "Dominic Game",
    role: "3D Artist",
    description:
      "Football enthusiast, enjoys movie nights with friends",
  },
  {
    image: team6,
    name: "James Vial",
    role: "Head of Front-End",
    description:
      "Culinary artist, explores diverse flavors, skilled in cooking",
  },
];

const TeamSection = () => {
  return (
    <section className="w-full bg-[#F5F5F5] py-20 lg:py-28 px-5">
      
      <div className="max-w-[1320px] mx-auto">

        {/* Heading */}
        <div className="text-center max-w-[760px] mx-auto">

          <h2 className="text-[#111111] text-[34px] sm:text-[44px] lg:text-[58px] leading-[1.2] font-[Pochaevsk]">

            Meet The People Behind Benzies

          </h2>

          <p className="text-[#6F6F6F] text-[18px] lg:text-[24px] leading-[1.5] font-[Poppins] mt-5">

            Trusted advisors dedicated to helping international clients buy,
            invest, and settle in Spain with confidence.

          </p>

        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {teamData.map((item, index) => (

            <div
              key={index}
              className="relative overflow-hidden rounded-[22px] group"
            >

              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[620px] object-cover"
              />

              {/* Content Card */}
              <div className="absolute left-5 right-5 bottom-5 bg-white rounded-[22px] p-8">

                <h3 className="text-[#1A1A1A] text-[24px] leading-[1.3] font-semibold font-[Poppins]">

                  {item.name}

                </h3>

                <span className="block text-[#4F46E5] text-[20px] font-medium font-[Poppins] mt-2">

                  {item.role}

                </span>

                <p className="text-[#7A7A7A] text-[18px] leading-[1.8] font-[Poppins] mt-5">

                  {item.description}

                </p>

                {/* Social Icons */}
                <div className="flex items-center gap-4 mt-6">

                  <a href="/">
                    <img
                      src={facebookIcon}
                      alt="facebook"
                      className="w-6 h-6"
                    />
                  </a>

                  <a href="/">
                    <img
                      src={linkedinIcon}
                      alt="linkedin"
                      className="w-6 h-6"
                    />
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default TeamSection;