import React from "react";

const SellingProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Property Valuation",
      description:
        "Receive an accurate market valuation based on local expertise and current market conditions.",
    },
    {
      number: "02",
      title: "Marketing Preparation",
      description:
        "Professional photography, property presentation, and listing optimization to maximize appeal.",
    },
    {
      number: "03",
      title: "International Promotion",
      description:
        "Your property is showcased to qualified buyers through our global marketing network.",
    },
    {
      number: "04",
      title: "Buyer Qualification",
      description:
        "We carefully screen enquiries to ensure genuine and financially qualified buyers.",
    },
    {
      number: "05",
      title: "Offer Negotiation",
      description:
        "Expert negotiation support to help secure the strongest possible sale terms.",
    },
    {
      number: "06",
      title: "Completion & Handover",
      description:
        "Full coordination through legal completion and final property handover.",
    },
  ];

  return (
    <section className="selling-process-section">
      <div className="container">

        <div className="section-header">
          <h2>Our Proven Selling Process</h2>

          <p>
            From valuation to completion, we manage every stage of the
            sales journey to help you sell efficiently and achieve the
            best possible outcome.
          </p>
        </div>

        <div className="process-grid">
          {steps.map((step, index) => (
            <div className="process-card" key={index}>
              <span>{step.number}</span>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        .selling-process-section {
          background: #f4f4f4;
          padding: 120px 0;
        }

        .container {
          max-width: 1700px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .section-header {
          text-align: center;
          max-width: 900px;
          margin: 0 auto 70px;
        }

        .section-header h2 {
          font-family: "Pochaevsk";
          font-size: 58px;
          font-weight: 400;
          color: #111;
          margin-bottom: 20px;
        }

        .section-header p {
          font-family: "Poppins";
          font-size: 20px;
          line-height: 1.8;
          color: #6d6d6d;
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .process-card {
          background: #ecf1f8;
          padding: 40px;
          min-height: 320px;
          transition: all 0.35s ease;
        }

        .process-card:hover {
          background: #1e3240;
          transform: translateY(-8px);
        }

        .process-card span {
          font-family: "Pochaevsk";
          font-size: 54px;
          color: #1e3240;
          display: block;
          margin-bottom: 15px;
          transition: 0.35s;
        }

        .process-card h3 {
          font-family: "Pochaevsk";
          font-size: 30px;
          color: #111;
          margin-bottom: 15px;
          transition: 0.35s;
        }

        .process-card p {
          font-family: "Poppins";
          font-size: 18px;
          line-height: 1.8;
          color: #6d6d6d;
          transition: 0.35s;
        }

        .process-card:hover span,
        .process-card:hover h3,
        .process-card:hover p {
          color: #fff;
        }

        @media (max-width: 991px) {
          .process-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .section-header h2 {
            font-size: 42px;
          }
        }

        @media (max-width: 767px) {
          .selling-process-section {
            padding: 70px 0;
          }

          .container {
            padding: 0 20px;
          }

          .process-grid {
            grid-template-columns: 1fr;
          }

          .section-header h2 {
            font-size: 34px;
          }

          .section-header p,
          .process-card p {
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
};

export default SellingProcessSection;