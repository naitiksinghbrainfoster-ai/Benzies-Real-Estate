import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import { useProperties } from "../hooks/useProperties";

const normalizeLocation = (slug) =>
  slug
    .toLowerCase()
    .replace(/-/g, " ")
    .normalize("NFD")

    .replace(/[\u0300-\u036f]/g, "")
    .trim();

const DestinationPage = () => {
  const { location } = useParams();
  const { properties, loading, error } = useProperties();

  const locationName = useMemo(() => {
    if (!location) return "";
    return location
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ");
  }, [location]);

  const normalizedQuery = normalizeLocation(location || "");

  const property = useMemo(() => {
    if (!properties || !properties.length) return null;

    return properties.find((item) => {
      const locationValue = (item.Location || item.Area || "")
        .toString()
        .toLowerCase();
      const areaValue = (item.Area || "")
        .toString()
        .toLowerCase();
      const query = normalizedQuery.toLowerCase();

      return (
        locationValue.includes(query) ||
        areaValue.includes(query) ||
        item.Reference?.toLowerCase() === query
      );
    });
  }, [properties, normalizedQuery]);

  const imageUrl = property?.Pictures?.Picture?.[0]?.PictureURL || "";
  const price = property?.Price ? `€${Number(property.Price).toLocaleString()}` : "N/A";

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#F5F5F5] pt-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pb-20">
          <div className="mb-8">
            <Link
              to="/"
              className="inline-block rounded-full border border-[#1F1F1F] px-5 py-2 text-sm font-semibold text-[#1F1F1F] transition hover:bg-[#1F1F1F] hover:text-white"
            >
              Back to Home
            </Link>
          </div>

          <div className="bg-white rounded-[20px] shadow-[0_12px_45px_rgba(0,0,0,0.08)] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8">
              <div className="relative">
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt={locationName}
                    className="w-full h-[420px] object-cover"
                  />
                ) : (
                  <div className="flex h-[420px] items-center justify-center bg-[#F2F2F2] text-[#6B6B6B]">
                    Image not available
                  </div>
                )}
              </div>

              <div className="p-8 sm:p-10">
                <div className="mb-5">
                  <span className="inline-block rounded-full bg-[#F5F5F5] px-4 py-2 text-sm font-medium text-[#4A4A4A]">
                    Destination
                  </span>
                </div>

                <h1 className="text-[32px] sm:text-[40px] leading-tight font-[Pochaevsk] text-[#1F1F1F] mb-5">
                  {locationName}
                </h1>

                <p className="text-[#6B6B6B] text-[16px] leading-[30px] sm:text-[18px] sm:leading-[32px] mb-8">
                  Discover the latest property listing for {locationName} from our CRM.
                  This page shows the property data available for this destination.
                </p>

                {loading && (
                  <div className="text-[#6B6B6B] text-[18px]">Loading property details...</div>
                )}

                {error && (
                  <div className="text-red-500 text-[18px]">Unable to load CRM data. Please try again later.</div>
                )}

                {!loading && !error && !property && (
                  <div className="text-[#6B6B6B] text-[18px]">
                    No CRM property found for {locationName}. Please select another destination.
                  </div>
                )}

                {!loading && !error && property && (
                  <>
                    <div className="grid grid-cols-1 gap-5 mb-8 sm:grid-cols-2">
                      <div className="rounded-[14px] bg-[#F7F7F7] p-5">
                        <p className="text-xs uppercase tracking-[0.22em] text-[#6B6B6B] mb-2">Reference</p>
                        <p className="text-[22px] font-semibold text-[#1F1F1F]">{property.Reference}</p>
                      </div>
                      <div className="rounded-[14px] bg-[#F7F7F7] p-5">
                        <p className="text-xs uppercase tracking-[0.22em] text-[#6B6B6B] mb-2">Status</p>
                        <p className="text-[22px] font-semibold text-[#1F1F1F]">{property.Status?.en || property.Status?.system || "Available"}</p>
                      </div>
                    </div>

                    <div className="mb-8 grid gap-5 sm:grid-cols-2">
                      <div className="rounded-[14px] bg-[#F7F7F7] p-6">
                        <p className="text-sm text-[#6B6B6B]">Price</p>
                        <p className="mt-3 text-[28px] font-semibold text-[#1F1F1F]">{price}</p>
                      </div>
                      <div className="rounded-[14px] bg-[#F7F7F7] p-6">
                        <p className="text-sm text-[#6B6B6B]">Type</p>
                        <p className="mt-3 text-[22px] font-semibold text-[#1F1F1F]">{property.PropertyType?.NameType}</p>
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
                      <div className="rounded-[14px] bg-[#F7F7F7] p-5 text-center">
                        <p className="text-sm text-[#6B6B6B]">Bedrooms</p>
                        <p className="mt-3 text-[22px] font-semibold text-[#1F1F1F]">{property.Bedrooms || "-"}</p>
                      </div>
                      <div className="rounded-[14px] bg-[#F7F7F7] p-5 text-center">
                        <p className="text-sm text-[#6B6B6B]">Bathrooms</p>
                        <p className="mt-3 text-[22px] font-semibold text-[#1F1F1F]">{property.Bathrooms || "-"}</p>
                      </div>
                      <div className="rounded-[14px] bg-[#F7F7F7] p-5 text-center">
                        <p className="text-sm text-[#6B6B6B]">Built</p>
                        <p className="mt-3 text-[22px] font-semibold text-[#1F1F1F]">{property.Built ? `${property.Built} m²` : "-"}</p>
                      </div>
                      <div className="rounded-[14px] bg-[#F7F7F7] p-5 text-center">
                        <p className="text-sm text-[#6B6B6B]">Terrace</p>
                        <p className="mt-3 text-[22px] font-semibold text-[#1F1F1F]">{property.Terrace ? `${property.Terrace} m²` : "-"}</p>
                      </div>
                    </div>

                    <div className="prose prose-lg max-w-none text-[#3B3B3B] mb-8">
                      <h2 className="text-[26px] font-semibold text-[#1F1F1F]">Property Description</h2>
                      <p>{property.Description?.split("\r\n\r\n").join("\n\n")}</p>
                    </div>

                    {property.PropertyFeatures?.Category?.length > 0 && (
                      <div className="mb-8">
                        <h3 className="text-[24px] font-semibold text-[#1F1F1F] mb-5">Features</h3>
                        <div className="grid gap-3 sm:grid-cols-2">
                          {property.PropertyFeatures.Category.map((category) => (
                            <div key={category.Type} className="rounded-[14px] bg-[#F7F7F7] p-5">
                              <p className="text-sm text-[#6B6B6B] mb-2">{category.Type}</p>
                              <p className="text-sm text-[#1F1F1F]">{category.Value.join(", ")}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-4">
                      <Link
                        to={`/property/${property.Reference}`}
                        className="inline-flex items-center justify-center rounded-full bg-[#1F1F1F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#333333]"
                      >
                        View Full Property Page
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default DestinationPage;
