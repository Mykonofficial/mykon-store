import { NextResponse } from "next/server";
import Stripe from "stripe";
import { saveOrder } from "@/lib/orders";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2022-11-15"
});

export async function POST(req: Request) {
  const sig = req.headers.get("stripe-signature") || "";
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || "";

  const buf = await req.arrayBuffer();
  const raw = Buffer.from(buf as ArrayBuffer);

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(raw, sig, webhookSecret);
  } catch (err: any) {
    return NextResponse.json({ error: `Webhook signature verification failed: ${err.message}` }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const order = {
      id: session.id,
      amount_total: session.amount_total,
      currency: session.currency,
      customer_details: session.customer_details,
      metadata: session.metadata,
      payment_status: session.payment_status,
      created: session.created
    };

    try {
      await saveOrder(order);
    } catch (e) {
      console.error("Failed to save order:", e);
    }
  }

  return new NextResponse(null, { status: 200 });
}
