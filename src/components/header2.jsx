import React, { useState } from "react";
import logo from "../assets/img/Group 46890.svg";

const Header = () => {
  const [rentOpen, setRentOpen] = useState(false);
  const [buyOpen, setBuyOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-200 py-5 px-8">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">

        {/* Logo */}
        <div>
          <img
            src={logo}
            alt="Benzies"
            className="w-[120px] object-contain mt-2"
          />
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-10">

          <a
            href="/"
            className="text-[18px] font-medium text-black hover:text-gray-600 transition"
          >
            Home
          </a>

          {/* Rent Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setRentOpen(true)}
            onMouseLeave={() => setRentOpen(false)}
          >
            <button className="flex items-center gap-1 text-[18px] font-medium">
              Rent
              <span className="text-[10px]">▼</span>
            </button>

            {rentOpen && (
              <div className="absolute top-12 left-0 bg-white shadow-xl rounded-xl overflow-hidden w-[230px] z-50">

                <a
                  href="/"
                  className="block px-5 py-4 hover:bg-gray-100 transition"
                >
                  Apartments
                </a>

                <a
                  href="/"
                  className="block px-5 py-4 hover:bg-gray-100 transition"
                >
                  Luxury Villas
                </a>

                <a
                  href="/"
                  className="block px-5 py-4 hover:bg-gray-100 transition"
                >
                  Holiday Rentals
                </a>

                <a
                  href="/"
                  className="block px-5 py-4 hover:bg-gray-100 transition"
                >
                  Commercial
                </a>

              </div>
            )}
          </div>

          {/* Buy Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setBuyOpen(true)}
            onMouseLeave={() => setBuyOpen(false)}
          >
            <button className="flex items-center gap-1 text-[18px] font-medium">
              Buy
              <span className="text-[10px]">▼</span>
            </button>

            {buyOpen && (
              <div className="absolute top-12 left-0 bg-white shadow-xl rounded-xl overflow-hidden w-[230px] z-50">

                <a
                  href="/"
                  className="block px-5 py-4 hover:bg-gray-100 transition"
                >
                  New Projects
                </a>

                <a
                  href="/"
                  className="block px-5 py-4 hover:bg-gray-100 transition"
                >
                  Investment Properties
                </a>

                <a
                  href="/"
                  className="block px-5 py-4 hover:bg-gray-100 transition"
                >
                  Beach Villas
                </a>

                <a
                  href="/"
                  className="block px-5 py-4 hover:bg-gray-100 transition"
                >
                  Family Homes
                </a>

              </div>
            )}
          </div>

          <a
            href="/"
            className="text-[18px] font-medium text-black hover:text-gray-600 transition"
          >
            Sell
          </a>

          <a
            href="/"
            className="text-[18px] font-medium text-black hover:text-gray-600 transition"
          >
            Get to know us
          </a>

          {/* Search */}
          <div className="text-[22px] cursor-pointer">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>

        </nav>
      </div>
    </header>
  );
};

export default Header;