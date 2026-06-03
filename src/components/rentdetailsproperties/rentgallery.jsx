import React from "react";

import Property1 from "../../assets/img/homeimg/propertylistings1.png";
import Property2 from "../../assets/img/homeimg/propertylistings2.png";
import Property3 from "../../assets/img/homeimg/propertylistings3.png";

const PropertyGallery = () => {
  return (
    <section className="py-20 bg-[#F7F7F7]">

      <div className="max-w-[1480px] mx-auto px-4 sm:px-6">

        <h2 className="text-[52px] font-[Pochaevsk] text-center mb-14">
          Property Gallery
        </h2>

        <div className="grid lg:grid-cols-2 gap-6">

          <img
            src={Property1}
            alt=""
            className="w-full h-[650px] object-cover rounded-[10px]"
          />

          <div className="grid grid-cols-2 gap-6">

            <img src={Property2} alt="" className="h-[312px] w-full object-cover rounded-[10px]" />
            <img src={Property3} alt="" className="h-[312px] w-full object-cover rounded-[10px]" />
            <img src={Property1} alt="" className="h-[312px] w-full object-cover rounded-[10px]" />
            <img src={Property2} alt="" className="h-[312px] w-full object-cover rounded-[10px]" />

          </div>

        </div>

      </div>

    </section>
  );
};

export default PropertyGallery;