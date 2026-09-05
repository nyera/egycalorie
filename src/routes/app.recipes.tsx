import { createFileRoute } from "@tanstack/react-router";
import { Clock, Flame } from "lucide-react";
import { Panel } from "@/components/app/cards";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { recipes } from "@/lib/mock-data";

export const Route = createFileRoute("/app/recipes")({
  head: () => ({
    meta: [
      { title: "Recipes — Nutrigo" },
      { name: "description", content: "Lighter versions of Egyptian favourites." },
      { property: "og:title", content: "Recipes — Nutrigo" },
      { property: "og:description", content: "Lighter versions of Egyptian favourites." },
    ],
  }),
  component: RecipesPage,
});

function RecipesPage() {
  return (
    <div className="mx-auto max-w-6xl">
      <Panel title="Healthy recipes" description="Egyptian dishes, rebalanced">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {recipes.map((r) => (
            <article key={r.id} className="overflow-hidden rounded-2xl border border-border">
              <div className="grid h-28 place-items-center bg-primary/10 text-5xl">{r.emoji}</div>
              <div className="p-4">
                <h3 className="font-display text-sm font-extrabold">{r.title}</h3>
                <div className="mt-2 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Flame className="h-3.5 w-3.5" /> {r.kcal} kcal
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" /> {r.time}
                  </span>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {r.tags.map((t) => (
                    <Badge key={t} variant="secondary" className="rounded-full">
                      {t}
                    </Badge>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="mt-4 w-full rounded-full">
                  View recipe
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Panel>
    </div>
  );
}
