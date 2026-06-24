import React from "react";

const ManagementBenefits = () => {
  const benefits = [
    {
      title: "Complete Peace Of Mind",
      description:
        "Enjoy the confidence that your property is professionally monitored, maintained, and managed throughout the year.",
    },
    {
      title: "Regular Property Inspections",
      description:
        "Routine inspections help identify issues early and ensure your property remains in excellent condition.",
    },
    {
      title: "Trusted Local Support",
      description:
        "Our local team is available to coordinate maintenance, contractors, and emergency assistance whenever needed.",
    },
    {
      title: "Rental & Guest Management",
      description:
        "From guest communication to check-ins and check-outs, we ensure a seamless experience for owners and tenants.",
    },
    {
      title: "Financial Transparency",
      description:
        "Receive clear reports, updates, and management information to stay informed about your property.",
    },
    {
      title: "Protect Your Investment",
      description:
        "Our proactive management approach helps preserve property value and maximize long-term returns.",
    },
  ];

  return (
    <section className="management-benefits">
      <div className="container">

        <div className="section-header">
          <h2>Why Choose Our Property Management Services</h2>

          <p>
            We provide comprehensive property management solutions designed
            to protect your investment, reduce stress, and ensure your
            property is always cared for to the highest standard.
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((item, index) => (
            <div key={index} className="benefit-card">
              <span>0{index + 1}</span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        .management-benefits {
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
          max-width: 950px;
          margin: 0 auto 70px;
        }

        .section-header h2 {
          font-family: "Pochaevsk";
          font-size: 56px;
          font-weight: 400;
          line-height: 1.2;
          color: #111;
          margin-bottom: 20px;
        }

        .section-header p {
          font-family: "Poppins";
          font-size: 20px;
          line-height: 1.8;
          color: #6d6d6d;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .benefit-card {
          background: #ecf1f8;
          padding: 40px;
          min-height: 320px;
          transition: all 0.35s ease;
        }

        .benefit-card:hover {
          background: #1e3240;
          transform: translateY(-8px);
        }

        .benefit-card span {
          display: block;
          font-family: "Pochaevsk";
          font-size: 54px;
          color: #1e3240;
          margin-bottom: 15px;
          transition: 0.35s;
        }

        .benefit-card h3 {
          font-family: "Pochaevsk";
          font-size: 28px;
          font-weight: 400;
          color: #111;
          margin-bottom: 15px;
          transition: 0.35s;
        }

        .benefit-card p {
          font-family: "Poppins";
          font-size: 18px;
          line-height: 1.8;
          color: #6d6d6d;
          transition: 0.35s;
        }

        .benefit-card:hover span,
        .benefit-card:hover h3,
        .benefit-card:hover p {
          color: #fff;
        }

        @media (max-width: 991px) {
          .benefits-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .section-header h2 {
            font-size: 42px;
          }
        }

        @media (max-width: 767px) {
          .management-benefits {
            padding: 70px 0;
          }

          .container {
            padding: 0 20px;
          }

          .benefits-grid {
            grid-template-columns: 1fr;
          }

          .section-header h2 {
            font-size: 34px;
          }

          .section-header p,
          .benefit-card p {
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
};

export default ManagementBenefits;