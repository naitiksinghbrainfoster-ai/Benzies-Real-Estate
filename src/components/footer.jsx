import React from "react";

import footerLogo from "../assets/img/footer-logo.svg";

import facebook from "../assets/img/social media logo/facebook.svg";
import twitter from "../assets/img/social media logo/twitter.svg";
import instagram from "../assets/img/social media logo/instagram.svg";
import linkedin from "../assets/img/social media logo/linkedin.svg";

const Footer = () => {
  return (
    <footer className="bg-[#1E3240] text-white pt-14">

      <div className="max-w-[1280px] mx-auto px-6">

        {/* Top */}
        <div className="flex flex-col lg:flex-row justify-between items-center border-b border-white/20 pb-8">

          {/* Logo */}
          <img
            src={footerLogo}
            alt="footer logo"
            className="w-[120px]"
          />

          {/* Social Media */}
          <div className="flex items-center gap-5 mt-6 lg:mt-0">

            <h4 className="font-semibold text-[18px]">
              Follow Us
            </h4>

            <img
              src={facebook}
              alt="facebook"
              className="w-3 hover:scale-110 transition duration-300 cursor-pointer"
            />

            <img
              src={twitter}
              alt="twitter"
              className="w-5 hover:scale-110 transition duration-300 cursor-pointer"
            />

            <img
              src={instagram}
              alt="instagram"
              className="w-5 hover:scale-110 transition duration-300 cursor-pointer"
            />

            <img
              src={linkedin}
              alt="linkedin"
              className="w-5 hover:scale-110 transition duration-300 cursor-pointer"
            />

          </div>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 py-16">

          {/* Popular Search */}
          <div>
            <h3 className="text-[20px] font-semibold mb-8">
              Popular Search
            </h3>

            <ul className="space-y-5 text-[18px] text-white/80">

              <li className="hover:scale-105 transition duration-300 cursor-pointer hover:text-white">
                Apartment for Sale
              </li>

              <li className="hover:scale-105 transition duration-300 cursor-pointer hover:text-white">
                Apartment for Rent
              </li>

              <li className="hover:scale-105 transition duration-300 cursor-pointer hover:text-white">
                Offices for Sale
              </li>

              <li className="hover:scale-105 transition duration-300 cursor-pointer hover:text-white">
                Offices for Rent
              </li>

            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[20px] font-semibold mb-8">
              Quick Links
            </h3>

            <ul className="space-y-5 text-[18px] text-white/80">

              <li className="hover:scale-105 transition duration-300 cursor-pointer hover:text-white">
                Terms of Use
              </li>

              <li className="hover:scale-105 transition duration-300 cursor-pointer hover:text-white">
                Privacy Policy
              </li>

              <li className="hover:scale-105 transition duration-300 cursor-pointer hover:text-white">
                Pricing Plans
              </li>

              <li className="hover:scale-105 transition duration-300 cursor-pointer hover:text-white">
                Our Services
              </li>

              <li className="hover:scale-105 transition duration-300 cursor-pointer hover:text-white">
                Contact
              </li>

              <li className="hover:scale-105 transition duration-300 cursor-pointer hover:text-white">
                Careers
              </li>

              <li className="hover:scale-105 transition duration-300 cursor-pointer hover:text-white">
                FAQs
              </li>

            </ul>
          </div>

          {/* Discovery */}
          <div>
            <h3 className="text-[20px] font-semibold mb-8">
              Discovery
            </h3>

            <ul className="space-y-5 text-[18px] text-white/80">

              <li className="hover:scale-105 transition duration-300 cursor-pointer hover:text-white">
                Chicago
              </li>

              <li className="hover:scale-105 transition duration-300 cursor-pointer hover:text-white">
                Los Angeles
              </li>

              <li className="hover:scale-105 transition duration-300 cursor-pointer hover:text-white">
                New Jersey
              </li>

              <li className="hover:scale-105 transition duration-300 cursor-pointer hover:text-white">
                New York
              </li>

              <li className="hover:scale-105 transition duration-300 cursor-pointer hover:text-white">
                California
              </li>

            </ul>
          </div>

          {/* Contact Section */}
          <div className="lg:col-span-2">

            {/* Phone & Email */}
            <div className="flex flex-col md:flex-row justify-between gap-8">

              {/* Phone */}
              <div>
                <p className=" text-[16px] mb-2">
                  Phone
                </p>

                <h4 className="text-white/70 text-[18px] whitespace-nowrap">
                  +31 6 44 36 77 77
                </h4>
              </div>

              {/* Email */}
              <div>
                <p className=" text-[16px] mb-2">
                  Email
                </p>

                <h4 className=" text-white/70 text-[18px] whitespace-nowrap">
                  contact@benzies.nl
                </h4>
              </div>

            </div>

            {/* Subscribe */}
            <div className="mt-14">

              <h3 className="text-white/90 text-[20px]  mb-4 ml-1 leading-tight">
                Keep Yourself Up to Date
              </h3>

              <div className="bg-white rounded-2xl flex flex-col md:flex-row overflow-hidden">

                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-5 py-2 text-black outline-none text-[14px]"
                />

                <button className="bg-white text-black font-semibold px-5 py-4 text-[16px] hover:bg-gray-100 transition">
                  Subscribe
                </button>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 mt-10">

        <div className="max-w-[1280px] mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-white/70 text-[18px]">
            © Benzies - All rights reserved
          </p>

          <div className="flex gap-8 text-white/70 text-[18px]">

            <a
              href="/"
              className="hover:text-white hover:scale-105 transition duration-300"
            >
              Privacy
            </a>

            <a
              href="/"
              className="hover:text-white hover:scale-105 transition duration-300"
            >
              Terms
            </a>

            <a
              href="/"
              className="hover:text-white hover:scale-105 transition duration-300"
            >
              Sitemap
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;