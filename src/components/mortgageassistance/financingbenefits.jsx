import React from "react";

const FinancingBenefits = () => {
  const benefits = [
    {
      title: "Higher Purchasing Power",
      text: "Mortgage financing allows buyers to access properties that may otherwise require significantly larger upfront capital."
    },
    {
      title: "Preserve Personal Savings",
      text: "Maintain liquidity and keep funds available for investments, business opportunities, or future expenses."
    },
    {
      title: "Flexible Repayment Options",
      text: "Choose mortgage structures and repayment plans that align with your financial goals and circumstances."
    },
    {
      title: "Competitive Interest Rates",
      text: "Spanish lenders often provide attractive mortgage rates for qualified international buyers."
    },
    {
      title: "Investment Diversification",
      text: "Leverage financing to diversify your portfolio while benefiting from Spain's property market potential."
    }
  ];

  return (
    <section className="financing-benefits">
      <div className="container">

        <div className="section-header">
          <h2>Why International Buyers Choose Mortgage Financing</h2>

          <p>
            Mortgage financing can provide flexibility, security, and
            strategic advantages when purchasing property in Spain.
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((item, index) => (
            <div key={index} className="benefit-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        .financing-benefits {
          padding: 120px 0;
          background: #f4f4f4;
        }

        .container {
          max-width: 1700px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .section-header {
          text-align: center;
          max-width: 900px;
          margin: 0 auto 80px;
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
          grid-template-columns: repeat(5, 1fr);
          gap: 25px;
        }

        .benefit-card {
          background: #ecf1f8;
          padding: 40px 30px;
          min-height: 320px;
          transition: 0.4s ease;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .benefit-card:nth-child(2),
        .benefit-card:nth-child(4) {
          margin-top: 50px;
        }

        .benefit-card:hover {
          background: #1e3240;
          transform: translateY(-10px);
        }

        .benefit-card h3 {
          font-family: "Pochaevsk";
          font-size: 28px;
          line-height: 1.3;
          color: #111;
          margin-bottom: 18px;
          transition: 0.4s ease;
        }

        .benefit-card p {
          font-family: "Poppins";
          font-size: 18px;
          line-height: 1.8;
          color: #6d6d6d;
          transition: 0.4s ease;
        }

        .benefit-card:hover h3,
        .benefit-card:hover p {
          color: #fff;
        }

        @media (max-width: 1400px) {
          .benefits-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .benefit-card:nth-child(2),
          .benefit-card:nth-child(4) {
            margin-top: 0;
          }
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
          .financing-benefits {
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

export default FinancingBenefits;