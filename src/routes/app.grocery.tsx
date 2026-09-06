import { createFileRoute } from "@tanstack/react-router";
import { Panel } from "@/components/app/cards";
import { Checkbox } from "@/components/ui/checkbox";
import { groceryList } from "@/lib/mock-data";

export const Route = createFileRoute("/app/grocery")({
  head: () => ({
    meta: [
      { title: "Grocery — EgyCalorie" },
      { name: "description", content: "Shopping list built from this week's meal plan." },
      { property: "og:title", content: "Grocery — EgyCalorie" },
      { property: "og:description", content: "Shopping list built from this week's meal plan." },
    ],
  }),
  component: GroceryPage,
});

function GroceryPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-5">
      {groceryList.map((group) => (
        <Panel key={group.category} title={group.category} description={`${group.items.length} items`}>
          <ul className="space-y-2">
            {group.items.map((item) => {
              const id = `${group.category}-${item}`.replace(/\s+/g, "-").toLowerCase();
              return (
                <li key={item} className="flex items-center gap-3 rounded-xl border border-border px-3 py-2.5">
                  <Checkbox id={id} />
                  <label htmlFor={id} className="text-sm font-semibold">
                    {item}
                  </label>
                </li>
              );
            })}
          </ul>
        </Panel>
      ))}
    </div>
  );
}
