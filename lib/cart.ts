import { Product } from "@/lib/products";

export type CartItem = {
  productId: string;
  name: string;
  price: number;
  size: string;
  qty: number;
};

export function cartKey() {
  return "mykon_cart_v1";
}

export function loadCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  const raw = localStorage.getItem(cartKey());
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function saveCart(items: CartItem[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(cartKey(), JSON.stringify(items));
}

export function addToCart(product: Product, size: string, qty: number = 1) {
  const cart = loadCart();

  const existing = cart.find(
    (x) => x.productId === product.id && x.size === size
  );

  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      productId: product.id,
      name: product.name,
      price: product.price,
      size,
      qty
    });
  }

  saveCart(cart);
  return cart;
}

export function removeFromCart(productId: string, size: string) {
  const cart = loadCart().filter(
    (x) => !(x.productId === productId && x.size === size)
  );
  saveCart(cart);
  return cart;
}

export function updateQty(productId: string, size: string, qty: number) {
  const cart = loadCart();
  const item = cart.find((x) => x.productId === productId && x.size === size);

  if (!item) return cart;

  item.qty = qty;

  // Remove if qty hits 0
  const cleaned = cart.filter((x) => x.qty > 0);
  saveCart(cleaned);
  return cleaned;
}

export function cartTotal(items: CartItem[]) {
  return items.reduce((sum, x) => sum + x.price * x.qty, 0);
}
