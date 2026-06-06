import React from "react";

const marketData = [
  {
    title: "PROFESSIONAL PROPERTY SERVICES",
    description:
      "Access experienced real estate, legal, and financial professionals throughout the buying process.",
  },
  {
    title: "ESTABLISHED LEGAL FRAMEWORK",
    description:
      "Clear property laws and regulated procedures help ensure secure and transparent transactions.",
    active: true,
  },
  {
    title: "RELIABLE BANKING SYSTEM",
    description:
      "Well-established banking institutions offer secure transactions and mortgage solutions for buyers.",
  },
  {
    title: "STRONG INFRASTRUCTURE",
    description:
      "Modern transport, healthcare, utilities, and communication networks support comfortable living.",
  },
  {
    title: "SECURE OWNERSHIP RIGHTS",
    description:
      "Property ownership is legally protected, providing confidence and long-term security for investors.",
  },
];

const FouthSection = () => {
  return (
    <section className="market-section">
      <div className="container">
        <div className="section-header">
          <h2>A Safe And Established Property Market</h2>

          <p>
            Spain offers a transparent and well-regulated property purchasing
            process, providing confidence and security for international buyers.
          </p>
        </div>

        <div className="market-grid">
          {marketData.map((item, index) => (
            <div
              key={index}
              className={`market-card ${item.active ? "active" : ""}`}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .market-section {
          background: #f4f4f4;
          padding: 100px 0;
        }

        .container {
          max-width: 1700px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .section-header {
          text-align: center;
          margin-bottom: 70px;
        }

        .section-header h2 {
          font-family: "Pochaevsk";
          font-size: 60px;
          line-height: 1.1;
          font-weight: 400;
          color: #111111;
          margin-bottom: 18px;
        }

        .section-header p {
          max-width: 900px;
          margin: 0 auto;
          font-family: "Poppins", sans-serif;
          font-size: 22px;
          line-height: 1.6;
          color: #6d6d6d;
        }

        .market-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 35px;
        }

        .market-card:nth-child(1) {
          grid-column: 1 / 3;
        }

        .market-card:nth-child(2) {
          grid-column: 3 / 5;
        }

        .market-card:nth-child(3) {
          grid-column: 5 / 7;
        }

        .market-card:nth-child(4) {
          grid-column: 2 / 4;
        }

        .market-card:nth-child(5) {
          grid-column: 4 / 6;
        }

        .market-card {
          background: #ecf1f8;
          border-radius: 12px;
          min-height: 320px;
          padding: 45px 35px;

          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;

          transition: all 0.3s ease;
        }

        .market-card:hover {
          transform: translateY(-8px);
          background: #1e3240;
        }

.market-card:hover h3 {
  color: #ffffff;
}

.market-card:hover p {
  color: rgba(255, 255, 255, 0.85);
}

        .market-card.active {
          background: #1e3240;
        }

        .market-card h3 {
          font-family: "Poppins", sans-serif;
          font-size: 22px;
          line-height: 1.4;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 22px;
          color: #000;
        }

        .market-card p {
          font-family: "Poppins", sans-serif;
          font-size: 18px;
          line-height: 1.7;
          color: #6d6d6d;
        }

        .market-card.active h3 {
          color: #ffffff;
        }

        .market-card.active p {
          color: rgba(255, 255, 255, 0.8);
        }

        @media (max-width: 1199px) {
          .section-header h2 {
            font-size: 48px;
          }

          .section-header p {
            font-size: 18px;
          }

          .market-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .market-card:nth-child(1),
          .market-card:nth-child(2),
          .market-card:nth-child(3),
          .market-card:nth-child(4),
          .market-card:nth-child(5) {
            grid-column: auto;
          }
        }

        @media (max-width: 767px) {
          .market-section {
            padding: 70px 0;
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

          .market-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .market-card {
            min-height: auto;
            padding: 35px 25px;
          }

          .market-card h3 {
            font-size: 20px;
          }

          .market-card p {
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
};

export default FouthSection;