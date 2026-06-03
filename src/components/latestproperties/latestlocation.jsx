import React from "react";

const PropertyLocation = ({ property }) => {
  return (
    <section className="py-20 bg-[#F7F7F7]">

      <div className="max-w-[1480px] mx-auto px-4 sm:px-6">

        <h2 className="text-[52px] text-center font-[Pochaevsk] mb-14">
          Property Location
        </h2>

        <div className="bg-white p-8 rounded-[10px]">

          <h3 className="text-[30px] font-[Pochaevsk] mb-5">
            {property.location}
          </h3>

          <iframe
            title="map"
            className="w-full h-[500px] rounded-[10px]"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(property.mapQuery)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
          />

        </div>

      </div>

    </section>
  );
};

export default PropertyLocation;
