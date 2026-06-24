import React from "react";

// ✅ property prop comes from parent page
const PropertyFeatures = ({ property }) => {

  // ✅ Flatten all feature values from API categories
  const features = property?.PropertyFeatures?.Category?.flatMap(
    (cat) => cat.Value.map((v) => `${cat.Type}: ${v}`)
  ) || [];

  return (
    <section className="py-20 bg-white">

      <div className="max-w-[1480px] mx-auto px-4 sm:px-6">

        <h2 className="text-[52px] text-center font-[Pochaevsk] mb-14">
          Property Features
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map((item, index) => (
            <div key={index} className="border border-[#E4E4E4] rounded-md p-6">
              <h4 className="text-[20px] font-[Poppins]">✓ {item}</h4>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default PropertyFeatures;
