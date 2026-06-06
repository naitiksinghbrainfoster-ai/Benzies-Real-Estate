import React from "react";
import ContactImage from "../../assets/img/homeimg/Mapsicle-contact.png";

const PropertyAlert = () => {
  return (
    <section className="property-alert-section">
      <div className="property-alert-wrapper">

        {/* Left Side */}
        <div className="property-form-side">
          <h2>Get Property Alert</h2>

          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Phone Number" />
            <input type="text" placeholder="Your Preferred Location" />

            <div className="double-field">
              <input type="text" placeholder="Property Type" />
              <input type="text" placeholder="Your Budget" />
            </div>

            <button type="submit">
              Get Property Alerts →
            </button>
          </form>
        </div>

        {/* Right Side */}
        <div className="property-image-side">
          <img src={ContactImage} alt="Property Alert" />
        </div>

      </div>

      <style jsx>{`
        .property-alert-section {
          background: #ecf1f8;
          padding: 0;
        }

        .property-alert-wrapper {
          max-width: 1700px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 48% 52%;
          align-items: stretch;
        }

        /* Left Side */
        .property-form-side {
          background: #ecf1f8;
          padding: 90px 80px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .property-form-side h2 {
          font-family: "Pochaevsk";
          font-size: 74px;
          line-height: 1.05;
          font-weight: 400;
          color: #000;
          margin-bottom: 60px;
          text-align: center;
        }

        .property-form-side form {
          width: 100%;
        }

        .property-form-side input {
          width: 100%;
          height: 76px;
          border: none;
          outline: none;
          background: #1e3240;
          color: #fff;
          padding: 0 30px;
          margin-bottom: 22px;
          font-size: 18px;
          font-family: "Poppins", sans-serif;
          border-radius: 4px;
        }

        .property-form-side input::placeholder {
          color: rgba(255, 255, 255, 0.9);
        }

        .double-field {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 45px;
        }

        .property-form-side button {
          width: 100%;
          height: 76px;
          background: transparent;
          border: 1px solid #6f7b85;
          color: #1e3240;
          font-size: 20px;
          font-family: "Poppins", sans-serif;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .property-form-side button:hover {
          background: #1e3240;
          color: #fff;
        }

        /* Right Side */
        .property-image-side {
          height: 100%;
          overflow: hidden;
          display: flex;
        }

        .property-image-side img {
          width: 100%;
          height: 100%;
          min-height: 100%;
          object-fit: cover;
          display: block;
        }

        @media (max-width: 1199px) {
          .property-alert-wrapper {
            grid-template-columns: 1fr;
          }

          .property-form-side {
            padding: 70px 40px;
          }

          .property-form-side h2 {
            font-size: 52px;
          }

          .property-image-side {
            height: 700px;
          }
        }

        @media (max-width: 767px) {
          .property-form-side {
            padding: 50px 20px;
          }

          .property-form-side h2 {
            font-size: 38px;
            margin-bottom: 35px;
          }

          .property-form-side input {
            height: 60px;
            font-size: 16px;
            padding: 0 18px;
          }

          .double-field {
            grid-template-columns: 1fr;
            gap: 18px;
            margin-bottom: 25px;
          }

          .property-form-side button {
            height: 60px;
            font-size: 16px;
          }

          .property-image-side {
            height: 450px;
          }
        }
      `}</style>
    </section>
  );
};

export default PropertyAlert;