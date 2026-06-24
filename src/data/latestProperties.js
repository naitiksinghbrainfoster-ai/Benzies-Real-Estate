import Property1 from "../assets/img/homeimg/propertylistings1.png";
import Property2 from "../assets/img/homeimg/propertylistings2.png";
import Property3 from "../assets/img/homeimg/propertylistings3.png";

const latestProperties = [
  {
    id: 1,
    slug: "luxury-villa-with-panoramic-sea-views",
    image: Property1,
    price: "€2,400",
    priceFull: "€2,400,000",
    title: "Luxury Villa With Panoramic Sea Views",
    location: "Marbella, Costa del Sol",
    bedrooms: 5,
    bathrooms: 4,
    area: "450m²",
    garage: 2,
    description:
      "Located in one of Marbella’s most prestigious areas, this exceptional villa combines modern architecture, breathtaking sea views, luxury interiors, and premium amenities.",
    mapQuery: "Marbella, Spain",
  },
  {
    id: 2,
    slug: "exclusive-investment-apartment-in-spain",
    image: Property2,
    price: "€4,800",
    priceFull: "€4,800,000",
    title: "Exclusive Investment Apartment in Spain",
    location: "Puerto Banús, Marbella",
    bedrooms: 3,
    bathrooms: 3,
    area: "280m²",
    garage: 1,
    description:
      "A rare luxury apartment with a stunning marina view, prime rental potential, and exceptional finishes. Ideal for investors and homeowners looking for an elegant property in Puerto Banús.",
    mapQuery: "Puerto Banús, Marbella, Spain",
  },
  {
    id: 3,
    slug: "modern-luxury-residence-near-resorts",
    image: Property3,
    price: "€6,500",
    priceFull: "€6,500,000",
    title: "Modern Luxury Residence Near Resorts",
    location: "Benahavís, Costa del Sol",
    bedrooms: 6,
    bathrooms: 5,
    area: "620m²",
    garage: 3,
    description:
      "A modern luxury residence surrounded by championship golf courses and natural beauty. This property offers exceptional privacy, spacious interiors, and world-class resort amenities.",
    mapQuery: "Benahavís, Spain",
  },
];

export default latestProperties;