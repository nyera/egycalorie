import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthLayout } from "@/components/site/AuthLayout";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Log in to EgyCalorie — Your Daily Food Diary" },
      {
        name: "description",
        content: "Sign in to EgyCalorie to open your food diary, calorie budget, macros and weekly nutrition progress.",
      },
      { property: "og:title", content: "Log in to EgyCalorie" },
      { property: "og:description", content: "Sign in to continue tracking your meals and macros." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://egycalorie.lovable.app/login" },
      { name: "robots", content: "noindex" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://egycalorie.lovable.app/login" }],
  }),
  component: Login,
});

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Log in to pick up your diary exactly where you left it."
      footer={
        <>
          New to EgyCalorie?{" "}
          <Link to="/signup" className="font-semibold text-primary hover:underline">
            Create a free account
          </Link>
        </>
      }
    >
      <form
        className="space-y-5"
        onSubmit={(e) => {
          e.preventDefault();
          setLoading(true);
          setTimeout(() => navigate({ to: "/app" }), 500);
        }}
      >
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            required
            placeholder="you@example.com"
            className="h-11 rounded-xl"
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <button type="button" className="text-xs font-semibold text-primary hover:underline">
              Forgot password?
            </button>
          </div>
          <Input
            id="password"
            type="password"
            required
            placeholder="••••••••"
            className="h-11 rounded-xl"
          />
        </div>
        <label className="flex items-center gap-2.5 text-sm text-muted-foreground">
          <Checkbox id="remember" defaultChecked />
          Keep me signed in
        </label>
        <Button type="submit" size="lg" disabled={loading} className="w-full rounded-full">
          {loading ? "Signing in…" : "Log in"}
        </Button>
      </form>

      <div className="my-6 flex items-center gap-4 text-xs text-muted-foreground">
        <span className="h-px flex-1 bg-border" />
        or continue with
        <span className="h-px flex-1 bg-border" />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <Button variant="outline" className="h-11 rounded-xl" type="button">
          Google
        </Button>
        <Button variant="outline" className="h-11 rounded-xl" type="button">
          Apple
        </Button>
      </div>
    </AuthLayout>
  );
}
