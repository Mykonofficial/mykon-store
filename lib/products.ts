export type Product = {
  id: string;
  slug: string;
  name: string;
  status: "coming_soon" | "available";
  price: number;
  description: string;
  features: string[];
  sizes: string[];
  images: string[];
  // Optional: set to a Stripe Price ID (e.g. "price_abc123") to use pre-created prices
  priceId?: string;
};

export const products: Product[] = [
  {
    id: "drop01-jacket",
    slug: "drop-01-jacket",
    name: "DROP 01 — BIOTECH HYBRID JACKET",
    status: "coming_soon",
    price: 280,
    description:
      "A biotech-luxury hybrid jacket engineered for evolution. Precision cut, lab-grade minimalism, and mycelium-inspired linework with adaptive bio-stitch mapping.",
    features: [
      "Spore-black engineered hybrid fabric",
      "Bio-luminescent MYKON chest embroidery",
      "Hex-node logo mapping",
      "Adaptive bio-stitch seams",
      "Tactical utility pockets"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: ["/images/mykon-jacket-front.jpg"]
    // priceId: "price_XXXXXXXXXXXXXXXX" // optional: add your Stripe Price ID here
  },
  {
    id: "drop02-pants",
    slug: "drop-02-cargo-pants",
    name: "DROP 02 — ENGINEERED CARGO PANTS",
    status: "coming_soon",
    price: 220,
    description:
      "Lab-engineered cargo pants with precision utility. Combines biotech aesthetics with functional cargo construction.",
    features: [
      "Spore-grey engineered fabric with black panels",
      "Bio-stitch reinforced seams",
      "Multi-pocket tactical construction",
      "Hex-node utility webbing",
      "Mycelia-inspired pocket mapping"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: ["/images/mykon-pants-front.jpg"]
    // priceId: "price_XXXXXXXXXXXXXXXX" // optional: add your Stripe Price ID here
  }
];
