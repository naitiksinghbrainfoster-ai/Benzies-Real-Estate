import React from "react";

// ✅ property prop comes from parent page
const PropertyOverview = ({ property }) => {

  if (!property) return null;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1480px] mx-auto px-4 sm:px-6">

        <div className="grid lg:grid-cols-[1.5fr_0.8fr] gap-16">

          {/* Left Content */}
          <div>

            {/* ✅ Real location */}
            <span className="text-[#A5A5A5] text-[16px] font-[Poppins]">
              {property.Location}, {property.Province}, {property.Country}
            </span>

            {/* ✅ Real title */}
            <h2 className="
              mt-3 text-[38px] leading-[50px]
              lg:text-[58px] lg:leading-[70px]
              font-[Pochaevsk] text-[#1F1F1F]
            ">
              {property.PropertyType?.NameType}
            </h2>

            {/* ✅ Real stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">

              <div className="border p-6 rounded-md">
                <h4 className="text-[32px] font-[Pochaevsk]">{property.Bedrooms}</h4>
                <p className="text-[#777]">Bedrooms</p>
              </div>

              <div className="border p-6 rounded-md">
                <h4 className="text-[32px] font-[Pochaevsk]">{property.Bathrooms}</h4>
                <p className="text-[#777]">Bathrooms</p>
              </div>

              <div className="border p-6 rounded-md">
                {/* ✅ Real built area */}
                <h4 className="text-[32px] font-[Pochaevsk]">{property.Built} m²</h4>
                <p className="text-[#777]">Living Area</p>
              </div>

              <div className="border p-6 rounded-md">
                {/* ✅ Parking from API */}
                <h4 className="text-[32px] font-[Pochaevsk]">
                  {property.Parking ? "Yes" : "No"}
                </h4>
                <p className="text-[#777]">Parking</p>
              </div>

            </div>

            {/* ✅ Real description */}
            <div className="mt-14">
              <h3 className="text-[34px] font-[Pochaevsk] text-[#1F1F1F]">
                Property Overview
              </h3>
              <p className="mt-6 text-[18px] leading-[36px] text-[#6F6F6F] font-[Poppins] whitespace-pre-line">
                {property.Description}
              </p>
            </div>

          </div>

          {/* Right Price Card — design unchanged */}
          <div>
            <div className="sticky top-[120px] bg-[#183346] rounded-[12px] p-10 text-white">

              <span className="text-white/70 text-[18px]">Property Price</span>

              {/* ✅ Real price */}
              <h3 className="text-[58px] leading-none mt-3 font-[Pochaevsk]">
                €{Number(property.Price).toLocaleString()}
              </h3>

              <button className="w-full mt-8 bg-white text-[#183346] py-4 rounded-md text-[18px] font-medium">
                Schedule Viewing
              </button>

              <button className="w-full mt-4 border border-white py-4 rounded-md text-[18px]">
                WhatsApp Enquiry
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PropertyOverview;
