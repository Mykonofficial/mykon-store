"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/cart-context";

export function SiteHeader() {
  const { theme, setTheme } = useTheme();
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="group">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-black tracking-[0.35em]">MYKON</span>
            <span className="text-xs font-semibold text-[var(--muted)]">DROP 01</span>
          </div>
          <div className="mt-1 h-[2px] w-0 bg-[var(--bio)] transition-all duration-300 group-hover:w-full" />
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
          <Link className="hover:text-[var(--bio)]" href="/shop">Shop</Link>
          <Link className="hover:text-[var(--bio)]" href="/about">Lab Story</Link>
          <Link className="hover:text-[var(--bio)]" href="/contact">Contact</Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-2xl"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </Button>

          <Link href="/cart" className="relative">
            <Button variant="outline" className="gap-2 rounded-2xl">
              <ShoppingBag size={18} />
              <span className="hidden sm:inline">Cart</span>
            </Button>
            {count > 0 && (
              <div className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--bio)] text-xs font-bold">
                {count}
              </div>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
