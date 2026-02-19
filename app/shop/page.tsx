import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import Link from "next/link";
import { products } from "@/lib/products";
import { Badge } from "@/components/ui/badge";

export default function ShopPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-black tracking-tight">SHOP</h1>
          <p className="max-w-2xl text-sm text-[var(--muted)]">
            MYKON apparel is engineered in limited batches. Presale access will open soon.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {products.map((p) => (
            <Link
              key={p.id}
              href={`/product/${p.slug}`}
              className="group rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 transition hover:shadow-glow"
            >
              <div className="flex items-center justify-between">
                <div className="text-xs font-bold tracking-widest text-[var(--muted)]">DROP 01</div>
                <Badge className="border-[var(--bio)] text-[var(--bio)]">COMING SOON</Badge>
              </div>

              <div className="mt-6 text-xl font-black tracking-tight">{p.name}</div>
              <p className="mt-2 text-sm text-[var(--muted)]">{p.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {p.features.slice(0, 2).map((f) => (
                  <span
                    key={f}
                    className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]"
                  >
                    {f}
                  </span>
                ))}
              </div>

              <div className="mt-8 text-sm font-semibold text-[var(--bio)]">View Details →</div>
            </Link>
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
