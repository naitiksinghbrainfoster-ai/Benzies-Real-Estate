import React, { useEffect, useRef, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const CounterItem = ({ end, text, delay }) => {

  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  const ref = useRef(null);

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {

        if (entry.isIntersecting) {
          setStarted(true);
        }

      },
      { threshold: 0.4 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();

  }, []);

  useEffect(() => {

    if (!started) return;

    let start = 0;

    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {

      start += increment;

      if (start >= end) {

        setCount(end);
        clearInterval(timer);

      } else {

        setCount(Math.floor(start));

      }

    }, 16);

    return () => clearInterval(timer);

  }, [started, end]);

  return (

    <div
      ref={ref}
      data-aos="fade-up"
      data-aos-delay={delay}
      className="
        text-center
        px-4
        py-6
        border-r
        border-white/10
        last:border-r-0
      "
    >

      {/* Number */}
      <h2 className="
        text-white
        text-[40px]
        leading-[50px]
        sm:text-[48px]
        sm:leading-[58px]
        lg:text-[58px]
        lg:leading-[68px]
        font-normal
        font-[Pochaevsk]
      ">

        {count}+

      </h2>

      {/* Text */}
      <p className="
        text-white/80
        text-[15px]
        leading-[28px]
        sm:text-[16px]
        sm:leading-[30px]
        mt-4
        max-w-[220px]
        mx-auto
        font-[Poppins]
      ">

        {text}

      </p>

    </div>

  );
};

const CounterSection = () => {

  useEffect(() => {

    AOS.init({
      duration: 800,
      once: true,
    });

  }, []);

  return (

    <section className="bg-[#132734] py-16 sm:py-20 lg:py-24 overflow-hidden">

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div
          data-aos="fade-up"
          className="text-center max-w-[900px] mx-auto"
        >

          <h2 className="
            text-white
            text-[34px]
            leading-[44px]
            sm:text-[45px]
            sm:leading-[58px]
            lg:text-[50px]
            lg:leading-[68px]
            font-normal
            font-[Pochaevsk]
          ">

            Trusted By International Property Buyers

          </h2>

          <p className="
            text-white/70
            text-[16px]
            leading-[30px]
            sm:text-[18px]
            sm:leading-[34px]
            mt-5
            max-w-[820px]
            mx-auto
            font-[Poppins]
          ">

            Benzies Real Estate provides luxury property guidance,
            investment support, and trusted real estate services
            across the Costa del Sol.

          </p>

        </div>

        {/* Counter Grid */}
        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-5
          gap-8
          sm:gap-10
          mt-14
          sm:mt-16
        ">

          <CounterItem
            end={340}
            text="International Clients Supported"
            delay={100}
          />

          <CounterItem
            end={500}
            text="Luxury Properties Available"
            delay={200}
          />

          <CounterItem
            end={280}
            text="Property Consultations Completed"
            delay={300}
          />

          <CounterItem
            end={150}
            text="Investment Opportunities Listed"
            delay={400}
          />

          <CounterItem
            end={25}
            text="Costa del Sol Areas Covered"
            delay={500}
          />

        </div>

      </div>

    </section>

  );
};

export default CounterSection;