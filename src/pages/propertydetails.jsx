import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

// ✅ API hook
import { useProperty } from "../hooks/useProperties";

// Components
import HeroSection from "../components/propertydetails/propertyhero";
import PropertyOverview from "../components/propertydetails/propertyoverview";
import PropertyGallery from "../components/propertydetails/propertygallery";
import PropertyFeatures from "../components/propertydetails/propertyfeatures";
import PropertyLocation from "../components/propertydetails/propertylocation";
import PropertyAgent from "../components/propertydetails/propertyagent";
import SimilarProperties from "../components/propertydetails/similarproperties";

const PropertyDetailPage = () => {

  // ✅ FIX 1: App.js uses ":slug" so we must use slug here
  const { slug } = useParams();

  // ✅ FIX 2: Extract the Reference from slug
  // URL can be: /property/R5400709  OR  /property/middle-floor-apartment-R5400709
  // We extract the Reference (starts with R + digits) from the end of the slug
  const refMatch = slug?.match(/R\d+$/i);
  const propertyRef = refMatch ? refMatch[0] : slug;

  // ✅ Fetch single property using the reference
  const { property, loading, error } = useProperty(propertyRef);

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center text-[#6F6F6F] font-[Poppins] text-[20px]">
          Loading property...
        </div>
        <Footer />
      </>
    );
  }

  if (error || !property) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center text-red-500 font-[Poppins] text-[20px]">
          Property not found.
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <HeroSection property={property} />
      <PropertyOverview property={property} />
      <PropertyGallery property={property} />
      <PropertyFeatures property={property} />
      <PropertyLocation property={property} />
      <PropertyAgent />
      <SimilarProperties />
      <Footer />
    </>
  );
};

export default PropertyDetailPage;
