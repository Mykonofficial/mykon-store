import { cn } from "@/lib/utils";

export function Button({
  className,
  variant = "default",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost";
}) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold transition active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    default: "bg-[var(--text)] text-[var(--bg)] hover:opacity-90 shadow-sm",
    outline: "border border-[var(--border)] bg-transparent hover:bg-black/5 dark:hover:bg-white/5",
    ghost: "bg-transparent hover:bg-black/5 dark:hover:bg-white/5"
  } as const;

  return <button className={cn(base, variants[variant], className)} {...props} />;
}
