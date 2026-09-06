import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Apple,
  ArrowRight,
  BarChart3,
  CalendarDays,
  Check,
  ChevronDown,
  Flame,
  HeartPulse,
  NotebookPen,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Utensils,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { consumed, consumedMacros, dailyTargets, todayMeals } from "@/lib/mock-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EgyCalorie — Track Egyptian Food, Calories & Macros" },
      {
        name: "description",
        content:
          "EgyCalorie makes calorie and macro tracking effortless for Egyptian and Arab food. Log ful, koshari and molokhia in seconds, plan meals and see real progress.",
      },
      { property: "og:title", content: "EgyCalorie — Track Egyptian Food, Calories & Macros" },
      {
        property: "og:description",
        content:
          "Effortless food diary, meal planning and progress tracking built around Egyptian meals.",
      },
    ],
  }),
  component: Home,
});

const benefits = [
  { icon: Utensils, title: "Egyptian food, built in", text: "Ful, taameya, koshari, molokhia, mahshi and fatta with realistic home portions." },
  { icon: Flame, title: "Calories that make sense", text: "A daily budget that adapts to your goal, activity and weekly progress." },
  { icon: BarChart3, title: "Macros without the math", text: "Protein, carbs and fat tracked automatically as you log your day." },
  { icon: CalendarDays, title: "Plan the whole week", text: "Build a meal plan once and turn it into a grocery list in one tap." },
  { icon: HeartPulse, title: "Progress you can feel", text: "Weight trends, streaks and insights that show what is actually working." },
  { icon: ShieldCheck, title: "Private by default", text: "Your food diary is yours. No ads, no selling of personal health data." },
];

const steps = [
  { n: "01", title: "Set your goal", text: "Tell us your weight, activity level and target. We calculate your daily budget." },
  { n: "02", title: "Log what you eat", text: "Search Egyptian dishes, pick a portion size and it is logged in seconds." },
  { n: "03", title: "Stay on track", text: "See remaining calories, macros and weekly trends at a glance." },
];

const features = [
  { icon: NotebookPen, title: "Food diary", text: "Breakfast, lunch, dinner and snacks — a clean daily log you will actually keep." },
  { icon: Apple, title: "Nutrition tracking", text: "Calories, protein, carbs, fat, fiber and water in one place." },
  { icon: CalendarDays, title: "Meal planning", text: "Weekly plans with balanced Egyptian meals and quick swaps." },
  { icon: BarChart3, title: "Progress tracking", text: "Weight trend, average intake and adherence over time." },
];

const testimonials = [
  { name: "Mariam H.", role: "Cairo · lost 9 kg", text: "Finally an app that knows what koshari is. I stopped guessing and started losing weight." },
  { name: "Omar S.", role: "Alexandria · gained muscle", text: "Macro tracking with Egyptian food used to be impossible. Now logging takes me 20 seconds." },
  { name: "Dr. Nour A.", role: "Clinical dietitian", text: "I recommend EgyCalorie to patients because the portions match how families actually eat here." },
];

const faqs = [
  { q: "Does EgyCalorie really include Egyptian food?", a: "Yes. The product is designed around local dishes and home portions — ful, taameya, koshari, molokhia, mahshi, fatta, baladi bread and more." },
  { q: "Do I need to weigh my food?", a: "No. You can pick natural portions like 1 loaf, 1 bowl or 1 medium plate. Weighing is optional for people who want precision." },
  { q: "Can I use it in Arabic?", a: "Food names are shown in both English and Arabic so search always works the way you think." },
  { q: "Is there a free plan?", a: "Yes, the free plan covers daily logging, calories and basic macros forever." },
];

function Home() {
  const remaining = dailyTargets.calories - consumed;

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* HERO */}
      <section className="surface-glow relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-16 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:px-8 lg:pb-24 lg:pt-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              Made for Egyptian & Arab meals
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">
              Track your food the way{" "}
              <span className="text-primary">you actually eat</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              EgyCalorie turns calorie and macro tracking into a 20-second habit. Log ful in the
              morning and koshari at lunch — and still know exactly where your day stands.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-full px-7 text-base">
                <Link to="/signup">
                  Create free account <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-7 text-base">
                <Link to="/login">Log in</Link>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Check className="h-4 w-4 text-primary" /> Free forever plan
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Check className="h-4 w-4 text-primary" /> No credit card
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Star className="h-4 w-4 fill-warning text-warning" /> 4.9 average rating
              </span>
            </div>
          </div>

          <AppPreview remaining={remaining} />
        </div>
      </section>

      {/* BENEFITS */}
      <Section
        eyebrow="Why EgyCalorie"
        title="Everything you need to eat better — nothing you don't"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-3xl border border-border bg-card p-6 transition-shadow hover:shadow-lg hover:shadow-primary/5"
            >
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary">
                <b.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-bold">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <section className="bg-card py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <Heading eyebrow="How it works" title="Three steps to a day you can measure" />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="rounded-3xl border border-border bg-background p-7">
                <span className="font-display text-3xl font-extrabold text-primary/30">{s.n}</span>
                <h3 className="mt-3 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <Section eyebrow="Features" title="A complete daily nutrition tool">
        <div className="grid gap-4 sm:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="flex gap-4 rounded-3xl border border-border bg-card p-6">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-accent text-accent-foreground">
                <f.icon className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <h3 className="text-base font-bold">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Button asChild variant="outline" className="rounded-full">
            <Link to="/features">
              See all features <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* EGYPTIAN FOOD */}
      <section className="bg-cream/60 py-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <Heading
              eyebrow="Egyptian food support"
              title="Local dishes, real portions, honest numbers"
              align="left"
            />
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
              Most trackers make you rebuild every Egyptian meal from scratch. EgyCalorie starts with
              the dishes on your table — with portions like "1 loaf of baladi bread" or "1 medium
              plate of koshari".
            </p>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {["Ful & taameya", "Koshari & pasta", "Molokhia & mahshi", "Fatta & grilled meat", "Baladi bread & rice", "Egyptian desserts"].map(
                (i) => (
                  <li key={i} className="flex items-center gap-2 text-sm font-medium">
                    <Check className="h-4 w-4 shrink-0 text-primary" /> {i}
                  </li>
                ),
              )}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {[
              ["🫘", "Ful Medames", "320 kcal"],
              ["🧆", "Taameya", "285 kcal"],
              ["🍚", "Koshari", "620 kcal"],
              ["🥣", "Molokhia", "180 kcal"],
              ["🍃", "Mahshi", "340 kcal"],
              ["🫓", "Baladi bread", "160 kcal"],
            ].map(([emoji, name, kcal]) => (
              <div
                key={name}
                className="rounded-2xl border border-border bg-card p-4 text-center shadow-sm"
              >
                <div className="text-3xl">{emoji}</div>
                <div className="mt-2 text-sm font-semibold leading-tight">{name}</div>
                <div className="text-xs text-muted-foreground">{kcal}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Section eyebrow="Social proof" title="Loved by people who tried everything else">
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-3xl border border-border bg-card p-6">
              <Quote className="h-6 w-6 text-primary/40" />
              <blockquote className="mt-3 text-sm leading-relaxed">{t.text}</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {t.name.charAt(0)}
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-bold">{t.name}</span>
                  <span className="block truncate text-xs text-muted-foreground">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <section className="bg-card py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <Heading eyebrow="FAQ" title="Questions, answered" />
          <div className="mt-8 space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-border bg-background p-5 [&_svg]:open:rotate-180"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold">
                  {f.q}
                  <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="surface-glow overflow-hidden rounded-[2rem] border border-primary/20 bg-card px-6 py-14 text-center lg:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold sm:text-4xl">
              Your next healthy day starts with one log
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
              Join thousands of people tracking Egyptian food without spreadsheets, guesswork or
              giving up their favourite meals.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-full px-8 text-base">
                <Link to="/signup">Get started free</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 text-base">
                <Link to="/pricing">See pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function AppPreview({ remaining }: { remaining: number }) {
  const pct = Math.min(100, Math.round((consumed / dailyTargets.calories) * 100));
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-primary/10 blur-2xl" />
      <div className="rounded-[2rem] border border-border bg-card p-5 shadow-2xl shadow-primary/10">
        <div className="flex items-center justify-between">
          <div className="min-w-0">
            <p className="text-xs text-muted-foreground">Today</p>
            <p className="truncate font-display text-lg font-bold">My Day</p>
          </div>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            {pct}% of budget
          </span>
        </div>

        <div className="mt-5 rounded-2xl bg-muted/60 p-5 text-center">
          <p className="text-xs font-medium text-muted-foreground">Remaining</p>
          <p className="font-display text-4xl font-extrabold">{remaining}</p>
          <p className="text-xs text-muted-foreground">of {dailyTargets.calories} kcal</p>
          <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-border">
            <div className="h-full rounded-full bg-primary" style={{ width: `${pct}%` }} />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {[
            ["Protein", consumedMacros.protein, dailyTargets.protein, "bg-protein"],
            ["Carbs", consumedMacros.carbs, dailyTargets.carbs, "bg-carb"],
            ["Fat", consumedMacros.fat, dailyTargets.fat, "bg-fat"],
          ].map(([label, val, target, color]) => (
            <div key={label as string} className="rounded-2xl border border-border p-3">
              <p className="text-[11px] text-muted-foreground">{label as string}</p>
              <p className="text-sm font-bold">
                {val as number}
                <span className="text-[11px] font-normal text-muted-foreground">
                  /{target as number}g
                </span>
              </p>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-border">
                <div
                  className={`h-full rounded-full ${color as string}`}
                  style={{
                    width: `${Math.min(100, ((val as number) / (target as number)) * 100)}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 space-y-2">
          {todayMeals.slice(0, 3).map((m) => (
            <div
              key={m.key}
              className="flex items-center gap-3 rounded-2xl border border-border px-3 py-2.5"
            >
              <span className="text-xl">{m.items[0]?.emoji ?? "🍽️"}</span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-semibold">{m.label}</span>
                <span className="block truncate text-xs text-muted-foreground">
                  {m.items.map((i) => i.name).join(", ")}
                </span>
              </span>
              <span className="shrink-0 text-sm font-bold">
                {m.items.reduce((s, i) => s + i.calories, 0)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Heading({
  eyebrow,
  title,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : ""}>
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">{title}</h2>
    </div>
  );
}

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Heading eyebrow={eyebrow} title={title} />
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
