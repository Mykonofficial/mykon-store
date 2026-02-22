import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import PresaleForm from "./presale-form";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--border)]">
      <div className="absolute inset-0 opacity-60 dark:opacity-80 bg-haze" />
      <div className="absolute inset-0 bg-grid bg-[length:60px_60px]" />

      <div className="relative mx-auto max-w-6xl px-4 py-20">
        <div className="max-w-2xl">
          <Badge className="border-[var(--bio)] text-[var(--bio)]">DROP 01 • COMING SOON</Badge>

          <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight md:text-6xl">
            BIOENGINEERED
            <span className="block text-[var(--bio)]">STREETWEAR</span>
          </h1>

          <p className="mt-5 text-base text-[var(--muted)] md:text-lg">
            MYKON is futuristic biotech fashion inspired by mycelium growth networks and lab-grade minimalism.
            <span className="mt-2 block font-semibold text-[var(--text)]">GROWN. NOT MADE.</span>
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/shop">
              <Button className="shadow-glow">View Drop 01</Button>
            </Link>
            <Link href="/about">
              <Button variant="outline">The Lab Story</Button>
            </Link>
          </div>

          <div className="mt-10 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-5">
            <div className="text-xs font-bold tracking-widest text-[var(--muted)]">PRESALE NOTICE</div>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Presales are opening soon. Join the list to get early access before the public drop.
            </p>
            <PresaleForm />
          </div>
        </div>
      </div>
    </section>
  );
}
