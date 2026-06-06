import React from "react";

import CityImage from "../../assets/img/whybuyproperty/second.png";

const LifestyleSection = () => {
  return (
    <section className="lifestyle-section">
      <div className="container">
        <div className="lifestyle-grid">

          {/* Left Image */}
          <div className="image-side">
            <img
              src={CityImage}
              alt="Spain Lifestyle"
              className="main-image"
            />
          </div>

          {/* Right Content */}
          <div className="content-side">
            <h2>Enjoy An Exceptional Lifestyle</h2>

            <p>
              Spain is renowned for its relaxed Mediterranean lifestyle,
              beautiful landscapes, and welcoming communities. From
              picturesque coastal towns to vibrant cities, the country
              offers something for every type of buyer.
            </p>

            <h3>Lifestyle Benefits</h3>

            <ul>
              <li>More than 300 days of sunshine per year</li>
              <li>Beautiful beaches and marinas</li>
              <li>World-class golf courses</li>
              <li>Excellent restaurants and nightlife</li>
              <li>Rich culture and history</li>
              <li>Healthy Mediterranean lifestyle</li>
            </ul>

            <p className="bottom-text">
              For many buyers, purchasing property in Spain is not just
              about real estate—it is about embracing a better way of life.
            </p>

            <button>Contact Us →</button>
          </div>

        </div>
      </div>

      <style jsx>{`
        .lifestyle-section {
          background: #f4f4f4;
          padding: 50px 0;
        }

        .container {
          max-width: 1700px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .lifestyle-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 80px;
          align-items: center;
        }

        /* Image Side */
        .image-side {
          position: relative;
        }

        .main-image {
          width: 100%;
          display: block;
          object-fit: cover;
        }

        /* Content Side */
        .content-side h2 {
          font-family: "Pochaevsk";
          font-size: 40px;
          line-height: 1.1;
          font-weight: 400;
          color: #111;
          margin-bottom: 20px;
        }

        .content-side p {
          font-family: "Poppins", sans-serif;
          font-size: 20px;
          line-height: 1.7;
          color: #6d6d6d;
          margin-bottom: 20px;
        }

        .content-side h3 {
          font-family: "Pochaevsk";
          font-size: 38px;
          font-weight: 400;
          color: #555;
          margin-bottom: 15px;
        }

        /* Bullet List */
        .content-side ul {
          list-style-type: disc !important;
          list-style-position: outside;
          padding-left: 32px;
          margin: 0 0 34px 0;
        }

        .content-side li {
          display: list-item !important;
          list-style-type: disc !important;
          font-family: "Poppins", sans-serif;
          font-size: 20px;
          line-height: 1.9;
          color: #6d6d6d;
        }

        .content-side li::marker {
          color: #6d6d6d;
          font-size: 14px;
        }

        .bottom-text {
          margin-bottom: 40px !important;
        }

        .content-side button {
          background: #1e3240;
          color: #fff;
          border: none;
          padding: 20px 34px;
          font-size: 20px;
          font-family: "Poppins", sans-serif;
          cursor: pointer;
          transition: 0.3s;
        }

        .content-side button:hover {
          background: #162736;
        }

        @media (max-width: 1199px) {
          .lifestyle-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .content-side h2 {
            font-size: 48px;
          }

          .content-side h3 {
            font-size: 34px;
          }
        }

        @media (max-width: 767px) {
          .lifestyle-section {
            padding: 70px 0;
          }

          .container {
            padding: 0 20px;
          }

          .content-side h2 {
            font-size: 36px;
          }

          .content-side h3 {
            font-size: 28px;
          }

          .content-side p,
          .content-side li {
            font-size: 17px;
          }

          .content-side button {
            width: 100%;
            font-size: 16px;
          }

          .content-side ul {
            padding-left: 24px;
          }
        }
      `}</style>
    </section>
  );
};

export default LifestyleSection;