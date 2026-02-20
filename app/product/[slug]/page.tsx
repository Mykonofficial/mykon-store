import { notFound } from "next/navigation";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { products } from "@/lib/products";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import CheckoutButton from "@/components/checkout-button";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return notFound();

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            {/* Product Images Gallery */}
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6">
              {product.images.length > 0 ? (
                <div className="space-y-4">
                  <div className="relative w-full overflow-hidden rounded-2xl bg-[var(--bg)] aspect-square">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  {product.images.length > 1 && (
                    <div className="grid grid-cols-3 gap-3">
                      {product.images.slice(1).map((img, idx) => (
                        <div key={idx} className="relative w-full overflow-hidden rounded-lg bg-[var(--bg)] aspect-square cursor-pointer hover:opacity-75 transition">
                          <Image
                            src={img}
                            alt={`${product.name} view ${idx + 2}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="rounded-2xl bg-[var(--bg)] aspect-square flex items-center justify-center text-[var(--muted)]">
                  No images available
                </div>
              )}
            </div>

            <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6">
              <div className="text-xs font-bold tracking-widest text-[var(--muted)]">MYKON LAB SERIES</div>
              <div className="mt-3 flex items-center gap-3">
                <h1 className="text-3xl font-black tracking-tight">{product.name}</h1>
              </div>
              <div className="mt-4 flex gap-2">
                <Badge className="border-[var(--bio)] text-[var(--bio)]">COMING SOON</Badge>
                <Badge>LIMITED BATCH</Badge>
              </div>

              <p className="mt-6 text-sm text-[var(--muted)]">{product.description}</p>

              <div className="mt-8">
                <div className="text-xs font-bold tracking-widest text-[var(--muted)]">SIZE RANGE</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.sizes.map((s) => (
                    <span
                      key={s}
                      className="rounded-2xl border border-[var(--border)] px-4 py-2 text-sm font-semibold"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-10 rounded-3xl border border-[var(--border)] p-5">
                <div className="text-xs font-bold tracking-widest text-[var(--muted)]">PRESALE</div>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  Presales are opening soon. Add your email to be notified first.
                </p>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <input
                    placeholder="Email address"
                    className="w-full rounded-2xl border border-[var(--border)] bg-transparent px-4 py-3 text-sm outline-none focus:border-[var(--bio)]"
                  />
                  <Button type="button" className="sm:w-44">Notify Me</Button>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <CheckoutButton product={product} />
                <Button variant="outline" className="flex-1">Save</Button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6">
              <div className="text-xs font-bold tracking-widest text-[var(--muted)]">LAB FEATURES</div>
              <ul className="mt-4 space-y-3 text-sm text-[var(--muted)]">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[var(--bio)] shadow-glow" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6">
              <div className="text-xs font-bold tracking-widest text-[var(--muted)]">CARE</div>
              <p className="mt-3 text-sm text-[var(--muted)]">
                Cold wash. Low tumble. Do not bleach. Preserve bio-stitch mapping.
              </p>
            </div>

            <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6">
              <div className="text-xs font-bold tracking-widest text-[var(--muted)]">DROP STATUS</div>
              <p className="mt-3 text-sm text-[var(--muted)]">
                Drop 01 is in final lab testing. Presale will open first, then public release.
              </p>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
