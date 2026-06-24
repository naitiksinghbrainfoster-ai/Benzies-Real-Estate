import React from "react";

const InvestorSection = () => {
  const investorData = [
    {
      title: "Strong Rental Returns",
      description:
        "High demand from tourists, expatriates, and long-term tenants creates excellent rental income opportunities throughout Spain.",
    },
    {
      title: "Growing Property Values",
      description:
        "Prime locations such as Marbella, Costa del Sol, and major cities have shown consistent long-term capital appreciation.",
    },
    {
      title: "International Buyer Friendly",
      description:
        "Spain offers a transparent purchasing process and attracts investors from across Europe, the Middle East, Asia, and beyond.",
    },
    {
      title: "Lifestyle & Investment Combined",
      description:
        "Enjoy a world-class lifestyle while benefiting from a valuable asset that can generate income and long-term wealth.",
    },
  ];

  return (
    <section className="investor-section">
      <div className="container">

        <div className="section-header">
          <h2>Why Investors Choose Spain</h2>

          <p>
            Spain continues to attract international investors due to its
            stable property market, strong tourism sector, and long-term
            growth potential.
          </p>
        </div>

        <div className="investor-grid">
          {investorData.map((item, index) => (
            <div className="investor-card" key={index}>
              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        .investor-section {
          background: #ecf1f8;
          padding: 120px 0;
        }

        .container {
          max-width: 1600px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .section-header {
          text-align: center;
          margin-bottom: 70px;
        }

        .section-header h2 {
          font-family: "Pochaevsk";
          font-size: 60px;
          font-weight: 400;
          line-height: 1.1;
          color: #111;
          margin-bottom: 20px;
        }

        .section-header p {
          max-width: 850px;
          margin: 0 auto;
          font-family: "Poppins", sans-serif;
          font-size: 22px;
          line-height: 1.7;
          color: #6d6d6d;
        }

        .investor-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
        }

        .investor-card {
          background: #ffffff;
          border-radius: 14px;
          padding: 45px;
          transition: all 0.35s ease;
        }

        .investor-card:hover {
          background: #1e3240;
          transform: translateY(-8px);
        }

        .investor-card:hover h3,
        .investor-card:hover p {
          color: #ffffff;
        }

        .investor-card h3 {
          font-family: "Pochaevsk";
          font-size: 34px;
          font-weight: 400;
          line-height: 1.3;
          color: #111;
          margin-bottom: 18px;
          transition: 0.35s ease;
        }

        .investor-card p {
          font-family: "Poppins", sans-serif;
          font-size: 19px;
          line-height: 1.8;
          color: #6d6d6d;
          transition: 0.35s ease;
        }

        @media (max-width: 1199px) {
          .section-header h2 {
            font-size: 48px;
          }

          .section-header p {
            font-size: 20px;
          }

          .investor-card h3 {
            font-size: 30px;
          }
        }

        @media (max-width: 991px) {
          .investor-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 767px) {
          .investor-section {
            padding: 70px 0;
          }

          .container {
            padding: 0 20px;
          }

          .section-header {
            margin-bottom: 40px;
          }

          .section-header h2 {
            font-size: 34px;
          }

          .section-header p {
            font-size: 16px;
          }

          .investor-card {
            padding: 30px 25px;
          }

          .investor-card h3 {
            font-size: 24px;
          }

          .investor-card p {
            font-size: 16px;
            line-height: 1.8;
          }
        }
      `}</style>
    </section>
  );
};

export default InvestorSection;