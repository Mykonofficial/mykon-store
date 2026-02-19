import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Badge } from "@/components/ui/badge";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 py-14">
        <Badge className="border-[var(--bio)] text-[var(--bio)]">THE LAB STORY</Badge>
        <h1 className="mt-6 text-4xl font-black tracking-tight md:text-5xl">WHY MYKON EXISTS</h1>

        <p className="mt-6 max-w-3xl text-sm leading-7 text-[var(--muted)]">
          MYKON is a biotech streetwear experiment inspired by mycelium growth networks—organic intelligence built beneath the surface.
          We translate that system into engineered apparel: minimal silhouettes, aggressive structure, and lab-clean execution.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "BIO-INSPIRED DESIGN",
              body: "Mycelium network patterns, node mapping, and organic growth geometry—translated into wearable structure."
            },
            {
              title: "PREMIUM ENGINEERING",
              body: "Minimal but aggressive cuts. Technical construction. Clean, futuristic finishing."
            },
            {
              title: "LIMITED CULTIVATION",
              body: "Small batches only. Drops are controlled. Presale access is priority."
            }
          ].map((x) => (
            <div
              key={x.title}
              className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6"
            >
              <div className="text-xs font-bold tracking-widest text-[var(--bio)]">{x.title}</div>
              <p className="mt-4 text-sm text-[var(--muted)]">{x.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8">
          <div className="text-xs font-bold tracking-widest text-[var(--muted)]">CORE STATEMENT</div>
          <p className="mt-4 text-lg font-semibold leading-8">GROWN. NOT MADE.</p>
          <p className="mt-3 text-sm text-[var(--muted)]">Every piece is a lab-tested artifact. MYKON is not a brand. It’s a culture in development.</p>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
