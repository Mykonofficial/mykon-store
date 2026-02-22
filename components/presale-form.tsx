"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function PresaleForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage("");
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/presale", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to join presale");
      }

      setMessage("✅ Successfully joined! Check your email soon.");
      setEmail("");
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="mt-4 flex flex-col gap-3 sm:flex-row" onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="w-full rounded-2xl border border-[var(--border)] bg-transparent px-4 py-3 text-sm outline-none focus:border-[var(--bio)]"
        required
      />
      <Button type="submit" disabled={loading} className="sm:w-48">
        {loading ? "Joining..." : "Join Presale"}
      </Button>
      {message && <p className="text-xs text-green-500 mt-2">{message}</p>}
      {error && <p className="text-xs text-red-500 mt-2">{error}</p>}
    </form>
  );
}
