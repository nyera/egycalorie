import { Link } from "@tanstack/react-router";
import { Salad } from "lucide-react";
import type { ReactNode } from "react";

const highlights = [
  "1,400+ Egyptian foods with real portions",
  "Calorie budget and macro rings that update live",
  "Weekly meal plans and grocery lists",
];

export function AuthLayout({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
  footer: ReactNode;
}) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="flex flex-col px-5 py-8 sm:px-10 lg:px-14">
        <Link to="/" className="flex w-fit items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground">
            <Salad className="h-5 w-5" />
          </span>
          <span className="font-display text-lg font-extrabold tracking-tight">Nutrigo</span>
        </Link>

        <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center py-10">
          <h1 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{subtitle}</p>
          <div className="mt-8">{children}</div>
          <div className="mt-7 text-sm text-muted-foreground">{footer}</div>
        </div>
      </div>

      <div className="relative hidden overflow-hidden bg-secondary/50 lg:block">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_70%_20%,hsl(var(--ring)/0.18),transparent_70%)]" />
        <div className="relative flex h-full flex-col justify-center px-14">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
            Built for Egyptian kitchens
          </p>
          <h2 className="mt-4 max-w-sm font-display text-3xl font-extrabold leading-tight">
            Track ful, koshari and molokhia — not vague substitutes.
          </h2>
          <ul className="mt-8 space-y-4">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-sm">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span className="text-muted-foreground">{h}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 max-w-sm rounded-3xl border border-border bg-card p-6">
            <p className="text-sm leading-relaxed">
              “First tracker where I could log a plate of koshari in one tap. I finally stayed
              consistent for a full three months.”
            </p>
            <p className="mt-4 text-xs font-semibold text-muted-foreground">
              Mariam T. — lost 9 kg with Nutrigo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
