import React from "react";

const processSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    description:
      "We begin by understanding your goals, budget, preferred locations, and property requirements.",
  },
  {
    step: "02",
    title: "Property Search",
    description:
      "Our team carefully selects and presents properties that match your criteria and investment objectives.",
  },
  {
    step: "03",
    title: "Property Viewings",
    description:
      "Arrange in-person or virtual property viewings to help you evaluate the best options.",
  },
  {
    step: "04",
    title: "Reservation Agreement",
    description:
      "Once you find the right property, we assist with securing it through a reservation agreement.",
  },
  {
    step: "05",
    title: "NIE Number Application",
    description:
      "We guide you through obtaining your NIE number, required for property ownership in Spain.",
  },
  {
    step: "06",
    title: "Spanish Bank Account Setup",
    description:
      "Assistance with opening a Spanish bank account to facilitate payments and transactions.",
  },
  {
    step: "07",
    title: "Legal Checks",
    description:
      "Trusted legal professionals verify contracts, ownership records, and property documentation.",
  },
  {
    step: "08",
    title: "Mortgage Assistance",
    description:
      "If required, we help connect you with mortgage providers and financing solutions.",
  },
  {
    step: "09",
    title: "Notary Completion",
    description:
      "Finalize the purchase at the notary office and complete the ownership transfer process.",
  },
  {
    step: "10",
    title: "Key Handover",
    description:
      "Receive the keys to your new property and officially become the owner.",
  },
  {
    step: "11",
    title: "After-Sales Support",
    description:
      "Ongoing support with utilities, property management, renovations, and settling into Spain.",
  },
];

const BuySteps = () => {
  return (
    <section className="buy-process-section">
      <div className="container">
        <div className="section-header">
          <h2>A Simple Step-by-Step Buying Experience</h2>

          <p>
            At Benzies Real Estate, we guide you through every stage of
            purchasing property in Spain, ensuring a smooth and stress-free
            experience from your first enquiry to key handover and beyond.
          </p>
        </div>

        <div className="timeline">
          {processSteps.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="step-card">
                <span className="step-number">
                  Step {item.step}
                </span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>

              {index !== processSteps.length - 1 && (
                <div className="arrow">
                  ↓
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .buy-process-section {
          padding: 120px 0;
          background: #f4f4f4;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .section-header {
          text-align: center;
          max-width: 950px;
          margin: 0 auto 80px;
        }

        .section-header h2 {
          font-family: "Pochaevsk";
          font-size: 60px;
          line-height: 1.15;
          font-weight: 400;
          color: #111;
          margin-bottom: 20px;
        }

        .section-header p {
          font-family: "Poppins", sans-serif;
          font-size: 22px;
          line-height: 1.8;
          color: #6d6d6d;
        }

        .timeline {
          max-width: 900px;
          margin: 0 auto;
        }

        .timeline-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .step-card {
          width: 100%;
          background: #ecf1f8;
          border-radius: 16px;
          padding: 40px;
          text-align: center;
          transition: all 0.35s ease;
        }

        .step-card:hover {
          background: #1e3240;
          transform: translateY(-8px);
        }

        .step-card:hover .step-number,
        .step-card:hover h3,
        .step-card:hover p {
          color: #fff;
        }

        .step-number {
          display: inline-block;
          font-family: "Poppins", sans-serif;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 2px;
          color: #1e3240;
          text-transform: uppercase;
          margin-bottom: 18px;
          transition: 0.3s;
        }

        .step-card h3 {
          font-family: "Pochaevsk";
          font-size: 34px;
          font-weight: 400;
          color: #111;
          margin-bottom: 15px;
          transition: 0.3s;
        }

        .step-card p {
          font-family: "Poppins", sans-serif;
          font-size: 18px;
          line-height: 1.8;
          color: #6d6d6d;
          transition: 0.3s;
        }

        .arrow {
          font-size: 46px;
          color: #1e3240;
          margin: 12px 0;
          line-height: 1;
        }

        @media (max-width: 991px) {
          .buy-process-section {
            padding: 80px 0;
          }

          .section-header h2 {
            font-size: 44px;
          }

          .section-header p {
            font-size: 18px;
          }

          .step-card {
            padding: 30px;
          }

          .step-card h3 {
            font-size: 28px;
          }
        }

        @media (max-width: 767px) {
          .section-header h2 {
            font-size: 34px;
          }

          .section-header p {
            font-size: 16px;
          }

          .step-card {
            padding: 25px;
          }

          .step-card h3 {
            font-size: 24px;
          }

          .step-card p {
            font-size: 16px;
          }

          .arrow {
            font-size: 36px;
          }
        }
      `}</style>
    </section>
  );
};

export default BuySteps;