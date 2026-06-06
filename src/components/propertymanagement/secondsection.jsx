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
              Professional Property Care & Management
            </h2>

            <p>
              Protect your investment and enjoy complete peace of mind with
              our comprehensive property management solutions. Whether your
              property is a holiday home, rental investment, or permanent
              residence, our experienced team ensures it remains well
              maintained, secure, and professionally managed throughout the year.
            </p>

            <h3>Services Include</h3>

            <ul className="advantages-list">
              <li>Property Inspections</li>
              <li>Maintenance Coordination</li>
              <li>Key Holding</li>
              <li>Rental Management</li>
              <li>Guest Services</li>
              <li>Utility Management</li>
              <li>Owner Reporting</li>
            </ul>

            <p className="bottom-text">
              From routine inspections and maintenance scheduling to rental
              administration and guest support, we provide a complete property
              management service designed to protect your asset and maximize
              its long-term value.
            </p>

            <button className="primary-btn">
              Explore Property Management →
            </button>
          </div>

          {/* Right Image */}
          <div className="content-right">
            <img
              src={CityImage}
              alt="Property Management Services"
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
          font-size: 28px;
          line-height: 1.1;
          font-weight: 400;
          color: #111;
          margin-bottom: 15px;
          max-width: 780px;
        }

        .content-left p {
          font-family: "Poppins", sans-serif;
          font-size: 18px;
          line-height: 1.6;
          color: #6d6d6d;
          margin-bottom: 15px;
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
          margin-bottom: 25px;
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
          margin-bottom: 30px !important;
        }

        .primary-btn {
          background: #1e3240;
          color: #fff;
          border: none;
          padding: 20px 28px;
          font-size: 18px;
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