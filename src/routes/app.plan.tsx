import { createFileRoute } from "@tanstack/react-router";
import { Panel } from "@/components/app/cards";
import { Badge } from "@/components/ui/badge";
import { mealPlan } from "@/lib/mock-data";

export const Route = createFileRoute("/app/plan")({
  head: () => ({
    meta: [
      { title: "Meal Plan — EgyCalorie" },
      { name: "description", content: "Your planned Egyptian meals for the week ahead." },
      { property: "og:title", content: "Meal Plan — EgyCalorie" },
      { property: "og:description", content: "Your planned Egyptian meals for the week ahead." },
    ],
  }),
  component: PlanPage,
});

const slots = ["breakfast", "lunch", "dinner", "snack"] as const;

function PlanPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-5">
      <Panel title="This week" description="Balanced Egyptian meals, roughly 2,200 kcal per day">
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {mealPlan.map((day) => (
            <article key={day.day} className="rounded-2xl border border-border p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-sm font-extrabold">{day.day}</h3>
                <Badge variant="secondary" className="rounded-full">4 meals</Badge>
              </div>
              <dl className="mt-3 space-y-2">
                {slots.map((slot) => (
                  <div key={slot} className="flex items-start justify-between gap-3">
                    <dt className="text-[11px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
                      {slot}
                    </dt>
                    <dd className="text-right text-sm font-semibold">{day[slot]}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </Panel>
    </div>
  );
}
