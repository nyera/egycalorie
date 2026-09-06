import { createFileRoute, Link } from "@tanstack/react-router";
import { Flame, GlassWater, Plus, Utensils } from "lucide-react";
import { Panel, StatCard } from "@/components/app/cards";
import { Button } from "@/components/ui/button";
import {
import { t } from "@/lib/i18n";
  consumed,
  consumedMacros,
  dailyTargets,
  mealCalories,
  todayMeals,
} from "@/lib/mock-data";

export const Route = createFileRoute("/app/")({
  head: () => ({
    meta: [
      { title: "My Day — EgyCalorie" },
      { name: "description", content: "Today's calories, macros and meals at a glance." },
      { property: "og:title", content: "My Day — EgyCalorie" },
      { property: "og:description", content: "Today's calories, macros and meals at a glance." },
    ],
  }),
  component: MyDay,
});

function MyDay() {
  const remaining = dailyTargets.calories - consumed;
  const pct = Math.round((consumed / dailyTargets.calories) * 100);

  return (
    <div className="mx-auto max-w-6xl space-y-5">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label={t("Calories eaten")}
          value={consumed}
          unit="kcal"
          progress={pct}
          hint={`${pct}% of ${dailyTargets.calories} kcal budget`}
        />
        <StatCard
          label={t("Protein")}
          value={consumedMacros.protein}
          unit={`/ ${dailyTargets.protein} g`}
          accent="protein"
          progress={(consumedMacros.protein / dailyTargets.protein) * 100}
        />
        <StatCard
          label={t("Carbs")}
          value={consumedMacros.carbs}
          unit={`/ ${dailyTargets.carbs} g`}
          accent="carb"
          progress={(consumedMacros.carbs / dailyTargets.carbs) * 100}
        />
        <StatCard
          label={t("Fat")}
          value={consumedMacros.fat}
          unit={`/ ${dailyTargets.fat} g`}
          accent="fat"
          progress={(consumedMacros.fat / dailyTargets.fat) * 100}
        />
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.6fr_1fr]">
        <Panel
          title={t("Today's meals")}
          description={t("Breakfast, lunch, dinner and snacks")}
          action={
            <Button asChild size="sm" className="rounded-full">
              <Link to="/app/diary">
                <Plus className="mr-1 h-4 w-4" />{t("Add food")}</Link>
            </Button>
          }
        >
          <ul className="space-y-3">
            {todayMeals.map((meal) => {
              const kcal = mealCalories(meal);
              return (
                <li key={meal.key} className="rounded-2xl border border-border p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                        <Utensils className="h-4.5 w-4.5" />
                      </span>
                      <div>
                        <p className="text-sm font-bold">{t(meal.label)}</p>
                        <p className="text-xs text-muted-foreground">
                          {meal.time} · target {meal.target} kcal
                        </p>
                      </div>
                    </div>
                    <p className="font-display text-lg font-extrabold">{kcal}</p>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {meal.items.map((item) => (
                      <span
                        key={item.id + meal.key}
                        className="rounded-full bg-muted px-3 py-1 text-xs font-semibold"
                      >
                        {item.emoji} {t(item.name)} · {item.calories}
                      </span>
                    ))}
                  </div>
                </li>
              );
            })}
          </ul>
        </Panel>

        <div className="space-y-5">
          <Panel title={t("Calorie budget")}>
            <div className="flex items-center gap-4">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary text-primary-foreground">
                <Flame className="h-6 w-6" />
              </span>
              <div>
                <p className="font-display text-3xl font-extrabold tracking-tight">
                  {remaining > 0 ? remaining : 0}
                </p>
                <p className="text-xs text-muted-foreground">{t("kcal remaining today")}</p>
              </div>
            </div>
            <div className="mt-4 h-2.5 w-full overflow-hidden rounded-full bg-muted">
              <div className="h-full rounded-full bg-primary" style={{ width: `${Math.min(100, pct)}%` }} />
            </div>
          </Panel>

          <Panel title={t("Water")}>
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: dailyTargets.water }).map((_, i) => (
                <span
                  key={i}
                  className={
                    i < 5
                      ? "grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary"
                      : "grid h-10 w-10 place-items-center rounded-xl border border-dashed border-border text-muted-foreground"
                  }
                >
                  <GlassWater className="h-4 w-4" />
                </span>
              ))}
            </div>
            <p className="mt-3 text-xs text-muted-foreground">5 of {dailyTargets.water} glasses</p>
          </Panel>
        </div>
      </div>
    </div>
  );
}
