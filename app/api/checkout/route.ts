import { NextResponse } from "next/server";
import Stripe from "stripe";
import { products } from "@/lib/products";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2022-11-15"
});

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const { productId, size, qty = 1 } = body as { productId?: string; size?: string; qty?: number };

  if (!productId) {
    return NextResponse.json({ error: "Missing productId" }, { status: 400 });
  }

  const product = products.find((p) => p.id === productId);
  if (!product) return NextResponse.json({ error: "Product not found" }, { status: 404 });

  try {
    // Prefer pre-created Stripe Price ID when available for the product.
    const line_items = product.priceId
      ? [{ price: product.priceId, quantity: qty }]
      : [
          {
            price_data: {
              currency: "usd",
              product_data: { name: product.name, description: product.description },
              unit_amount: Math.round(product.price * 100)
            },
            quantity: qty
          }
        ];

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items,
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/?canceled=true`
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || String(err) }, { status: 500 });
  }
}
