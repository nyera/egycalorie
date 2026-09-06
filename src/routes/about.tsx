import { createFileRoute, Link } from "@tanstack/react-router";
import { HeartPulse, Salad, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About EgyCalorie — Nutrition Tracking Built for Egypt" },
      {
        name: "description",
        content:
          "Why we built EgyCalorie: a calorie and macro tracker with a real Egyptian food database, made in Cairo for the way people here actually eat.",
      },
      { property: "og:title", content: "About EgyCalorie — Nutrition Tracking Built for Egypt" },
      {
        property: "og:description",
        content: "A nutrition app made in Cairo, with ful, koshari and molokhia in the database from day one.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://egycalorie.lovable.app/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://egycalorie.lovable.app/about" }],
  }),
  component: About,
});

const values = [
  {
    icon: Salad,
    title: "Local food first",
    text: "Ful, taameya, koshari, molokhia and mahshi were in our database before anything imported.",
  },
  {
    icon: HeartPulse,
    title: "Health, not guilt",
    text: "No shaming streaks or red warnings. Just clear numbers and gentle, useful nudges.",
  },
  {
    icon: Sparkles,
    title: "Fast by design",
    text: "Logging a meal should take seconds. Every screen is built around that one promise.",
  },
  {
    icon: Users,
    title: "Made with our users",
    text: "Portions, names and dishes come from real feedback from people tracking every day.",
  },
];

const stats = [
  { value: "1,400+", label: "Local foods & portions" },
  { value: "62k", label: "Meals logged monthly" },
  { value: "4.8/5", label: "Average user rating" },
  { value: "Cairo", label: "Where we build" },
];

function About() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="surface-glow">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center lg:px-8 lg:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">About us</p>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">
            Nutrition tracking that speaks your kitchen
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Every tracker we tried made us translate our food into something else. A plate of koshari
            became "rice, pasta, lentils, tomato sauce" — four guesses instead of one meal. So we
            built the tracker we wanted: one where Egyptian food is the default, not an exception.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-3xl border border-border bg-card p-6 text-center">
              <p className="font-display text-3xl font-extrabold text-primary">{s.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-20">
          <h2 className="text-center text-3xl font-extrabold sm:text-4xl">What we believe</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="rounded-3xl border border-border bg-card p-7">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <v.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="rounded-[2rem] border border-border bg-card p-8 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold sm:text-4xl">Our story</h2>
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  EgyCalorie started in 2024 as a spreadsheet shared between a nutritionist and a
                  developer in Maadi. It held portion weights for the dishes their clients ate every
                  week — a loaf of baladi bread, a bowl of ful, a plate of fatta from a family lunch.
                </p>
                <p>
                  That spreadsheet became a database, the database became an app, and the app is now
                  used by thousands of people who finally see their own food on the screen.
                </p>
                <p>
                  We are a small team of engineers, designers and a registered dietitian. We ship
                  every week and read every message.
                </p>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-full px-6">
                  <Link to="/signup">Start free</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full px-6">
                  <Link to="/contact">Talk to us</Link>
                </Button>
              </div>
            </div>
            <div className="rounded-3xl bg-secondary/60 p-7">
              <h3 className="text-sm font-bold uppercase tracking-wide text-muted-foreground">
                How we work
              </h3>
              <ul className="mt-4 space-y-4 text-sm">
                {[
                  "Every food entry is reviewed against a real portion, weighed in a home kitchen.",
                  "Nutrition guidance is checked by a registered dietitian before it ships.",
                  "We never sell personal data. Your diary belongs to you.",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
