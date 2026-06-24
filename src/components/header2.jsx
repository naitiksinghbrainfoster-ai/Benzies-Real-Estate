import React, { useState } from "react";

import logo from "../assets/img/Group 46890.svg";
import ukFlag from "../assets/img/flag/flag-united-kingdom.svg";
import nlFlag from "../assets/img/flag/openmoji_flag-netherlands.svg";
import esFlag from "../assets/img/flag/openmoji_flag-spain.svg";
import frFlag from "../assets/img/flag/openmoji_flag-france.svg";
import arFlag from "../assets/img/flag/openmoji_flag-sudan.svg";
import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";

const Header = () => {

  // Mobile Menu
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-200 py-5 px-5 lg:px-8 sticky top-0 z-[999]">

      <div className="max-w-[1400px] mx-auto flex items-center justify-between">

        {/* ================= LOGO ================= */}
        <Link to="/">

          <img
            src={logo}
            alt="Benzies"
            className="w-[110px] lg:w-[100px] object-contain"
          />

        </Link>

        {/* ================= DESKTOP MENU ================= */}
        <nav className="hidden lg:flex items-center gap-10">

          <Link
            to="/"
            className="text-[18px] font-medium text-black hover:text-gray-600 transition"
          >
            Home
          </Link>

          <Link
            to="/buy"
            className="text-[18px] font-medium text-black hover:text-gray-600 transition"
          >
            Buy
          </Link>

          <Link
            to="/rent"
            className="text-[18px] font-medium text-black hover:text-gray-600 transition"
          >
            Rent
          </Link>

          <Link
            to="/sell"
            className="text-[18px] font-medium text-black hover:text-gray-600 transition"
          >
            Sell
          </Link>

          <Link
            to="/about"
            className="text-[18px] font-medium text-black hover:text-gray-600 transition"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="text-[18px] font-medium text-black hover:text-gray-600 transition"
          >
            Contact
          </Link>

          {/* Search */}
          <button className="text-[22px] cursor-pointer text-black hover:text-gray-600 transition">

            <i className="fa-solid fa-magnifying-glass"></i>

          </button>
<div className="notranslate">

  <select
    translate="no"
    className="
      border
      border-gray-300
      rounded-md
      px-3
      py-2
      text-[15px]
      outline-none
      bg-white
    "
    onChange={(e) => {

      const lang = e.target.value;

      const googleTranslate = document.querySelector(".goog-te-combo");

      if (googleTranslate) {

        googleTranslate.value = lang;

        googleTranslate.dispatchEvent(new Event("change"));

      }

      // Hide Google Top Bar
      setTimeout(() => {

        const banner = document.querySelector(
          "iframe.goog-te-banner-frame"
        );

        if (banner) {
          banner.style.display = "none";
        }

        document.body.style.top = "0px";

      }, 300);

    }}
    defaultValue="en"
  >

    <option value="en" translate="no">EN-English</option>

    <option value="nl" translate="no">NL-Dutch</option>

    <option value="es" translate="no">ES-Spanish</option>

    <option value="fr" translate="no">FR-French</option>

    <option value="ar" translate="no">AR-Arabic</option>

  </select>

</div>

        </nav>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          onClick={() => setMobileMenu(true)}
          className="lg:hidden text-[28px] text-black"
        >

          <i className="fa-solid fa-bars"></i>

        </button>

      </div>

      {/* ================= MOBILE SIDEBAR ================= */}
      <div
  className={`fixed top-0 ${
    mobileMenu ? "right-0" : "-right-full"
  } w-[300px] h-screen overflow-y-auto bg-white shadow-2xl transition-all duration-500 z-[9999] lg:hidden`}
>

        {/* ================= TOP ================= */}
        <div className="flex items-center justify-between px-6 py-6 border-b">

          <Link to="/">

            <img
              src={logo}
              alt="logo"
              className="w-[100px]"
            />

          </Link>

          <button
            onClick={() => setMobileMenu(false)}
            className="text-[28px]"
          >

            <i className="fa-solid fa-xmark"></i>

          </button>

        </div>

        {/* ================= MOBILE LINKS ================= */}
        <div className="flex flex-col px-6 py-6">

          <Link
            to="/"
            onClick={() => setMobileMenu(false)}
            className="py-4 text-[18px] border-b"
          >
            Home
          </Link>

          <Link
            to="/buy"
            onClick={() => setMobileMenu(false)}
            className="py-4 text-[18px] border-b"
          >
            Buy
          </Link>

          <Link
            to="/rent"
            onClick={() => setMobileMenu(false)}
            className="py-4 text-[18px] border-b"
          >
            Rent
          </Link>

          <Link
            to="/sell"
            onClick={() => setMobileMenu(false)}
            className="py-4 text-[18px] border-b"
          >
            Sell
          </Link>

          <Link
            to="/about"
            onClick={() => setMobileMenu(false)}
            className="py-4 text-[18px] border-b"
          >
            About
          </Link>

          <Link
            to="/contact"
            onClick={() => setMobileMenu(false)}
            className="py-4 text-[18px] border-b"
          >
            Contact
          </Link>

          {/* Search */}
          <button className="pt-6 text-[22px] text-left">

            <i className="fa-solid fa-magnifying-glass"></i>

          </button>

         {/* ================= MOBILE LANGUAGE SELECTOR ================= */}

<div className="notranslate mt-6">

  <select
    translate="no"
    className="
      w-full
      border
      border-gray-300
      rounded-md
      px-4
      py-3
      text-[16px]
      outline-none
      bg-white
      cursor-pointer
    "
    onChange={(e) => {

      const lang = e.target.value;

      const googleTranslate = document.querySelector(".goog-te-combo");

      if (googleTranslate) {

        googleTranslate.value = lang;

        googleTranslate.dispatchEvent(new Event("change"));

      }

      setTimeout(() => {

        const banner = document.querySelector(
          "iframe.goog-te-banner-frame"
        );

        if (banner) {
          banner.style.display = "none";
        }

        document.body.style.top = "0px";

      }, 300);

    }}
    defaultValue="en"
  >

    <option value="en" translate="no">EN-English</option>

    <option value="nl" translate="no">NL-Dutch</option>

    <option value="es" translate="no">ES-Spanish</option>

    <option value="fr" translate="no">FR-French</option>

    <option value="ar" translate="no">AR-Arabic</option>

  </select>

</div>

        </div>

      </div>

      {/* ================= OVERLAY ================= */}
      {mobileMenu && (
        <div
          onClick={() => setMobileMenu(false)}
          className="fixed inset-0 bg-black/40 z-[999]"
        ></div>
      )}

    </header>
  );
};

export default Header;