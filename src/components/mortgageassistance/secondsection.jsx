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
              Mortgage Assistance
            </h2>

            <p>
              Our team works closely with trusted financial partners to
              help international buyers secure suitable mortgage solutions
              for their Spanish property purchase.
            </p>

            <h3>Financing Made Simple</h3>

            <ul className="advantages-list">
              <li>Mortgage Eligibility Assessment</li>
              <li>Loan Application Support</li>
              <li>Required Documentation</li>
              <li>Bank Coordination</li>
              <li>Mortgage Comparisons</li>
            </ul>

            <button className="primary-btn">
              Speak With A Mortgage Advisor →
            </button>
          </div>

          {/* Right Image */}
          <div className="content-right">
            <img
              src={CityImage}
              alt="Mortgage Assistance"
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
          font-size: 48px;
          line-height: 1.1;
          font-weight: 400;
          color: #111;
          margin-bottom: 30px;
          max-width: 780px;
        }

        .content-left p {
          font-family: "Poppins", sans-serif;
          font-size: 22px;
          line-height: 1.7;
          color: #6d6d6d;
          margin-bottom: 35px;
          max-width: 760px;
        }

        .content-left h3 {
          font-family: "Pochaevsk";
          font-size: 36px;
          font-weight: 400;
          color: #111;
          margin-bottom: 20px;
        }

        .advantages-list {
          list-style: disc;
          padding-left: 30px;
          margin-bottom: 45px;
        }

        .advantages-list li {
          font-family: "Poppins", sans-serif;
          font-size: 21px;
          line-height: 2;
          color: #6d6d6d;
        }

        .advantages-list li::marker {
          color: #1e3240;
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