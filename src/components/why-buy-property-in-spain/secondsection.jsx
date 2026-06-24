import React from "react";

import CityImage from "../../assets/img/whybuyproperty/second.png";
// import WhyArrow from "../../assets/img/whybuyproperty/whyarrow.svg";

const WhyBuySpain = () => {
  return (
    <section className="why-buy-section">
      <div className="container">
        <div className="content-grid">

          {/* Left Content */}
          <div className="content-left">
            <h2>
              Discover The Benefits Of Owning Property In One Of Europe’s Most
              Desirable Destinations
            </h2>

            <p>
              Spain has long been one of the most attractive countries for
              international property buyers. With its exceptional climate,
              stunning coastline, vibrant culture, modern infrastructure, and
              strong property market, it offers an ideal combination of
              lifestyle and investment potential.
            </p>

            <p>
              Whether you are looking for a holiday home, permanent residence,
              retirement property, or investment opportunity, Spain continues
              to attract buyers from around the world seeking both quality of
              life and long-term value.
            </p>

            <div className="button-group">
              <button className="primary-btn">
                Browse properties →
              </button>

              <button className="secondary-btn">
                Start the experience
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="content-right">
            {/* <img
              src={WhyArrow}
              alt="arrow"
              className="decorative-arrow"
            /> */}

            <img
              src={CityImage}
              alt="Spain Property"
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
          line-height: 1.05;
          font-weight: 400;
          color: #111;
          margin-bottom: 40px;
          max-width: 780px;
        }

        .content-left p {
          font-family: "Poppins", sans-serif;
          font-size: 22px;
          line-height: 1.65;
          color: #6d6d6d;
          margin-bottom: 32px;
          max-width: 760px;
        }

        .button-group {
          display: flex;
          gap: 30px;
          margin-top: 55px;
        }

        .primary-btn {
          background: #1e3240;
          color: #fff;
          border: none;
          padding: 22px 34px;
          font-size: 20px;
          font-family: "Poppins";
          cursor: pointer;
          transition: 0.3s;
        }

        .primary-btn:hover {
          background: #162736;
        }

        .secondary-btn {
          background: transparent;
          border: 1px solid #1e3240;
          color: #1e3240;
          padding: 22px 34px;
          font-size: 20px;
          font-family: "Poppins";
          cursor: pointer;
          transition: 0.3s;
        }

        .secondary-btn:hover {
          background: #1e3240;
          color: #fff;
        }

        .content-right {
          position: relative;
        }

        .decorative-arrow {
          position: absolute;
          top: 130px;
          left: 110px;
          width: 42px;
          z-index: 2;
        }

        .main-image {
          width: 100%;
          display: block;
          object-fit: cover;
        }

        @media (max-width: 1400px) {
          .content-left h2 {
            font-size: 56px;
          }

          .content-left p {
            font-size: 20px;
          }
        }

        @media (max-width: 1199px) {
          .content-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .content-left h2 {
            font-size: 48px;
            max-width: 100%;
          }

          .content-left p {
            max-width: 100%;
          }

          .decorative-arrow {
            left: 60px;
            top: 70px;
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
            font-size: 36px;
          }

          .content-left p {
            font-size: 17px;
            line-height: 1.8;
          }

          .button-group {
            flex-direction: column;
            gap: 15px;
          }

          .primary-btn,
          .secondary-btn {
            width: 100%;
            font-size: 16px;
          }

          .decorative-arrow {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyBuySpain;