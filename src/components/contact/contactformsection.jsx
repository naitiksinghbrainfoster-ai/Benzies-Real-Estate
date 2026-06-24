import React from "react";

import PhoneIcon from "../../assets/img/contact/phone.svg";
import MailIcon from "../../assets/img/contact/mail.svg";
import LocationIcon from "../../assets/img/contact/location.svg";

const ContactSection = () => {

  return (

    <section className="w-full px-6 pb-16 lg:pb-24 bg-white">

      {/* Main Container */}
      <div className="max-w-[1700px] mx-auto bg-[#EEF3FA] rounded-b-[12px] py-16 lg:py-24 px-5 lg:px-10">

        <div className="max-w-[1450px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* ================= LEFT SIDE FORM ================= */}
          <div>

            <form className="space-y-10">

              {/* Name */}
              <div>

                <label className="block text-[18px] text-[#111111] mb-4">

                  Name

                </label>

                <input
                  type="text"
                  className="w-full h-[56px] bg-white px-5 text-[18px] outline-none border-none"
                />

              </div>

              {/* Email */}
              <div>

                <label className="block text-[18px] text-[#111111] mb-4">

                  Email

                </label>

                <input
                  type="email"
                  className="w-full h-[56px] bg-white px-5 text-[18px] outline-none border-none"
                />

              </div>

              {/* Phone Number */}
              <div>

                <label className="block text-[18px] text-[#111111] mb-4">

                  Phone Number

                </label>

                <input
                  type="text"
                  className="w-full h-[56px] bg-white px-5 text-[18px] outline-none border-none"
                />

              </div>

              {/* Property Address */}
              <div>

                <label className="block text-[18px] text-[#111111] mb-4">

                  Property Address

                </label>

                <textarea
                  rows="7"
                  className="w-full bg-white p-5 text-[18px] outline-none border-none resize-none"
                ></textarea>

              </div>

              {/* Content */}
              <p className="text-[20px] lg:text-[22px] leading-[1.5] text-[#111111]">

                Please tell us more about your property:
                where is it located, how large is it and
                what special features does it have.

              </p>

              {/* Checkbox 1 */}
              <label className="flex items-start gap-5 cursor-pointer">

                <input
                  type="checkbox"
                  className="w-[28px] h-[28px] mt-1 accent-[#1F3447]"
                />

                <span className="text-[18px] lg:text-[20px] leading-[1.5] text-[#111111]">

                  Please add me to the Benzies newsletter

                </span>

              </label>

              {/* Checkbox 2 */}
              <label className="flex items-start gap-5 cursor-pointer">

                <input
                  type="checkbox"
                  className="w-[28px] h-[28px] mt-1 accent-[#1F3447]"
                />

                <span className="text-[18px] lg:text-[20px] leading-[1.5] text-[#111111]">

                  I have read and accept the Legal Notice
                  and the Privacy Policy, including sending
                  communications about the property search

                </span>

              </label>

              {/* Button */}
              <button
                type="submit"
                className="w-full h-[78px] bg-[#1F3447] text-white text-[22px] font-medium hover:bg-[#162634] transition-all duration-300"
              >

                Submit

              </button>

            </form>

          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="flex flex-col gap-20 pt-3">

            {/* Phone */}
            <div className="flex items-start gap-8">

              <img
                src={PhoneIcon}
                alt="phone"
                className="w-[40px] h-[40px] object-contain mt-2"
              />

              <div>

                <h4 className="text-[22px] text-[#2B2B2B] mb-3">

                  Phone:

                </h4>

                <a
                  href="tel:+31644367777"
                  className="text-[24px] font-semibold text-[#2B2B2B]"
                >

                  +31 6 44 36 77 77

                </a>

              </div>

            </div>

            {/* Email */}
            <div className="flex items-start gap-8">

              <img
                src={MailIcon}
                alt="mail"
                className="w-[40px] h-[40px] object-contain mt-2"
              />

              <div>

                <h4 className="text-[22px] text-[#2B2B2B] mb-3">

                  Email:

                </h4>

                <a
                  href="mailto:contact@benzies.nl"
                  className="text-[24px] font-semibold text-[#2B2B2B] break-all"
                >

                  contact@benzies.nl

                </a>

              </div>

            </div>

            {/* Location */}
            <div className="flex items-start gap-8">

              <img
                src={LocationIcon}
                alt="location"
                className="w-[40px] h-[40px] object-contain mt-2"
              />

              <div>

                <h4 className="text-[22px] text-[#2B2B2B] mb-3">

                  Location:

                </h4>

                <p className="text-[24px] font-semibold text-[#2B2B2B] leading-[1.6] max-w-[650px]">

                  Benzies Real Estate, Spain & Netherlands

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
};

export default ContactSection;