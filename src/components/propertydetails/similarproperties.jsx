import React from "react";

import Property1 from "../../assets/img/homeimg/propertylistings1.png";
import Property2 from "../../assets/img/homeimg/propertylistings2.png";
import Property3 from "../../assets/img/homeimg/propertylistings3.png";

const SimilarProperties = () => {
  return (
    <section className="py-20 bg-[#F7F7F7]">

      <div className="max-w-[1480px] mx-auto px-4 sm:px-6">

        <h2 className="
          text-[52px]
          text-center
          font-[Pochaevsk]
          mb-14
        ">
          Similar Properties
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {[Property1, Property2, Property3].map((img, index) => (

            <div
              key={index}
              className="bg-white rounded-[10px] overflow-hidden"
            >

              <img
                src={img}
                alt=""
                className="w-full h-[320px] object-cover"
              />

              <div className="p-6">

                <h3 className="
                  text-[26px]
                  font-[Pochaevsk]
                ">
                  Luxury Villa Marbella
                </h3>

                <p className="text-[#777] mt-2">
                  Costa del Sol, Spain
                </p>

                <h4 className="
                  text-[30px]
                  mt-4
                  text-[#183346]
                  font-[Pochaevsk]
                ">
                  €2,400,000
                </h4>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default SimilarProperties;