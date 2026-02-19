"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Product } from "@/lib/products";
import {
  CartItem,
  addToCart as addToCartFn,
  loadCart,
  removeFromCart as removeFn,
  updateQty as updateFn,
  cartTotal
} from "@/lib/cart";

type CartContextType = {
  items: CartItem[];
  total: number;
  count: number;
  add: (product: Product, size: string, qty?: number) => void;
  remove: (productId: string, size: string) => void;
  update: (productId: string, size: string, qty: number) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    setItems(loadCart());
  }, []);

  const total = useMemo(() => cartTotal(items), [items]);
  const count = useMemo(() => items.reduce((sum, x) => sum + x.qty, 0), [items]);

  function add(product: Product, size: string, qty: number = 1) {
    const next = addToCartFn(product, size, qty);
    setItems([...next]);
  }

  function remove(productId: string, size: string) {
    const next = removeFn(productId, size);
    setItems([...next]);
  }

  function update(productId: string, size: string, qty: number) {
    const next = updateFn(productId, size, qty);
    setItems([...next]);
  }

  function clear() {
    localStorage.removeItem("mykon_cart_v1");
    setItems([]);
  }

  return (
    <CartContext.Provider value={{ items, total, count, add, remove, update, clear }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
