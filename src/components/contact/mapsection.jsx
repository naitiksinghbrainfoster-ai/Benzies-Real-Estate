import React from "react";

const ContactMapSection = () => {
  return (

    <section className="w-full px-6 pb-16 lg:pb-24 bg-white">

      {/* Main Container */}
      <div className="max-w-[1700px] mx-auto overflow-hidden rounded-b-[12px]">

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7005.905717687309!2d77.43239!3d28.601191!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb58d8d00001%3A0xb0676d965bf2ed13!2sBrainfoster%20Tech%20Private%20Limited!5e0!3m2!1sen!2sin!4v1779712049185!5m2!1sen!2sin"
          width="100%"
          height="700"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[350px] md:h-[500px] lg:h-[700px]"
          title="Google Map"
        ></iframe>

      </div>

    </section>

  );
};

export default ContactMapSection;