import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/hero";
import Link from "next/link";
import { products } from "@/lib/products";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  const product = products[0];

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <Hero />

      <main className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black tracking-tight md:text-3xl">DROP 01</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Lab-built essentials. Minimal. Aggressive. Premium engineered apparel.
            </p>
          </div>
          <Link className="text-sm font-semibold text-[var(--bio)] hover:opacity-80" href="/shop">
            View All
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Link
            href={`/product/${product.slug}`}
            className="group rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm transition hover:shadow-glow"
          >
            <div className="flex items-center justify-between">
              <div className="text-sm font-bold tracking-widest text-[var(--muted)]">MYKON LAB SERIES</div>
              <Badge className="text-[var(--bio)] border-[var(--bio)]">COMING SOON</Badge>
            </div>

            <div className="mt-6">
              <div className="text-2xl font-black tracking-tight">{product.name}</div>
              <p className="mt-2 text-sm text-[var(--muted)]">{product.description}</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {product.features.slice(0, 3).map((f) => (
                <span
                  key={f}
                  className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]"
                >
                  {f}
                </span>
              ))}
            </div>

            <div className="mt-8 text-sm font-semibold text-[var(--bio)]">Enter Product Page →</div>
          </Link>

          <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6">
            <div className="text-sm font-bold tracking-widest text-[var(--muted)]">LAB SPEC</div>
            <div className="mt-5 space-y-4 text-sm text-[var(--muted)]">
              <div className="flex justify-between">
                <span>Material</span>
                <span className="font-semibold text-[var(--text)]">Engineered Cotton Blend</span>
              </div>
              <div className="flex justify-between">
                <span>Colorway</span>
                <span className="font-semibold text-[var(--text)]">Spore Black</span>
              </div>
              <div className="flex justify-between">
                <span>Stitch Mapping</span>
                <span className="font-semibold text-[var(--text)]">BioSeam V1</span>
              </div>
              <div className="flex justify-between">
                <span>Drop Status</span>
                <span className="font-semibold text-[var(--bio)]">COMING SOON</span>
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-[var(--border)] p-4">
              <div className="text-xs font-bold tracking-widest text-[var(--muted)]">SYSTEM MESSAGE</div>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Presale access will be sent to registered emails first. Public release follows.
              </p>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
