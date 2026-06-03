import Property1 from "../assets/img/homeimg/propertylistings1.png";
import Property2 from "../assets/img/homeimg/propertylistings2.png";
import Property3 from "../assets/img/homeimg/propertylistings3.png";

const rentProperties = [
  {
    id: 101,
    slug: "marbella-sea-view-luxury-rental",
    image: Property1,
    price: "€2,400",
    priceFull: "€2,400 / month",
    title: "Marbella Sea View Luxury Rental",
    location: "Marbella, Costa del Sol",
    bedrooms: 3,
    bathrooms: 3,
    area: "210m²",
    garage: 1,
    description:
      "A luxury rental apartment with panoramic sea views, premium finishes, and access to exclusive community amenities in Marbella.",
    mapQuery: "Marbella, Spain",
    features: [
      "Sea View",
      "Private Terrace",
      "Gym Access",
      "Smart Home",
    ],
  },
  {
    id: 102,
    slug: "puerto-banus-investment-rental-apartment",
    image: Property2,
    price: "€4,800",
    priceFull: "€4,800 / month",
    title: "Puerto Banús Investment Rental Apartment",
    location: "Puerto Banús, Marbella",
    bedrooms: 4,
    bathrooms: 4,
    area: "320m²",
    garage: 2,
    description:
      "An elegant, high-yield rental apartment steps from the marina, designed for investors and luxury short-term stays.",
    mapQuery: "Puerto Banús, Marbella, Spain",
    features: [
      "Marina View",
      "Concierge Service",
      "Private Gym",
      "High Rental Demand",
    ],
  },
  {
    id: 103,
    slug: "benahavis-modern-golf-resort-rental",
    image: Property3,
    price: "€6,500",
    priceFull: "€6,500 / month",
    title: "Benahavís Modern Golf Resort Rental",
    location: "Benahavís, Costa del Sol",
    bedrooms: 5,
    bathrooms: 5,
    area: "520m²",
    garage: 2,
    description:
      "A modern rental villa close to championship golf courses with spacious living areas, luxury furnishings, and resort-style facilities.",
    mapQuery: "Benahavís, Spain",
    features: [
      "Golf Views",
      "Private Pool",
      "Home Cinema",
      "Spa Access",
    ],
  },
];

export default rentProperties;
