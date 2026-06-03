import React, { useEffect, useState } from "react";

import "./index.css";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/home";
import Buy from "./pages/buyproperty";
import Rent from "./pages/rent";
import Sell from "./pages/sell";
import Contact from "./pages/contact";
import About from "./pages/about";
import PropertyDetails from "./pages/propertydetails";
import RentPropertyDetail from "./pages/rentpropertydetail";
import LatestProperties from "./pages/latestpropertycard";

import whatsappIcon from "./assets/img/ic_baseline-whatsapp.svg";
import ScrollToTop from "./components/ScrollToTop";

function App() {

  const [showBounce, setShowBounce] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {

      setShowBounce(false);

    }, 30000);

    return () => clearTimeout(timer);

  }, []);

  return (

    <>

      <BrowserRouter>
 <ScrollToTop />

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/buy"
            element={<Buy />}
          />

          <Route
            path="/rent"
            element={<Rent />}
          />

          <Route
            path="/sell"
            element={<Sell />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/property/:slug"
            element={<PropertyDetails />}
          />

          <Route
            path="/rent-property/:slug"
            element={<RentPropertyDetail />}
          />

          <Route
            path="/latest-properties/:slug"
            element={<LatestProperties />}
          />

        </Routes>

      </BrowserRouter>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/31644367777"
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 z-[999] ${
          showBounce ? "animate-bounce" : ""
        }`}
      >

        <img
          src={whatsappIcon}
          alt="WhatsApp"
          className="w-[65px] h-[65px]"
        />

      </a>

    </>

  );
}

export default App;