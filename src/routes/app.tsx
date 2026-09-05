import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app/AppShell";

export const Route = createFileRoute("/app")({
  head: () => ({
    meta: [
      { title: "My Day — Nutrigo nutrition tracker" },
      {
        name: "description",
        content: "Track calories, macros and Egyptian meals in one simple daily dashboard.",
      },
      { property: "og:title", content: "My Day — Nutrigo nutrition tracker" },
      {
        property: "og:description",
        content: "Track calories, macros and Egyptian meals in one simple daily dashboard.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AppShell,
});
