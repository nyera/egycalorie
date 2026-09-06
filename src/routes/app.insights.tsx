import { createFileRoute } from "@tanstack/react-router";
import { AlertTriangle, TrendingUp } from "lucide-react";
import { Panel } from "@/components/app/cards";
import { insights } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { t } from "@/lib/i18n";

export const Route = createFileRoute("/app/insights")({
  head: () => ({
    meta: [
      { title: "Insights — EgyCalorie" },
      { name: "description", content: "What your eating habits look like this week." },
      { property: "og:title", content: "Insights — EgyCalorie" },
      { property: "og:description", content: "What your eating habits look like this week." },
    ],
  }),
  component: InsightsPage,
});

function InsightsPage() {
  return (
    <div className="mx-auto max-w-4xl">
      <Panel title={t("Nutrition insights")} description={t("Based on the last 7 days of logging")}>
        <ul className="grid gap-3 sm:grid-cols-2">
          {insights.map((i) => (
            <li key={t(i.title)} className="rounded-2xl border border-border p-4">
              <span
                className={cn(
                  "grid h-10 w-10 place-items-center rounded-xl",
                  i.tone === "positive" ? "bg-primary/12 text-primary" : "bg-warning/15 text-warning",
                )}
              >
                {i.tone === "positive" ? (
                  <TrendingUp className="h-4.5 w-4.5" />
                ) : (
                  <AlertTriangle className="h-4.5 w-4.5" />
                )}
              </span>
              <h3 className="mt-3 font-display text-sm font-extrabold">{t(i.title)}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{i.detail}</p>
            </li>
          ))}
        </ul>
      </Panel>
    </div>
  );
}
