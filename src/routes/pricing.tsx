import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Free, Plus and Family Plans | Nutrigo" },
      {
        name: "description",
        content:
          "Simple Nutrigo pricing in EGP. Track calories and macros free forever, or upgrade for meal plans, insights and family accounts.",
      },
      { property: "og:title", content: "Pricing — Free, Plus and Family Plans | Nutrigo" },
      {
        property: "og:description",
        content: "Free forever calorie tracking, with Plus and Family upgrades priced in EGP.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://egycalorie.lovable.app/pricing" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://egycalorie.lovable.app/pricing" }],
  }),
  component: Pricing,
});

const plans = [
  {
    name: "Free",
    price: "0",
    period: "forever",
    blurb: "Everything you need to log food and stay on a calorie budget.",
    features: [
      "Unlimited food logging",
      "Egyptian food database",
      "Daily calorie budget",
      "Basic macro rings",
      "7-day history",
    ],
    cta: "Start free",
    featured: false,
  },
  {
    name: "Plus",
    price: "99",
    period: "per month",
    blurb: "For people who want a plan, not just a number at the end of the day.",
    features: [
      "Everything in Free",
      "Weekly meal planning",
      "Recipes with per-serving macros",
      "Grocery lists from your plan",
      "Weight trend & progress charts",
      "Unlimited history and export",
    ],
    cta: "Start 14-day trial",
    featured: true,
  },
  {
    name: "Family",
    price: "179",
    period: "per month",
    blurb: "Up to five profiles under one plan, with a shared kitchen.",
    features: [
      "Everything in Plus",
      "5 member profiles",
      "Shared meal plan & grocery list",
      "Per-member targets",
      "Priority support",
    ],
    cta: "Choose Family",
    featured: false,
  },
];

const faqs = [
  {
    q: "Is the free plan really free?",
    a: "Yes. Food logging, the Egyptian food database and your daily calorie budget stay free with no card required.",
  },
  {
    q: "Can I cancel anytime?",
    a: "You can cancel from your account settings at any time and keep access until the end of the paid period.",
  },
  {
    q: "How do you calculate my calorie target?",
    a: "We use your height, weight, age, activity level and goal to estimate maintenance calories, then apply a safe deficit or surplus.",
  },
  {
    q: "Do you support Arabic food names?",
    a: "Every food carries both an English and an Arabic name, and search matches either one.",
  },
];

function Pricing() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="surface-glow">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center lg:px-8 lg:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Pricing</p>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">Simple plans, priced in EGP</h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Start free and stay free for as long as you like. Upgrade when you want planning,
            recipes and long-term progress tracking.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "flex flex-col rounded-[1.75rem] border bg-card p-7",
                plan.featured
                  ? "border-primary shadow-[0_24px_60px_-30px_hsl(var(--ring)/0.5)] lg:-mt-4 lg:pb-10"
                  : "border-border",
              )}
            >
              <div className="flex items-center justify-between">
                <h2 className="font-display text-xl font-extrabold">{plan.name}</h2>
                {plan.featured && (
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                    Most popular
                  </span>
                )}
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{plan.blurb}</p>
              <div className="mt-6 flex items-end gap-1.5">
                <span className="font-display text-4xl font-extrabold">{plan.price}</span>
                <span className="pb-1.5 text-sm font-semibold text-muted-foreground">
                  EGP / {plan.period}
                </span>
              </div>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                size="lg"
                variant={plan.featured ? "default" : "outline"}
                className="mt-7 w-full rounded-full"
              >
                <Link to="/signup">{plan.cta}</Link>
              </Button>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-3xl px-5 py-16 lg:px-8 lg:py-20">
          <h2 className="text-center text-3xl font-extrabold sm:text-4xl">Common questions</h2>
          <Accordion type="single" collapsible className="mt-8">
            {faqs.map((f) => (
              <AccordionItem key={f.q} value={f.q}>
                <AccordionTrigger className="text-left text-base font-bold">{f.q}</AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
