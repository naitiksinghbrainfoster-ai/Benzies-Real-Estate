import React from "react";

import arrowIcon from "../../assets/img/homeimg/Arrow.svg";

const processData = [
  {
    title: "Intake",
    description:
      "We understand your goals, budget, lifestyle, and ideal property preferences in Spain.",
  },
  {
    title: "Property Search",
    description:
      "We carefully shortlist premium properties matching your requirements, location, and investment expectations.",
  },
  {
    title: "Viewings",
    description:
      "We arrange personalized property tours and provide expert guidance during every viewing experience.",
  },
  {
    title: "NIE & Bank Account",
    description:
      "We assist with NIE applications and help you open a Spanish bank account.",
  },
  {
    title: "Legal Checks",
    description:
      "Our legal partners verify ownership, documentation, debts, licenses, and property compliance before purchase.",
  },
  {
    title: "Notary",
    description:
      "We coordinate contracts, final signatures, and ensure a smooth notary completion process.",
  },
  {
    title: "Key Handover",
    description:
      "Receive your property keys with complete documentation and full ownership confirmation securely.",
  },
  {
    title: "Aftercare",
    description:
      "Ongoing support with utilities, renovations, rentals, property management, and settling into Spain.",
  },
];

const BuyingProcess = () => {
  return (
    <section className="buying-process-section">
      <div className="container">
        <div className="section-heading">
          <h2>How We Help You</h2>

          <p>
            A complete step-by-step property buying journey with expert support
            from start to finish in Spain.
          </p>
        </div>

        <div className="process-grid">
          {processData.map((item, index) => (
            <div className="process-wrapper" key={index}>
              <div className="process-card">
                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>

              {/* Top Row Arrows */}
              {index < 3 && (
                <div className="arrow arrow-right">
                  <img src={arrowIcon} alt="arrow" />
                </div>
              )}

              {/* Down Arrow */}
              {index === 3 && (
                <div className="arrow arrow-down">
                  <img src={arrowIcon} alt="arrow" />
                </div>
              )}

              {/* Bottom Row Arrows */}
              {index > 4 && (
                <div className="arrow arrow-left">
                  <img src={arrowIcon} alt="arrow" />
                </div>
              )}

              {/* Up Arrow */}
              {index === 4 && (
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
          margin-bottom: 90px;
        }

        .section-heading h2 {
          font-size: 62px;
          line-height: 1.1;
          color: #111111;
          margin-bottom: 18px;
          font-family: "Pochaevsk";
          font-weight: 400;
        }

        .section-heading p {
          max-width: 760px;
          margin: 0 auto;
          font-size: 18px;
          line-height: 1.8;
          color: #5f5f5f;
          font-family: "Poppins", sans-serif;
          font-weight: 400;
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 100px 85px;
          position: relative;
        }

        .process-wrapper {
          position: relative;
        }

        .process-card {
          background: #ecf1f8;
          border-radius: 24px;
          padding: 36px 28px;
          min-height: 270px;
          position: relative;
          z-index: 2;
          transition: 0.3s ease;
        }

        .process-card:hover {
          transform: translateY(-6px);
        }

        .process-card h3 {
          font-size: 26px;
          line-height: 1.2;
          color: #000000;
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
          font-weight: 400;
        }

        /* Arrow Common */
        .arrow {
          position: absolute;
          z-index: 1;
        }

        .arrow img {
          width: 140px;
          height: 20px;
          object-fit: contain;
        }

        /* Top Row */
        .arrow-right {
          top: 50%;
          right: -112px;
          transform: translateY(-50%);
        }

        /* Bottom Row */
        .arrow-left {
          top: 50%;
          left: -112px;
          transform: translateY(-50%) rotate(180deg);
        }

      /* Down Arrow */
.arrow-down {
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%) rotate(-90deg);
}

/* Up Arrow */
.arrow-up {
  top: -10px;
  left: 50%;
  transform: translateX(-50%) rotate(90deg);
}
        @media (max-width: 1399px) {
          .process-grid {
            gap: 130px 65px;
          }

          .arrow-right {
            right: -95px;
          }

          .arrow-left {
            left: -95px;
          }

          .arrow img {
            width: 120px;
          }
        }

        @media (max-width: 1199px) {
          .buying-process-section {
            padding: 90px 0;
          }

          .section-heading {
            margin-bottom: 60px;
          }

          .section-heading h2 {
            font-size: 48px;
          }

          .process-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
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
            line-height: 1.7;
          }

          .process-grid {
            grid-template-columns: 1fr;
            gap: 25px;
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