import React from "react";

const NIEProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description:
        "We explain the NIE requirements and guide you through the documentation needed for your application.",
    },
    {
      number: "02",
      title: "Document Preparation",
      description:
        "Our team helps prepare and review all required forms and supporting documents.",
    },
    {
      number: "03",
      title: "Application Submission",
      description:
        "We assist with arranging appointments and submitting the NIE application correctly.",
    },
    {
      number: "04",
      title: "Processing & Follow-Up",
      description:
        "We monitor the progress of your application and provide updates throughout the process.",
    },
    {
      number: "05",
      title: "Receive Your NIE",
      description:
        "Once approved, you receive your NIE certificate and can proceed with property and banking transactions.",
    },
  ];

  return (
    <section className="nie-process-section">
      <div className="container">

        <div className="section-heading">
          <h2>NIE Application Process</h2>

          <p>
            Our experienced team simplifies every step of the NIE
            application process, helping international buyers obtain
            their identification number efficiently and without stress.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <div className="step-card" key={index}>
              <span className="step-number">{step.number}</span>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        .nie-process-section {
          background: #f4f4f4;
          padding: 120px 0;
        }

        .container {
          max-width: 1700px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .section-heading {
          text-align: center;
          max-width: 900px;
          margin: 0 auto 80px;
        }

        .section-heading h2 {
          font-family: "Pochaevsk";
          font-size: 58px;
          font-weight: 400;
          line-height: 1.2;
          color: #111;
          margin-bottom: 20px;
        }

        .section-heading p {
          font-family: "Poppins";
          font-size: 20px;
          line-height: 1.8;
          color: #6d6d6d;
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 25px;
        }

        .step-card {
          background: #ecf1f8;
          padding: 40px 30px;
          min-height: 340px;
          transition: all 0.35s ease;
        }

        .step-card:hover {
          background: #1e3240;
          transform: translateY(-8px);
        }

        .step-number {
          display: inline-block;
          font-family: "Pochaevsk";
          font-size: 48px;
          color: #1e3240;
          margin-bottom: 20px;
          transition: 0.35s ease;
        }

        .step-card h3 {
          font-family: "Pochaevsk";
          font-size: 28px;
          line-height: 1.3;
          color: #111;
          margin-bottom: 15px;
          transition: 0.35s ease;
        }

        .step-card p {
          font-family: "Poppins";
          font-size: 18px;
          line-height: 1.8;
          color: #6d6d6d;
          transition: 0.35s ease;
        }

        .step-card:hover .step-number,
        .step-card:hover h3,
        .step-card:hover p {
          color: #fff;
        }

        @media (max-width: 1400px) {
          .steps-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 991px) {
          .steps-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .section-heading h2 {
            font-size: 42px;
          }
        }

        @media (max-width: 767px) {
          .nie-process-section {
            padding: 70px 0;
          }

          .container {
            padding: 0 20px;
          }

          .steps-grid {
            grid-template-columns: 1fr;
          }

          .section-heading h2 {
            font-size: 34px;
          }

          .section-heading p,
          .step-card p {
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
};

export default NIEProcessSection;