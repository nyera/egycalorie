import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AuthLayout } from "@/components/site/AuthLayout";
import { t } from "@/lib/i18n";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Create Your Free EgyCalorie Account — Start Tracking Today" },
      {
        name: "description",
        content:
          "Sign up free for EgyCalorie and start logging Egyptian meals, calories and macros in seconds. No card required.",
      },
      { property: "og:title", content: "Create Your Free EgyCalorie Account" },
      {
        property: "og:description",
        content: "Free calorie and macro tracking built around Egyptian food. No card required.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://egycalorie.lovable.app/signup" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://egycalorie.lovable.app/signup" }],
  }),
  component: Signup,
});

function Signup() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  return (
    <AuthLayout
      title="Create your free account"
      subtitle="Two minutes to set up, then log your first meal today. No card required."
      footer={
        <>
          Already have an account?{" "}
          <Link to="/login" className="font-semibold text-primary hover:underline">{t("Log in")}</Link>
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
          <Label htmlFor="name">{t("Full name")}</Label>
          <Input id="name" required placeholder={t("Nour Hassan")} className="h-11 rounded-xl" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">{t("Email")}</Label>
          <Input
            id="email"
            type="email"
            required
            placeholder={t("you@example.com")}
            className="h-11 rounded-xl"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">{t("Password")}</Label>
          <Input
            id="password"
            type="password"
            required
            placeholder={t("At least 8 characters")}
            className="h-11 rounded-xl"
          />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="goal">{t("Your goal")}</Label>
            <Select defaultValue="lose">
              <SelectTrigger id="goal" className="h-11 rounded-xl">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="lose">{t("Lose weight")}</SelectItem>
                <SelectItem value="maintain">{t("Maintain weight")}</SelectItem>
                <SelectItem value="gain">{t("Build muscle")}</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="activity">{t("Activity level")}</Label>
            <Select defaultValue="light">
              <SelectTrigger id="activity" className="h-11 rounded-xl">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sedentary">{t("Sedentary")}</SelectItem>
                <SelectItem value="light">{t("Lightly active")}</SelectItem>
                <SelectItem value="moderate">{t("Moderately active")}</SelectItem>
                <SelectItem value="high">{t("Very active")}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <label className="flex items-start gap-2.5 text-sm text-muted-foreground">
          <Checkbox id="terms" defaultChecked className="mt-0.5" />
          <span>{t("I agree to the terms of service and privacy policy.")}</span>
        </label>
        <Button type="submit" size="lg" disabled={loading} className="w-full rounded-full">
          {loading ? "Creating account…" : "Create free account"}
        </Button>
      </form>

      <div className="my-6 flex items-center gap-4 text-xs text-muted-foreground">
        <span className="h-px flex-1 bg-border" />{t("or sign up with")}<span className="h-px flex-1 bg-border" />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <Button variant="outline" className="h-11 rounded-xl" type="button">{t("Google")}</Button>
        <Button variant="outline" className="h-11 rounded-xl" type="button">{t("Apple")}</Button>
      </div>
    </AuthLayout>
  );
}
