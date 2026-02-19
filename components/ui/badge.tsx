import { cn } from "@/lib/utils";

export function Badge({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[var(--border)] px-3 py-1 text-xs font-semibold tracking-wide",
        className
      )}
    >
      {children}
    </span>
  );
}
