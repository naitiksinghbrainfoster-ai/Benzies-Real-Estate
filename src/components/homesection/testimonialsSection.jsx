import React, { useEffect, useRef, useState } from "react";

import QuoteIcon from "../../assets/img/homeimg/testimonialsicon.svg";
import StarFill from "../../assets/img/homeimg/propertylistings-starwithcolor.svg";
import StarEmpty from "../../assets/img/homeimg/propertylistings-starwithoutcolor.svg";

const testimonials = [
  {
    name: "Michael Thompson",
    review:
      "Benzies Real Estate made our property buying experience in Spain smooth and completely stress-free from start to finish.",
    rating: 4,
  },
  {
    name: "Emma Van Dijk",
    review:
      "The team helped us with legal guidance, NIE applications, and finding the perfect luxury apartment in Marbella.",
    rating: 4,
  },
  {
    name: "David Morgan",
    review:
      "Professional service, excellent communication, and great investment advice throughout the entire process.",
    rating: 4,
  },
  {
    name: "Sophie Laurent",
    review:
      "We truly felt supported during every step of purchasing our property on the Costa del Sol.",
    rating: 5,
  },
  {
    name: "Alexander Brown",
    review:
      "Benzies delivered a premium experience and helped us secure an amazing investment property in Spain.",
    rating: 4,
  },
  {
    name: "Olivia Johnson",
    review:
      "The entire process felt professional and transparent. Highly recommended for international buyers.",
    rating: 5,
  },

];

const TestimonialsSection = () => {

  const sliderRef = useRef(null);

  const [isHovered, setIsHovered] = useState(false);

  // Card By Card Auto Slide
  useEffect(() => {

    const slider = sliderRef.current;

    if (!slider) return;

    let currentIndex = 0;

    const cards = slider.querySelectorAll(".testimonial-card");

    const autoSlide = setInterval(() => {

      if (!isHovered) {

        currentIndex++;

        if (currentIndex >= cards.length) {
          currentIndex = 0;
        }

        slider.scrollTo({
          left: cards[currentIndex].offsetLeft,
          behavior: "smooth",
        });
      }

    }, 3000);

    return () => clearInterval(autoSlide);

  }, [isHovered]);

  return (
    <section className="py-20 lg:py-24 bg-white overflow-hidden">

      <div className="max-w-[1700px] mx-auto pl-5 lg:pl-16 overflow-hidden">

        {/* Heading */}
        <div className="mb-14">

          <h2 className="text-[#1E1E1E] text-[42px] sm:text-[56px] lg:text-[72px] leading-[1.1] font-serif">

            Our testimonials

          </h2>

          <p className="mt-5 text-[#6B6B6B] text-[18px] md:text-[24px]">

              Benzies Real Estate delivers a premium property buying
            experience with trusted guidance and international support.

          </p>

        </div>

        {/* Slider */}
        <div
          ref={sliderRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex gap-7 overflow-x-auto scroll-smooth pb-2"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >

          {[...testimonials].map((item, index) => (
            <div
              key={index}
              className="testimonial-card min-w-[320px] sm:min-w-[420px] lg:min-w-[560px] bg-[#ECF1F8] rounded-[10px] px-8 py-7 transition-all duration-500 hover:scale-[1.03]"
            >

              {/* Quote Icon */}
              <div className="mb-5">

                <img
                  src={QuoteIcon}
                  alt="quote"
                  className="w-[42px] h-[42px] object-contain"
                />

              </div>

              {/* Name */}
              <h3 className="text-[#1E1E1E] text-[22px] md:text-[26px] font-medium mb-4">

                {item.name}

              </h3>

              {/* Review */}
              <p className="text-[#666666] text-[16px] md:text-[18px] leading-[1.7] font-medium">

                {item.review}

              </p>

              {/* Stars */}
              <div className="flex items-center gap-2 mt-8">

                {[...Array(5)].map((_, starIndex) => (
                  <img
                    key={starIndex}
                    src={
                      starIndex < item.rating
                        ? StarFill
                        : StarEmpty
                    }
                    alt="star"
                    className="w-[22px] h-[22px]"
                  />
                ))}

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Scrollbar Hide */}
      <style>
        {`
          .scroll-smooth::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>

    </section>
  );
};

export default TestimonialsSection;