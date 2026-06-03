import React from "react";
import { useParams, Navigate } from "react-router-dom";

import Header from "../components/header";

import LatestHero from "../components/latestproperties/latesthero";
import LatestOverview from "../components/latestproperties/latestoverview";
import LatestGallery from "../components/latestproperties/latestgallery";
import LatestFeatures from "../components/latestproperties/latestfeatures";
import LatestLocation from "../components/latestproperties/latestlocation";
import LatestAgent from "../components/latestproperties/latestagent";

import Footer from "../components/footer";
import latestPropertiesData from "../data/latestProperties";

const LatestProperties = () => {
  const { slug } = useParams();
  const property = latestPropertiesData.find((item) => item.slug === slug);

  if (!property) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Header />

      <LatestHero property={property} />

      <LatestOverview property={property} />

      <LatestGallery property={property} />

      <LatestFeatures property={property} />

      <LatestLocation property={property} />

      <LatestAgent property={property} />

      <Footer />
    </>
  );
};

export default LatestProperties;