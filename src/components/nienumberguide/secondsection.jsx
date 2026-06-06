import React from "react";

import CityImage from "../../assets/img/whybuyproperty/second.png";

const WhyBuySpain = () => {
  return (
    <section className="why-buy-section">
      <div className="container">
        <div className="content-grid">

          {/* Left Content */}
          <div className="content-left">
            <h2>
              Everything You Need to Know About NIE Numbers
            </h2>

            <p>
              The NIE (Número de Identificación de Extranjero) is a
              mandatory identification number required for property
              purchases, banking, taxation, and many other legal and
              financial transactions in Spain. Obtaining an NIE is one
              of the first and most important steps for international
              buyers planning to purchase property.
            </p>

            <h3>Why You Need an NIE</h3>

            <ul className="advantages-list">
              <li>Buying Property</li>
              <li>Opening a Bank Account</li>
              <li>Signing Legal Contracts</li>
              <li>Paying Taxes</li>
              <li>Utility Connections</li>
            </ul>

            <p className="bottom-text">
              We assist clients throughout the entire NIE application
              process, providing expert guidance, document preparation
              support, and appointment coordination to ensure a smooth
              and hassle-free experience from start to finish.
            </p>

            <button className="primary-btn">
              Get NIE Assistance →
            </button>
          </div>

          {/* Right Image */}
          <div className="content-right">
            <img
              src={CityImage}
              alt="NIE Number Assistance"
              className="main-image"
            />
          </div>

        </div>
      </div>

      <style jsx>{`
        .why-buy-section {
          background: #f4f4f4;
          padding: 120px 0;
        }

        .container {
          max-width: 1700px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .content-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 90px;
          align-items: center;
        }

        .content-left h2 {
          font-family: "Pochaevsk";
          font-size: 32px;
          line-height: 1.1;
          font-weight: 400;
          color: #111;
          margin-bottom: 20px;
          max-width: 780px;
        }

        .content-left p {
          font-family: "Poppins", sans-serif;
          font-size: 18px;
          line-height: 1.6;
          color: #6d6d6d;
          margin-bottom: 25px;
          max-width: 760px;
        }

        .content-left h3 {
          font-family: "Pochaevsk";
          font-size: 28px;
          font-weight: 400;
          color: #111;
          margin-bottom: 10px;
        }

        .advantages-list {
          list-style: disc;
          padding-left: 30px;
          margin-bottom: 35px;
        }

        .advantages-list li {
          font-family: "Poppins", sans-serif;
          font-size: 18px;
          line-height: 2;
          color: #6d6d6d;
        }

        .advantages-list li::marker {
          color: #1e3240;
        }

        .bottom-text {
          margin-bottom: 45px !important;
        }

        .primary-btn {
          background: #1e3240;
          color: #fff;
          border: none;
          padding: 22px 34px;
          font-size: 20px;
          font-family: "Poppins", sans-serif;
          cursor: pointer;
          transition: 0.3s;
        }

        .primary-btn:hover {
          background: #162736;
        }

        .content-right {
          position: relative;
        }

        .main-image {
          width: 100%;
          display: block;
          object-fit: cover;
        }

        @media (max-width: 1400px) {
          .content-left h2 {
            font-size: 42px;
          }

          .content-left p,
          .advantages-list li {
            font-size: 20px;
          }
        }

        @media (max-width: 1199px) {
          .content-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .content-left h2 {
            font-size: 42px;
            max-width: 100%;
          }

          .content-left p {
            max-width: 100%;
          }
        }

        @media (max-width: 767px) {
          .why-buy-section {
            padding: 70px 0;
          }

          .container {
            padding: 0 20px;
          }

          .content-left h2 {
            font-size: 34px;
          }

          .content-left h3 {
            font-size: 28px;
          }

          .content-left p,
          .advantages-list li {
            font-size: 17px;
            line-height: 1.8;
          }

          .advantages-list {
            padding-left: 22px;
          }

          .primary-btn {
            width: 100%;
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyBuySpain;