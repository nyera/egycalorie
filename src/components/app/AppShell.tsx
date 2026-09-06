import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import {
  BarChart3,
  Bell,
  CalendarDays,
  ChefHat,
  LayoutDashboard,
  Lightbulb,
  LogOut,
  Menu,
  NotebookPen,
  Salad,
  Search,
  Settings,
  ShoppingBasket,
  X,
} from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { t } from "@/lib/i18n";

export const appNav = [
  { to: "/app", label: "My Day", icon: LayoutDashboard, exact: true },
  { to: "/app/diary", label: "Food Diary", icon: NotebookPen, exact: false },
  { to: "/app/plan", label: "Meal Plan", icon: CalendarDays, exact: false },
  { to: "/app/progress", label: "Progress", icon: BarChart3, exact: false },
  { to: "/app/recipes", label: "Recipes", icon: ChefHat, exact: false },
  { to: "/app/grocery", label: "Grocery", icon: ShoppingBasket, exact: false },
  { to: "/app/insights", label: "Insights", icon: Lightbulb, exact: false },
] as const;

const mobileNav = appNav.slice(0, 5);

export function AppShell() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const current = appNav.find((n) =>
    n.exact ? pathname === n.to : pathname.startsWith(n.to),
  );

  return (
    <div className="min-h-screen bg-secondary/30">
      {/* Sidebar — desktop */}
      <aside className="fixed inset-y-0 left-0 hidden w-[248px] flex-col border-r border-border bg-card lg:flex">
        <div className="flex h-16 items-center gap-2 px-6">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground">
            <Salad className="h-5 w-5" />
          </span>
          <span className="font-display text-lg font-extrabold tracking-tight">{t("EgyCalorie")}</span>
        </div>
        <nav className="flex-1 space-y-1 px-4 py-4">
          <p className="px-3 pb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground">{t("Daily")}</p>
          {appNav.map((item) => (
            <NavItem key={item.to} item={item} />
          ))}
        </nav>
        <div className="m-4 rounded-2xl bg-primary/10 p-4">
          <p className="text-sm font-bold">{t("You're on Free")}</p>
          <p className="mt-1 text-xs text-muted-foreground">{t("Unlock meal plans, recipes and full history.")}</p>
          <Button asChild size="sm" className="mt-3 w-full rounded-full">
            <Link to="/pricing">{t("Upgrade to Plus")}</Link>
          </Button>
        </div>
        <div className="border-t border-border p-4">
          <Link
            to="/"
            className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <LogOut className="h-4 w-4" />{t("Sign out")}</Link>
        </div>
      </aside>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            aria-label={t("Close menu")}
            className="absolute inset-0 bg-foreground/40"
            onClick={() => setOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 flex w-[264px] flex-col bg-card">
            <div className="flex h-16 items-center justify-between px-5">
              <span className="font-display text-lg font-extrabold">{t("EgyCalorie")}</span>
              <button aria-label={t("Close menu")} onClick={() => setOpen(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="space-y-1 px-4 py-2" onClick={() => setOpen(false)}>
              {appNav.map((item) => (
                <NavItem key={item.to} item={item} />
              ))}
            </nav>
          </div>
        </div>
      )}

      <div className="lg:pl-[248px]">
        {/* Top bar */}
        <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-xl">
          <div className="flex h-16 items-center gap-3 px-4 sm:px-6">
            <button
              type="button"
              aria-label={t("Open menu")}
              onClick={() => setOpen(true)}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
            <h1 className="truncate font-display text-lg font-extrabold tracking-tight sm:text-xl">
              {current?.label ?? "My Day"}
            </h1>
            <div className="ml-auto flex items-center gap-2">
              <div className="relative hidden md:block">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder={t("Search foods\u2026")}
                  className="h-10 w-56 rounded-full pl-9 lg:w-64"
                  aria-label={t("Search foods")}
                />
              </div>
              <button
                type="button"
                aria-label={t("Notifications")}
                className="relative grid h-10 w-10 place-items-center rounded-full border border-border bg-card"
              >
                <Bell className="h-4 w-4" />
                <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-primary" />
              </button>
              <button
                type="button"
                aria-label={t("Settings")}
                className="hidden h-10 w-10 place-items-center rounded-full border border-border bg-card sm:grid"
              >
                <Settings className="h-4 w-4" />
              </button>
              <Avatar className="h-10 w-10 border border-border">
                <AvatarFallback className="bg-primary/12 text-sm font-bold text-primary">{t("NH")}</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        <main className="px-4 pb-28 pt-6 sm:px-6 lg:pb-10">
          <Outlet />
        </main>
      </div>

      {/* Mobile bottom nav */}
      <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card/95 backdrop-blur-xl lg:hidden">
        <div className="grid grid-cols-5">
          {mobileNav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.exact }}
              className="flex flex-col items-center gap-1 py-2.5 text-[11px] font-semibold text-muted-foreground"
              activeProps={{ className: "!text-primary" }}
            >
              <item.icon className="h-5 w-5" />
              {item.label.split(" ")[0]}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}

function NavItem({ item }: { item: (typeof appNav)[number] }) {
  return (
    <Link
      to={item.to}
      activeOptions={{ exact: item.exact }}
      className={cn(
        "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
      )}
      activeProps={{ className: "!bg-primary !text-primary-foreground hover:!bg-primary" }}
    >
      <item.icon className="h-4.5 w-4.5" />
      {t(item.label)}
    </Link>
  );
}
