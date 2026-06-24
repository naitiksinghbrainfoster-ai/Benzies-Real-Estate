import React from "react";

// ✅ property prop comes from parent page
const PropertyLocation = ({ property }) => {

  if (!property) return null;

  // ✅ Build map query from real API data
  const mapQuery = `${property.Location}, ${property.Province}, ${property.Country}`;

  return (
    <section className="py-20 bg-[#F7F7F7]">

      <div className="max-w-[1480px] mx-auto px-4 sm:px-6">

        <h2 className="text-[52px] text-center font-[Pochaevsk] mb-14">
          Property Location
        </h2>

        <div className="bg-white p-8 rounded-[10px]">

          {/* ✅ Real location name */}
          <h3 className="text-[30px] font-[Pochaevsk] mb-5">
            {property.Location}, {property.Province}
          </h3>

          {/* ✅ Real map using API location */}
          <iframe
            title="map"
            className="w-full h-[500px] rounded-[10px]"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
          />

        </div>

      </div>

    </section>
  );
};

export default PropertyLocation;
