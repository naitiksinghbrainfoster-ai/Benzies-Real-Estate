const API_BASE_URL = "http://localhost:5000/api";

// Fallback static data for when API is unavailable
const FALLBACK_PROPERTIES = [
  {
    id: 1,
    slug: "luxury-villa-with-panoramic-sea-views",
    image: "https://cdn.resales-online.com/public/us8n5yv4fp/properties/64ba89675e5b11f182490652962539d5/w400/1-8feb9a13440344d11ba504bcb1dd499c.jpg",
    gallery: [
      "https://cdn.resales-online.com/public/us8n5yv4fp/properties/64ba89675e5b11f182490652962539d5/w400/1-8feb9a13440344d11ba504bcb1dd499c.jpg",
      "https://cdn.resales-online.com/public/us8n5yv4fp/properties/64ba89675e5b11f182490652962539d5/w400/2-0b399daebcdd6827eaba8c944d7c5b78.jpg",
      "https://cdn.resales-online.com/public/us8n5yv4fp/properties/64ba89675e5b11f182490652962539d5/w400/3-9044ff3015df52bb84e13bfc318443ab.jpg",
    ],
    price: "€2,400,000",
    priceFull: "€2,400,000",
    title: "Luxury Villa With Panoramic Sea Views",
    location: "Marbella, Costa del Sol",
    bedrooms: 5,
    bathrooms: 4,
    area: "450m²",
    terrace: "100m²",
    garage: 2,
    description: "Located in one of Marbella's most prestigious areas, this exceptional villa combines modern architecture, breathtaking sea views, luxury interiors, and premium amenities. Designed for international buyers seeking lifestyle and investment opportunities on the Costa del Sol.",
    reference: "R5400709",
    features: ["Private Pool", "Sea View", "Smart Home", "Golf Nearby", "Investment Potential", "Cinema Room", "Private Gym", "Security System"],
    mapQuery: "Marbella, Costa del Sol, Spain",
  },
  {
    id: 2,
    slug: "exclusive-investment-apartment-in-spain",
    image: "https://cdn.resales-online.com/public/us8n5yv4fp/properties/64ba89675e5b11f182490652962539d5/w400/2-0b399daebcdd6827eaba8c944d7c5b78.jpg",
    gallery: [
      "https://cdn.resales-online.com/public/us8n5yv4fp/properties/64ba89675e5b11f182490652962539d5/w400/2-0b399daebcdd6827eaba8c944d7c5b78.jpg",
      "https://cdn.resales-online.com/public/us8n5yv4fp/properties/64ba89675e5b11f182490652962539d5/w400/1-8feb9a13440344d11ba504bcb1dd499c.jpg",
      "https://cdn.resales-online.com/public/us8n5yv4fp/properties/64ba89675e5b11f182490652962539d5/w400/3-9044ff3015df52bb84e13bfc318443ab.jpg",
    ],
    price: "€4,800,000",
    priceFull: "€4,800,000",
    title: "Exclusive Investment Apartment in Spain",
    location: "Puerto Banús, Marbella",
    bedrooms: 3,
    bathrooms: 3,
    area: "280m²",
    terrace: "50m²",
    garage: 1,
    description: "A rare luxury apartment with a stunning marina view, prime rental potential, and exceptional finishes. Ideal for investors and homeowners looking for an elegant property in Puerto Banús.",
    reference: "R5400710",
    features: ["Marina View", "Private Terrace", "Gated Community", "Concierge Service", "High Rental Demand", "Smart Home", "Spa Access", "24/7 Security"],
    mapQuery: "Puerto Banús, Marbella, Spain",
  },
  {
    id: 3,
    slug: "modern-luxury-residence-golf-resorts",
    image: "https://cdn.resales-online.com/public/us8n5yv4fp/properties/64ba89675e5b11f182490652962539d5/w400/3-9044ff3015df52bb84e13bfc318443ab.jpg",
    gallery: [
      "https://cdn.resales-online.com/public/us8n5yv4fp/properties/64ba89675e5b11f182490652962539d5/w400/3-9044ff3015df52bb84e13bfc318443ab.jpg",
      "https://cdn.resales-online.com/public/us8n5yv4fp/properties/64ba89675e5b11f182490652962539d5/w400/1-8feb9a13440344d11ba504bcb1dd499c.jpg",
      "https://cdn.resales-online.com/public/us8n5yv4fp/properties/64ba89675e5b11f182490652962539d5/w400/2-0b399daebcdd6827eaba8c944d7c5b78.jpg",
    ],
    price: "€6,500,000",
    priceFull: "€6,500,000",
    title: "Modern Luxury Residence Golf Resorts",
    location: "Benahavís, Costa del Sol",
    bedrooms: 6,
    bathrooms: 5,
    area: "620m²",
    terrace: "150m²",
    garage: 3,
    description: "A modern luxury residence surrounded by championship golf courses and natural beauty. This property offers exceptional privacy, spacious interiors, and world-class resort amenities.",
    reference: "R5400711",
    features: ["Golf Views", "Infinity Pool", "Home Cinema", "Wine Cellar", "Gym & Spa", "Indoor/Outdoor Living", "Guest Apartment", "Private Elevator"],
    mapQuery: "Benahavís, Costa del Sol, Spain",
  },
];

export const fetchProperties = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/properties`);
    
    if (!response.ok) {
      console.warn("API unavailable, using fallback data");
      return FALLBACK_PROPERTIES;
    }
    
    const data = await response.json();
    
    // Check for API error response
    if (data.error) {
      console.warn("API error detected, using fallback data:", data.error);
      return FALLBACK_PROPERTIES;
    }
    
    // Transform API response to match component format
    if (data.Property && Array.isArray(data.Property)) {
      return data.Property.map((property, index) => ({
        id: property.Reference || `prop-${index}`,
        slug: property.Reference?.toLowerCase().replace(/\s+/g, "-") || `prop-${index}`,
        image: property.Pictures?.Picture?.[0]?.PictureURL || "",
        price: `€${parseInt(property.Price).toLocaleString()}`,
        priceFull: `€${parseInt(property.Price).toLocaleString()}`,
        title: property.PropertyType?.NameType || "Property",
        location: `${property.Location}, ${property.Area}`,
        bedrooms: parseInt(property.Bedrooms) || 0,
        bathrooms: parseInt(property.Bathrooms) || 0,
        area: `${property.Built}m²`,
        garage: 1,
        description: property.Description || "",
        reference: property.Reference,
        features: property.PropertyFeatures?.Category?.flatMap(cat => cat.Value) || [],
      }));
    }
    
    return FALLBACK_PROPERTIES;
  } catch (error) {
    console.warn("Failed to fetch properties, using fallback data:", error.message);
    return FALLBACK_PROPERTIES;
  }
};

export const fetchPropertyBySlug = async (slug) => {
  try {
    const response = await fetch(`${API_BASE_URL}/properties`);
    
    if (!response.ok) {
      console.warn("API unavailable, using fallback data");
      return FALLBACK_PROPERTIES.find(p => p.slug === slug || p.reference === slug);
    }
    
    const data = await response.json();
    
    // Check for API error response
    if (data.error) {
      console.warn("API error detected, using fallback data:", data.error);
      return FALLBACK_PROPERTIES.find(p => p.slug === slug || p.reference === slug);
    }
    
    if (data.Property && Array.isArray(data.Property)) {
      const properties = data.Property.map((property, index) => ({
        id: property.Reference || `prop-${index}`,
        slug: property.Reference?.toLowerCase().replace(/\s+/g, "-") || `prop-${index}`,
        image: property.Pictures?.Picture?.[0]?.PictureURL || "",
        gallery: property.Pictures?.Picture?.map(pic => pic.PictureURL) || [],
        price: `€${parseInt(property.Price).toLocaleString()}`,
        priceFull: `€${parseInt(property.Price).toLocaleString()}`,
        title: property.PropertyType?.NameType || "Property",
        location: `${property.Location}, ${property.Area}`,
        bedrooms: parseInt(property.Bedrooms) || 0,
        bathrooms: parseInt(property.Bathrooms) || 0,
        area: `${property.Built}m²`,
        terrace: `${property.Terrace}m²`,
        garage: 1,
        description: property.Description || "",
        reference: property.Reference,
        features: property.PropertyFeatures?.Category?.flatMap(cat => cat.Value) || [],
        mapQuery: `${property.Location}, ${property.Area}, ${property.Country}`,
      }));
      
      return properties.find(p => p.slug === slug || p.reference === slug);
    }
    
    return FALLBACK_PROPERTIES.find(p => p.slug === slug || p.reference === slug);
  } catch (error) {
    console.warn("Failed to fetch property, using fallback data:", error.message);
    return FALLBACK_PROPERTIES.find(p => p.slug === slug || p.reference === slug);
  }
};
