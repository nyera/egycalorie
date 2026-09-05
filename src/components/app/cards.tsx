import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Panel({
  title,
  action,
  children,
  className,
  description,
}: {
  title?: string;
  description?: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn("rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6", className)}
    >
      {(title || action) && (
        <header className="mb-4 flex items-start justify-between gap-3">
          <div>
            {title && <h2 className="font-display text-base font-extrabold sm:text-lg">{title}</h2>}
            {description && (
              <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">{description}</p>
            )}
          </div>
          {action}
        </header>
      )}
      {children}
    </section>
  );
}

export function StatCard({
  label,
  value,
  unit,
  hint,
  accent = "primary",
  progress,
}: {
  label: string;
  value: string | number;
  unit?: string;
  hint?: string;
  accent?: "primary" | "carb" | "protein" | "fat";
  progress?: number;
}) {
  const bar = {
    primary: "bg-primary",
    carb: "bg-carb",
    protein: "bg-protein",
    fat: "bg-fat",
  }[accent];

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-5">
      <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
        {label}
      </p>
      <p className="mt-2 font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
        {value}
        {unit && <span className="ml-1 text-sm font-bold text-muted-foreground">{unit}</span>}
      </p>
      {typeof progress === "number" && (
        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-muted">
          <div className={cn("h-full rounded-full", bar)} style={{ width: `${Math.min(100, progress)}%` }} />
        </div>
      )}
      {hint && <p className="mt-2 text-xs text-muted-foreground">{hint}</p>}
    </div>
  );
}
