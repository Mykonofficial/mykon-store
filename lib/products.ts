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
    id: "drop01-sweatsuit",
    slug: "drop-01-sweatsuit",
    name: "DROP 01 — BIOSTITCH SWEATSUIT",
    status: "coming_soon",
    price: 180,
    description:
      "A biotech-luxury sweatsuit engineered for evolution. Precision cut, lab-grade minimalism, and mycelium-inspired linework.",
    features: [
      "Spore-black engineered fabric",
      "Subtle MYKON micro-text barcode tag",
      "Hex-node logo embroidery",
      "Bio-stitch seam mapping",
      "Cargo utility construction"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: ["/products/drop01-front.png", "/products/drop01-back.png"]
    // priceId: "price_XXXXXXXXXXXXXXXX" // optional: add your Stripe Price ID here
  }
];
