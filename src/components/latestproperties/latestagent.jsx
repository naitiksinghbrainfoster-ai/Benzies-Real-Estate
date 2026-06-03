import React from "react";

const PropertyAgent = () => {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">

        <div className="bg-[#183346] rounded-[12px] p-12 text-center">

          <h2 className="
            text-[52px]
            font-[Pochaevsk]
            text-white
          ">
            Speak With Our Property Expert
          </h2>

          <p className="
            text-white/80
            mt-6
            text-[18px]
            leading-[34px]
            max-w-[700px]
            mx-auto
          ">
            Our international property specialists will guide you
            through every step of purchasing real estate in Spain.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-10">

            <button className="
              bg-white
              text-[#183346]
              px-10
              py-4
              rounded-md
            ">
              Schedule Viewing
            </button>

            <button className="
              border
              border-white
              text-white
              px-10
              py-4
              rounded-md
            ">
              WhatsApp Contact
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default PropertyAgent;