import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Apple,
  BarChart3,
  CalendarDays,
  ChefHat,
  Flame,
  Lightbulb,
  NotebookPen,
  ScaleIcon,
  ShoppingBasket,
  Utensils,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — Food, Calorie & Macro Tracking | EgyCalorie" },
      {
        name: "description",
        content:
          "Food diary, calorie budgets, macro tracking, meal planning, recipes, weight and grocery lists — every EgyCalorie feature, built for Egyptian meals.",
      },
      { property: "og:title", content: "Features — Food, Calorie & Macro Tracking | EgyCalorie" },
      {
        property: "og:description",
        content: "Every EgyCalorie capability, from the daily food diary to weekly nutrition insights.",
      },
    ],
  }),
  component: Features,
});

const capabilities = [
  { icon: Utensils, title: "Food tracking", text: "Search by English or Arabic name, pick a natural portion and log it in seconds. Recent and favourite foods are always one tap away." },
  { icon: Flame, title: "Calorie tracking", text: "A daily budget calculated from your goal, with a live remaining number that updates as you eat." },
  { icon: BarChart3, title: "Macro tracking", text: "Protein, carbs and fat rings per day, plus weekly averages so you can see the real pattern." },
  { icon: CalendarDays, title: "Meal planning", text: "Plan breakfast, lunch, dinner and snacks for the whole week and copy days you liked." },
  { icon: ChefHat, title: "Recipes", text: "Lighter versions of Egyptian classics with per-serving nutrition already calculated." },
  { icon: NotebookPen, title: "Food diary", text: "One clean page per day. Review, edit, duplicate yesterday, and never lose a log." },
  { icon: ScaleIcon, title: "Weight tracking", text: "Log weight, see a smoothed trend line instead of daily noise, and track goal distance." },
  { icon: ShoppingBasket, title: "Grocery planning", text: "Turn your meal plan into a categorised shopping list you can check off in the market." },
  { icon: Lightbulb, title: "Nutrition insights", text: "Weekly summaries that point out what changed and what to adjust next week." },
];

function Features() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="surface-glow">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center lg:px-8 lg:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Features</p>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">
            Everything in one daily nutrition tool
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            EgyCalorie covers the full loop: log what you eat, understand it, plan the next week and
            watch the trend move.
          </p>
        </div>
      </section>

      <section className="pb-16 lg:pb-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => (
              <div key={c.title} className="rounded-3xl border border-border bg-card p-6">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <c.icon className="h-5 w-5" />
                </span>
                <h2 className="mt-4 text-base font-bold">{c.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card py-16 lg:py-20">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-5 text-center lg:px-8">
          <Apple className="h-8 w-8 text-primary" />
          <h2 className="text-3xl font-extrabold">Try it on today's meals</h2>
          <p className="max-w-xl text-sm text-muted-foreground sm:text-base">
            Create an account and log your first day in under two minutes.
          </p>
          <Button asChild size="lg" className="rounded-full px-8">
            <Link to="/signup">Start free</Link>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
