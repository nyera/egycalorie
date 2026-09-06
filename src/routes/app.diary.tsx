import { createFileRoute } from "@tanstack/react-router";
import { Plus, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Panel } from "@/components/app/cards";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { egyptianFoods, mealCalories, todayMeals } from "@/lib/mock-data";
import { t } from "@/lib/i18n";

export const Route = createFileRoute("/app/diary")({
  head: () => ({
    meta: [
      { title: "Food Diary — EgyCalorie" },
      { name: "description", content: "Everything you ate today, meal by meal." },
      { property: "og:title", content: "Food Diary — EgyCalorie" },
      { property: "og:description", content: "Everything you ate today, meal by meal." },
    ],
  }),
  component: Diary,
});

function Diary() {
  const [q, setQ] = useState("");
  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return egyptianFoods.slice(0, 6);
    return egyptianFoods.filter(
      (f) => f.name.toLowerCase().includes(term) || f.nameAr.includes(term),
    );
  }, [q]);

  return (
    <div className="mx-auto max-w-6xl space-y-5">
      <Panel title={t("Add food")} description={t("Search Egyptian and everyday foods")}>
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={t("Try ful, koshari, molokhia\u2026")}
            aria-label={t("Search foods")}
            className="h-11 rounded-full pl-9"
          />
        </div>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {results.map((f) => (
            <li
              key={f.id}
              className="flex items-center justify-between gap-3 rounded-2xl border border-border p-3"
            >
              <div className="min-w-0">
                <p className="truncate text-sm font-bold">
                  {f.emoji} {t(f.name)}
                </p>
                <p className="truncate text-xs text-muted-foreground">
                  {f.nameAr} · {f.portion} · {f.calories} kcal
                </p>
              </div>
              <Button size="icon" variant="secondary" className="h-9 w-9 shrink-0 rounded-full" aria-label={`Add ${t(f.name)}`}>
                <Plus className="h-4 w-4" />
              </Button>
            </li>
          ))}
          {results.length === 0 && (
            <li className="rounded-2xl border border-dashed border-border p-6 text-center text-sm text-muted-foreground sm:col-span-2">
              No food matches “{q}”. Try another name.
            </li>
          )}
        </ul>
      </Panel>

      {todayMeals.map((meal) => (
        <Panel
          key={meal.key}
          title={t(meal.label)}
          description={`${meal.time} · ${mealCalories(meal)} of ${meal.target} kcal`}
        >
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t("Food")}</TableHead>
                  <TableHead>{t("Portion")}</TableHead>
                  <TableHead className="text-right">P</TableHead>
                  <TableHead className="text-right">C</TableHead>
                  <TableHead className="text-right">F</TableHead>
                  <TableHead className="text-right">{t("kcal")}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {meal.items.map((item) => (
                  <TableRow key={meal.key + item.id}>
                    <TableCell className="font-semibold">
                      {item.emoji} {t(item.name)}
                      <span className="ml-2 text-xs text-muted-foreground">{item.nameAr}</span>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{item.portion}</TableCell>
                    <TableCell className="text-right">{item.macros.protein}g</TableCell>
                    <TableCell className="text-right">{item.macros.carbs}g</TableCell>
                    <TableCell className="text-right">{item.macros.fat}g</TableCell>
                    <TableCell className="text-right font-bold">{item.calories}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Panel>
      ))}
    </div>
  );
}
