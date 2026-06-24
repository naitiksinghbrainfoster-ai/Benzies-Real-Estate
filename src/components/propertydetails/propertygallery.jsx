import React from "react";

import Property1 from "../../assets/img/homeimg/propertylistings1.png";
import Property2 from "../../assets/img/homeimg/propertylistings2.png";

// ✅ property prop comes from parent page
const PropertyGallery = ({ property }) => {

  // ✅ Use API pictures, fallback to static images
  const pictures = property?.Pictures?.Picture || [];
  const getImg = (index, fallback) =>
    pictures[index]?.PictureURL || fallback;

  return (
    <section className="py-20 bg-[#F7F7F7]">

      <div className="max-w-[1480px] mx-auto px-4 sm:px-6">

        <h2 className="text-[52px] font-[Pochaevsk] text-center mb-14">
          Property Gallery
        </h2>

        <div className="grid lg:grid-cols-2 gap-6">

          {/* ✅ Main large image */}
          <img
            src={getImg(0, Property1)}
            alt="property"
            className="w-full h-[650px] object-cover rounded-[10px]"
          />

          <div className="grid grid-cols-2 gap-6">
            <img src={getImg(1, Property2)} alt="" className="h-[312px] w-full object-cover rounded-[10px]" />
            <img src={getImg(2, Property1)} alt="" className="h-[312px] w-full object-cover rounded-[10px]" />
            {/* Repeat first two if fewer than 4 images */}
            <img src={getImg(0, Property1)} alt="" className="h-[312px] w-full object-cover rounded-[10px]" />
            <img src={getImg(1, Property2)} alt="" className="h-[312px] w-full object-cover rounded-[10px]" />
          </div>

        </div>

      </div>

    </section>
  );
};

export default PropertyGallery;
