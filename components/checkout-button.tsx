"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/products";

export default function CheckoutButton({ product }: { product: Product }) {
  const [loading, setLoading] = useState(false);

  async function handleCheckout() {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: product.id, size: product.sizes?.[0] || "M", qty: 1 })
      });
      const data = await res.json();
      if (data?.url) {
        window.location.href = data.url;
      } else {
        alert(data?.error || "Checkout failed");
        setLoading(false);
      }
    } catch (e) {
      console.error(e);
      alert("Network error during checkout");
      setLoading(false);
    }
  }

  return (
    <Button onClick={handleCheckout} disabled={loading} className="shadow-glow">
      {loading ? "Redirecting..." : "Buy Now"}
    </Button>
  );
}
