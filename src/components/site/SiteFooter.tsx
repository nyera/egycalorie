import { Link } from "@tanstack/react-router";
import { Salad } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground">
                <Salad className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-extrabold">EgyCalorie</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Calorie and macro tracking built for the way Egypt eats — ful, koshari,
              molokhia and everything in between.
            </p>
          </div>

          <FooterCol
            title="Product"
            links={[
              { to: "/features", label: "Features" },
              { to: "/pricing", label: "Pricing" },
              { to: "/app", label: "Open app" },
            ]}
          />
          <FooterCol
            title="Company"
            links={[
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ]}
          />
          <FooterCol
            title="Account"
            links={[
              { to: "/login", label: "Log in" },
              { to: "/signup", label: "Create account" },
            ]}
          />
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} EgyCalorie. All rights reserved.</p>
          <p>Made in Cairo · Nutrition data is for guidance only.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { to: string; label: string }[];
}) {
  return (
    <div>
      <h4 className="text-sm font-bold">{title}</h4>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.to}>
            <Link
              to={l.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
