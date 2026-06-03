import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import Header from "../components/header";
import HeroSection from "../components/propertydetails/propertyhero";
import PropertyOverview from "../components/propertydetails/propertyoverview";
import PropertyGallery from "../components/propertydetails/propertygallery";
import PropertyFeatures from "../components/propertydetails/propertyfeatures";
import PropertyLocation from "../components/propertydetails/propertylocation";
import PropertyAgent from "../components/propertydetails/propertyagent";
import PropertySimilar from "../components/propertydetails/similarproperties";

import Footer from "../components/footer";
import properties from "../data/properties";
import latestProperties from "../data/latestProperties";
import rentProperties from "../data/rentProperties";

const PropertyDetails = () => {
  const { slug } = useParams();
  const allProperties = [...properties, ...latestProperties, ...rentProperties];

  const property = allProperties.find(
    (item) => item.slug === slug || item.id === Number(slug)
  );

  useEffect(() => {
    if (property) {
      document.title = `${property.title} | Benzies Real Estate`;
    } else {
      document.title = "Property Not Found | Benzies Real Estate";
    }

    return () => {
      document.title = "Benzies Real Estate";
    };
  }, [property]);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-xl text-center">
          <h1 className="text-[32px] font-[Pochaevsk] mb-4">
            Property not found
          </h1>

          <p className="text-[#6F6F6F]">
            The property you are looking for does not exist or the link is
            invalid.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />

      <HeroSection property={property} />

      <PropertyOverview property={property} />

      <PropertyGallery property={property} />

      <PropertyFeatures features={property.features} />

      <PropertyLocation property={property} />

      <PropertyAgent property={property} />

      <PropertySimilar currentPropertyId={property.id} />

      <Footer />
    </>
  );
};

export default PropertyDetails;