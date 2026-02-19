"use client";

import { useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { useCart } from "@/components/cart-context";
import { Button } from "@/components/ui/button";

export default function CartPage() {
  const { items, total, update, remove, clear } = useCart();
  const [editing, setEditing] = useState(false);

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="mx-auto max-w-4xl px-4 py-14">
        <h1 className="text-3xl font-black">Your Cart</h1>

        {items.length === 0 ? (
          <div className="mt-8 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 text-[var(--muted)]">
            Your cart is empty. Join the presale to reserve items.
          </div>
        ) : (
          <div className="mt-8 space-y-4">
            {items.map((it) => (
              <div key={it.productId + it.size} className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold">{it.name}</div>
                    <div className="text-sm text-[var(--muted)]">Size: {it.size}</div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="text-sm font-semibold">${it.price}</div>
                    <div className="flex items-center gap-2">
                      <Button onClick={() => update(it.productId, it.size, Math.max(0, it.qty - 1))}>-</Button>
                      <div className="px-3">{it.qty}</div>
                      <Button onClick={() => update(it.productId, it.size, it.qty + 1)}>+</Button>
                    </div>
                    <Button variant="outline" onClick={() => remove(it.productId, it.size)}>Remove</Button>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4">
              <div>
                <div className="text-sm text-[var(--muted)]">Subtotal</div>
                <div className="text-xl font-bold">${total}</div>
              </div>

              <div className="flex items-center gap-3">
                <Button variant="ghost" onClick={() => setEditing((s) => !s)}>
                  {editing ? "Done" : "Edit"}
                </Button>
                <Button variant="outline" onClick={() => clear()}>Clear Cart</Button>
                <Button disabled className="shadow-glow">Checkout</Button>
              </div>
            </div>
          </div>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}
