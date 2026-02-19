import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="mx-auto max-w-3xl px-4 py-14">
        <h1 className="text-4xl font-black tracking-tight">CONTACT</h1>
        <p className="mt-4 text-sm text-[var(--muted)]">For press, collabs, or lab inquiries. Drop a message.</p>

        <div className="mt-10 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6">
          <form className="space-y-4">
            <input
              placeholder="Name"
              className="w-full rounded-2xl border border-[var(--border)] bg-transparent px-4 py-3 text-sm outline-none focus:border-[var(--bio)]"
            />
            <input
              placeholder="Email"
              className="w-full rounded-2xl border border-[var(--border)] bg-transparent px-4 py-3 text-sm outline-none focus:border-[var(--bio)]"
            />
            <textarea
              placeholder="Message"
              rows={5}
              className="w-full rounded-2xl border border-[var(--border)] bg-transparent px-4 py-3 text-sm outline-none focus:border-[var(--bio)]"
            />

            <Button type="button" className="w-full">Send Message</Button>
          </form>

          <div className="mt-8 border-t border-[var(--border)] pt-6 text-sm text-[var(--muted)]">
            Instagram: <span className="text-[var(--bio)] font-semibold">@mykonclothing</span>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
