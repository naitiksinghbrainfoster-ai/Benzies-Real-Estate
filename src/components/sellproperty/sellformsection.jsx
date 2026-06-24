import React from "react";

import AgentImage from "../../assets/img/sellpropertyimg/charlotte_agent 1.png";

const PropertyValuationSection = () => {

  return (
    <section className="w-full bg-white py-16 lg:py-24 px-5 lg:px-10">

      <div className="max-w-[1450px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

        {/* ================= LEFT SIDE ================= */}
        <div>

          {/* Image */}
          <div className="mb-10">

            <img
              src={AgentImage}
              alt="agent"
              className="w-[280px] sm:w-[340px] lg:w-[360px] object-contain"
            />

          </div>

          {/* Heading */}
          <h2 className="text-[#1E1E1E] text-[38px] sm:text-[52px] lg:text-[60px] leading-[1.1] font-serif mb-6">

            Property Valuation Request

          </h2>

          {/* Content */}
          <p className="text-[#3F3F3F] text-[18px] sm:text-[20px] leading-[1.8] max-w-[620px]">

            On completion of this form Lucas Fox will contact you
            to arrange a free, no obligation estimate of the likely
            sales or rent value of your property.

          </p>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 mt-14">

            {/* Phone */}
            <div>

              <h4 className="text-[#1E1E1E] text-[18px] mb-4">

                Total Free Customer Care:

              </h4>

              <a
                href="tel:+31644367777"
                className="text-[#1E1E1E] text-[22px] font-semibold"
              >
                +31 6 44 36 77 77
              </a>

            </div>

            {/* Email */}
            <div>

              <h4 className="text-[#1E1E1E] text-[18px] mb-4">

                Email Us:

              </h4>

              <a
                href="mailto:contact@benzies.nl"
                className="text-[#1E1E1E] text-[22px] font-semibold break-all"
              >
                contact@benzies.nl
              </a>

            </div>

          </div>

        </div>

        {/* ================= RIGHT SIDE FORM ================= */}
        <div>

          <form className="space-y-8">

            {/* Name */}
            <div>

              <label className="block text-[18px] text-black mb-4">

                Name

              </label>

              <input
                type="text"
                className="w-full h-[52px] bg-[#EEF3FA] px-5 outline-none border-none text-[18px]"
              />

            </div>

            {/* Email */}
            <div>

              <label className="block text-[18px] text-black mb-4">

                Email

              </label>

              <input
                type="email"
                className="w-full h-[52px] bg-[#EEF3FA] px-5 outline-none border-none text-[18px]"
              />

            </div>

        {/* Phone + Postcode */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

  {/* Phone */}
  <div>

    <label className="block text-[18px] text-black mb-4">

      Phone Number

    </label>

    <input
      type="text"
      placeholder="Enter Phone Number"
      className="w-full h-[52px] bg-[#EEF3FA] px-5 outline-none border-none text-[18px]"
    />

  </div>

  {/* Postcode */}
  <div>

    <label className="block text-[18px] text-black mb-4">

      Postcode

    </label>

    <input
      type="text"
      placeholder="Enter Postcode"
      className="w-full h-[52px] bg-[#EEF3FA] px-5 outline-none border-none text-[18px]"
    />

  </div>

</div>

            {/* Property Address */}
            <div>

              <label className="block text-[18px] text-black mb-4">

                Property Address

              </label>

              <textarea
                rows="5"
                className="w-full bg-[#EEF3FA] p-5 outline-none border-none text-[18px] resize-none"
              ></textarea>

            </div>

            {/* About Property */}
            <div>

              <label className="block text-[18px] text-black mb-4">

                About the Property

              </label>

              <textarea
                rows="5"
                className="w-full bg-[#EEF3FA] p-5 outline-none border-none text-[18px] resize-none"
              ></textarea>

            </div>

            {/* Text */}
            <p className="text-[20px] leading-[1.5] text-black">

              Please tell us more about your property: where is it located,
              how large is it and what special features does it have.

            </p>

            {/* Checkbox 1 */}
            <label className="flex items-start gap-5 cursor-pointer">

              <input
                type="checkbox"
                className="w-[30px] h-[30px] mt-1 accent-black"
              />

              <span className="text-[20px] leading-[1.5]">

                Please add me to the Benzies newsletter

              </span>

            </label>

            {/* Checkbox 2 */}
            <label className="flex items-start gap-5 cursor-pointer">

              <input
                type="checkbox"
                className="w-[30px] h-[30px] mt-1 accent-black"
              />

              <span className="text-[20px] leading-[1.5]">

                I have read and accept the Legal Notice and the
                Privacy Policy, including sending communications
                about the property search

              </span>

            </label>

            {/* Button */}
            <button
              type="submit"
              className="w-full h-[50px] bg-black text-white text-[22px] font-medium hover:bg-[#1E1E1E] transition-all duration-300"
            >

              Submit

            </button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default PropertyValuationSection;