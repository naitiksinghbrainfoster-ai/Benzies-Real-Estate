import React, { useState } from "react";

const faqData = [
  {
    question:
      "What are the advantages of selling through a real estate agency?",
    answer:
      "Selling a property may seem straightforward at first, but as the process unfolds, personal, commercial, and legal complexities can arise. A professional real estate agent not only saves you time by handling these challenges but also ensures you can focus on your priorities. At Lucas Fox, our expertise and experience allow us to identify the right buyer, secure the best deal, and expertly manage all documentation and legal matters. We ensure full compliance with regulations and provide a seamless, stress-free, and secure sales process, maximizing the value of your property while handling every step with efficiency.",
  },
  {
    question:
      "How to determine the optimal price for the property?",
    answer:
      "We offer a comprehensive market analysis, comparing recently sold properties in the area. Determining the best market price involves more than just square meters; our deep industry knowledge, extensive transaction data, and advanced technology allow us to provide accurate pricing, complementing the expertise of our professional agents. For an initial assessment, you can use the online valuation to get a preliminary estimate of your property. However, it’s important to note that it cannot replace a thorough, detailed valuation by an expert. For this, you can request an on-site valuation with one of our experts. Contact us and we’ll quickly get in touch to arrange a convenient time.",
  },
  {
    question:
      "Is it necessary to renovate or make repairs before selling?",
    answer:
      "It depends on the condition of your property. Small improvements, like a fresh coat of paint or fixing leaks, can enhance its appeal and value. Buyers make decisions based on their senses—what they see, hear, feel, and even smell. Creating a welcoming atmosphere through cleanliness, lighting, and minor touch-ups can make a significant difference when preparing your property for sale.",
  },
  {
    question:
      "How long does it typically take to sell a property?",
    answer:
      "The time it takes to sell a property depends on the market, location, and price, but it can range from a few weeks to several months. Having a solid database of active buyers, a competitive price, and an effective marketing strategy is key to speeding up the process.",
  },
  {
    question:
      "Is it possible to set a higher asking price and negotiate later?",
    answer:
      "The risks of overpricing include a longer time on the market, potential loss of buyer interest, and ultimately, a lower sale price compared to the right market value. Setting the right price from the beginning is key to attracting serious buyers and achieving a successful sale.",
  },
  {
    question:
      "Is it a good idea to accept the first offer?",
    answer:
      "While it’s tempting to accept the first offer, it’s important to evaluate it carefully. Consider not only the price but also the other terms, and compare it with the market valuation. Typically, the first offers tend to be the highest since properties can lose value over time—the longer they’re on the market, the more their appeal diminishes. Therefore, it may be beneficial to assess if the offer aligns with your goals or if waiting for other offers could bring better results.",
  },
  {
    question:
      "What are the essential documents required to sell a property?",
    answer:
      "Essential documents generally include proof of ownership, identification documents, energy certificates, tax documents, and any property-related legal paperwork.",
  },
];

const FaqSection = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFaq = (index) => {

    setActiveIndex(activeIndex === index ? null : index);

  };

  return (
    <section className="w-full bg-white py-20 lg:py-28 px-5">

      <div className="max-w-[1200px] mx-auto">

        {/* Heading */}
{/* Heading */}
{/* Heading */}
<h2 className="text-center text-[#111111] text-[34px] sm:text-[44px] lg:text-[52px] font-semibold font-[Pochaevsk] mb-16">

  Frequently Asked Questions

</h2>

        {/* FAQ */}
        <div className="flex flex-col">

          {faqData.map((item, index) => (

            <div
              key={index}
              className="border-b border-[#D9D9D9] py-7"
            >

              {/* Question */}
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between gap-5 text-left"
              >

                <h3 className="text-[#111111] text-[20px] lg:text-[22px] font-semibold leading-[1.5]">

                  {item.question}

                </h3>

                <span className="text-[28px] text-black">

                  {activeIndex === index ? "−" : "+"}

                </span>

              </button>

              {/* Answer */}
              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  activeIndex === index
                    ? "grid-rows-[1fr] opacity-100 mt-8"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >

                <div className="overflow-hidden">

                  <p className="text-[#222222] text-[18px] lg:text-[20px] leading-[1.9] max-w-[1100px]">

                    {item.answer}

                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default FaqSection;