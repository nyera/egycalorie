import { createFileRoute } from "@tanstack/react-router";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Panel, StatCard } from "@/components/app/cards";
import { weeklyCalories, weightTrend } from "@/lib/mock-data";

export const Route = createFileRoute("/app/progress")({
  head: () => ({
    meta: [
      { title: "Progress — EgyCalorie" },
      { name: "description", content: "Weight trend and weekly calorie history." },
      { property: "og:title", content: "Progress — EgyCalorie" },
      { property: "og:description", content: "Weight trend and weekly calorie history." },
    ],
  }),
  component: ProgressPage,
});

function ProgressPage() {
  const start = weightTrend[0]?.weight ?? 0;
  const now = weightTrend[weightTrend.length - 1]?.weight ?? start;
  const avg = Math.round(weeklyCalories.reduce((s, d) => s + d.calories, 0) / weeklyCalories.length);

  return (
    <div className="mx-auto max-w-6xl space-y-5">
      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Current weight" value={now} unit="kg" hint={`Started at ${start} kg`} />
        <StatCard
          label="Total change"
          value={(now - start).toFixed(1)}
          unit="kg"
          hint="Over 8 weeks"
          accent="protein"
        />
        <StatCard label="Avg daily calories" value={avg} unit="kcal" hint="Last 7 days" accent="carb" />
      </div>

      <Panel title="Weight trend" description="Last 8 weeks">
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={weightTrend} margin={{ left: -18, right: 8, top: 8 }}>
              <defs>
                <linearGradient id="wg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.35} />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" vertical={false} />
              <XAxis dataKey="week" tickLine={false} axisLine={false} fontSize={12} />
              <YAxis domain={["dataMin - 1", "dataMax + 1"]} tickLine={false} axisLine={false} fontSize={12} />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="weight"
                stroke="hsl(var(--primary))"
                strokeWidth={2.5}
                fill="url(#wg)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Panel>

      <Panel title="Calories this week" description="Against a 2,200 kcal target">
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={weeklyCalories} margin={{ left: -18, right: 8, top: 8 }}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" vertical={false} />
              <XAxis dataKey="day" tickLine={false} axisLine={false} fontSize={12} />
              <YAxis tickLine={false} axisLine={false} fontSize={12} />
              <Tooltip />
              <Bar dataKey="calories" radius={[8, 8, 0, 0]} fill="hsl(var(--primary))" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Panel>
    </div>
  );
}
