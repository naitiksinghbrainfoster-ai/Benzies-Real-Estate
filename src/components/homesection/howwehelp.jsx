import React from "react";

import arrowIcon from "../../assets/img/homeimg/Arrow.svg";

const processData = [
  {
    title: "Complete A-to-Z Guidance",
    description:
      "From your initial enquiry to key handover and beyond, we manage every stage of the property-buying journey.",
  },
  {
    title: "International Team",
    description:
      "Our diverse team understands the expectations and requirements of international buyers and investors.",
  },
  {
    title: "Multilingual Support",
    description:
      "We help eliminate language barriers by providing clear communication and personalized assistance.",
  },
  {
    title: "Investment Opportunities",
    description:
      "Gain access to carefully selected properties offering excellent lifestyle and investment potential.",
  },
  {
    title: "Local Costa del Sol Expertise",
    description:
      "Benefit from our in-depth knowledge of Marbella, Puerto Banús, Estepona, Benahavís, and the wider Costa del Sol region.",
  },
  {
    title: "Legal & Administrative Assistance",
    description:
      "We coordinate with trusted legal and financial professionals to ensure a smooth transaction process.",
  },
];

const BuyingProcess = () => {
  return (
    <section className="buying-process-section">
      <div className="container">
        <div className="section-heading">
          <h2>Why Choose Benzies Real Estate</h2>

          <p>
            Trusted guidance, local expertise, and complete support for
            international buyers investing in Spain.
          </p>
        </div>

        <div className="process-grid">
          {processData.map((item, index) => (
            <div className="process-wrapper" key={index}>
              <div className="process-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>

              {/* Card 1 → Card 2 */}
              {index === 0 && (
                <div className="arrow arrow-right">
                  <img src={arrowIcon} alt="arrow" />
                </div>
              )}

              {/* Card 2 → Card 3 */}
              {index === 1 && (
                <div className="arrow arrow-right">
                  <img src={arrowIcon} alt="arrow" />
                </div>
              )}

              {/* Card 3 ↓ Card 4 */}
              {index === 2 && (
                <div className="arrow arrow-down">
                  <img src={arrowIcon} alt="arrow" />
                </div>
              )}

              {/* Card 6 ← Card 5 */}
              {index === 5 && (
                <div className="arrow arrow-left">
                  <img src={arrowIcon} alt="arrow" />
                </div>
              )}

              {/* Card 5 ← Card 4 */}
              {index === 4 && (
                <div className="arrow arrow-left">
                  <img src={arrowIcon} alt="arrow" />
                </div>
              )}

              {/* Card 6 ↑ Card 1 */}
              {index === 3 && (
                <div className="arrow arrow-up">
                  <img src={arrowIcon} alt="arrow" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .buying-process-section {
          background: #ffffff;
          padding: 120px 0;
          overflow: hidden;
        }

        .container {
          max-width: 1380px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .section-heading {
          text-align: center;
          margin-bottom: 70px;
        }

        .section-heading h2 {
          font-size: 62px;
          line-height: 1.1;
          color: #111111;
          margin-bottom: 16px;
          font-family: "Pochaevsk";
          font-weight: 400;
        }

        .section-heading p {
          max-width: 700px;
          margin: 0 auto;
          font-size: 18px;
          line-height: 1.8;
          color: #5f5f5f;
          font-family: "Poppins", sans-serif;
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 90px 40px;
        }

        .process-wrapper {
          position: relative;
        }

        .process-card {
          background: #ecf1f8;
          border-radius: 24px;
          padding: 42px 34px;
          min-height: 250px;
          position: relative;
          z-index: 10;
          transition: all 0.35s ease;
          border: 1px solid transparent;
        }

        .process-card:hover {
          transform: translateY(-8px);
          border-color: #d5deea;
        }

        .process-card h3 {
          font-size: 26px;
          line-height: 1.2;
          color: #000;
          margin-bottom: 20px;
          font-family: "Pochaevsk";
          font-weight: 400;
        }

        .process-card p {
          font-size: 16px;
          line-height: 1.9;
          color: #2f2f2f;
          margin: 0;
          font-family: "Poppins", sans-serif;
        }

        /* Arrow Common */
        .arrow {
          position: absolute;
          z-index: 5;
        }

        .arrow img {
          width: 90px;
          height: 18px;
          object-fit: contain;
        }

       .arrow-right {
  top: 50%;
  right: -65px;
  transform: translateY(-50%) rotate(180deg);
}

        /* Bottom Row ← */
       .arrow-left {
  top: 50%;
  left: -65px;
  transform: translateY(-50%);
}

     .arrow-down {
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%) rotate(-90deg);
}

.arrow-up {
  top: -25px;
  left: 50%;
  transform: translateX(-50%) rotate(90deg);
}

        @media (max-width: 1399px) {
          .process-grid {
            gap: 80px 30px;
          }

          .arrow-right {
            right: -55px;
          }

          .arrow-left {
            left: -55px;
          }

          .arrow img {
            width: 75px;
          }
        }

        @media (max-width: 1199px) {
          .buying-process-section {
            padding: 90px 0;
          }

          .section-heading {
            margin-bottom: 55px;
          }

          .section-heading h2 {
            font-size: 48px;
          }

          .process-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
          }

          .arrow {
            display: none;
          }
        }

        @media (max-width: 767px) {
          .buying-process-section {
            padding: 70px 0;
          }

          .section-heading h2 {
            font-size: 36px;
          }

          .section-heading p {
            font-size: 16px;
          }

          .process-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .process-card {
            min-height: auto;
            padding: 28px 22px;
          }

          .process-card h3 {
            font-size: 24px;
            margin-bottom: 16px;
          }

          .process-card p {
            font-size: 15px;
            line-height: 1.8;
          }
        }
      `}</style>
    </section>
  );
};

export default BuyingProcess;