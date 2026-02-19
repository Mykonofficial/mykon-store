import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <div className="text-lg font-black tracking-[0.35em]">MYKON</div>
          <p className="mt-3 max-w-sm text-sm text-[var(--muted)]">
            Futuristic biotech streetwear inspired by mycelium networks.
            Engineered for evolution.
          </p>
        </div>

        <div className="text-sm">
          <div className="font-bold">Navigation</div>
          <div className="mt-3 grid gap-2 text-[var(--muted)]">
            <Link className="hover:text-[var(--bio)]" href="/shop">Shop</Link>
            <Link className="hover:text-[var(--bio)]" href="/about">Lab Story</Link>
            <Link className="hover:text-[var(--bio)]" href="/contact">Contact</Link>
            <Link className="hover:text-[var(--bio)]" href="/cart">Cart</Link>
          </div>
        </div>

        <div className="text-sm">
          <div className="font-bold">Social</div>
          <div className="mt-3 grid gap-2 text-[var(--muted)]">
            <a className="hover:text-[var(--bio)]" href="https://instagram.com/mykonclothing" target="_blank" rel="noreferrer">
              Instagram: @mykonclothing
            </a>
            <p className="text-xs text-[var(--muted)]">mykonofficial.com (placeholder)</p>
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--border)] py-6 text-center text-xs text-[var(--muted)]">
        © {new Date().getFullYear()} MYKON. GROWN. NOT MADE.
      </div>
    </footer>
  );
}
